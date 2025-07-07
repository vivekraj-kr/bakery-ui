import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export type CupcakeCardVariant = 'default' | 'outlined' | 'elevated' | 'filled';
export type CupcakeCardSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'cupcake-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div 
      [class]="cardClasses"
      [attr.role]="clickable ? 'button' : null"
      [attr.tabindex]="clickable ? 0 : null"
      [attr.aria-label]="ariaLabel"
      (click)="handleClick($event)"
      (keyup.enter)="handleClick($event)"
      (keyup.space)="handleClick($event)"
      matRipple
      [matRippleDisabled]="!clickable"
      [matRippleColor]="rippleColor">
      
      <!-- Header -->
      <div *ngIf="hasHeader" [class]="headerClasses">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div *ngIf="avatar" class="flex-shrink-0">
              <img [src]="avatar" [alt]="avatarAlt" class="w-10 h-10 rounded-full object-cover">
            </div>
            <div>
              <h3 *ngIf="title" class="text-lg font-semibold text-amber-900">{{ title }}</h3>
              <p *ngIf="subtitle" class="text-sm text-amber-600">{{ subtitle }}</p>
            </div>
          </div>
          <div *ngIf="headerAction" class="flex-shrink-0">
            <ng-content select="[slot=header-action]"></ng-content>
          </div>
        </div>
      </div>

      <!-- Image -->
      <div *ngIf="image" class="relative overflow-hidden">
        <img 
          [src]="image" 
          [alt]="imageAlt" 
          [class]="imageClasses"
          [loading]="imageLoading">
        <div *ngIf="imageBadge" class="absolute top-2 right-2">
          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            {{ imageBadge }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div [class]="contentClasses">
        <ng-content></ng-content>
      </div>

      <!-- Footer -->
      <div *ngIf="hasFooter" [class]="footerClasses">
        <ng-content select="[slot=footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class CupcakeCard {
  @Input() variant: CupcakeCardVariant = 'default';
  @Input() size: CupcakeCardSize = 'md';
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() image?: string;
  @Input() imageAlt?: string;
  @Input() imageLoading: 'lazy' | 'eager' = 'lazy';
  @Input() imageBadge?: string;
  @Input() avatar?: string;
  @Input() avatarAlt?: string;
  @Input() clickable = false;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() headerAction = false;
  @Input() hasHeader = false;
  @Input() hasFooter = false;
  @Input() ariaLabel?: string;
  @Input() fullWidth = false;

  @Output() cardClick = new EventEmitter<Event>();

  handleClick(event: Event): void {
    if (this.clickable && !this.disabled && !this.loading) {
      this.cardClick.emit(event);
    }
  }

  get cardClasses(): string {
    const baseClasses = [
      'rounded-xl overflow-hidden transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500'
    ];

    const sizeClasses = {
      sm: 'max-w-xs',
      md: 'max-w-sm',
      lg: 'max-w-md'
    };

    const variantClasses = {
      default: [
        'bg-white border border-amber-200',
        'hover:border-amber-300 hover:shadow-md'
      ],
      outlined: [
        'bg-transparent border-2 border-amber-300',
        'hover:border-amber-400 hover:bg-amber-50'
      ],
      elevated: [
        'bg-white shadow-lg shadow-amber-100',
        'hover:shadow-xl hover:shadow-amber-200',
        'border border-amber-100'
      ],
      filled: [
        'bg-gradient-to-br from-amber-50 to-orange-50',
        'border border-amber-200',
        'hover:from-amber-100 hover:to-orange-100'
      ]
    };

    const interactionClasses = [];
    if (this.clickable) {
      interactionClasses.push(
        'cursor-pointer',
        'hover:transform hover:scale-105',
        'active:scale-95'
      );
    }

    if (this.disabled) {
      interactionClasses.push('opacity-50 cursor-not-allowed');
    }

    if (this.loading) {
      interactionClasses.push('opacity-70 cursor-wait');
    }

    const classes = [
      ...baseClasses,
      ...variantClasses[this.variant],
      ...interactionClasses
    ];

    if (!this.fullWidth) {
      classes.push(sizeClasses[this.size]);
    }

    return classes.join(' ');
  }

  get headerClasses(): string {
    const sizeClasses = {
      sm: 'p-2 pb-1',
      md: 'p-3 pb-2',
      lg: 'p-4 pb-2'
    };

    return [
      'border-b border-amber-100',
      sizeClasses[this.size]
    ].join(' ');
  }

  get contentClasses(): string {
    const sizeClasses = {
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4'
    };

    const spacingClasses = [];
    if (this.hasHeader && !this.image) spacingClasses.push('pt-2');
    if (this.hasFooter) spacingClasses.push('pb-2');
    if (this.image && !this.hasHeader) spacingClasses.push('pt-0');

    return [
      sizeClasses[this.size],
      ...spacingClasses
    ].join(' ');
  }

  get footerClasses(): string {
    const sizeClasses = {
      sm: 'p-2 pt-1',
      md: 'p-3 pt-2', 
      lg: 'p-4 pt-2'
    };

    return [
      'border-t border-amber-100',
      sizeClasses[this.size]
    ].join(' ');
  }

  get imageClasses(): string {
    return [
      'w-full h-32 object-cover',
      'transition-transform duration-200',
      this.clickable ? 'hover:scale-105' : ''
    ].join(' ');
  }

  get rippleColor(): string {
    return 'rgba(245, 158, 11, 0.2)';
  }
} 
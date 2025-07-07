import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

export type BaguetteButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type BaguetteButtonSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'baguette-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      [attr.aria-label]="ariaLabel"
      [attr.aria-describedby]="ariaDescribedBy"
      (click)="handleClick($event)"
      matRipple
      [matRippleDisabled]="disabled || loading"
      [matRippleColor]="rippleColor">
      
      <!-- Loading spinner -->
      <svg 
        *ngIf="loading" 
        class="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      
      <!-- Left icon -->
      <span *ngIf="leftIcon && !loading" [innerHTML]="leftIcon" class="mr-2"></span>
      
      <!-- Button content -->
      <span [class]="contentClasses">
        <ng-content></ng-content>
      </span>
      
      <!-- Right icon -->
      <span *ngIf="rightIcon" [innerHTML]="rightIcon" class="ml-2"></span>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class BaguetteButton {
  @Input() variant: BaguetteButtonVariant = 'primary';
  @Input() size: BaguetteButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  get buttonClasses(): string {
    const baseClasses = [
      'inline-flex items-center justify-center font-medium rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'transform hover:scale-105 active:scale-95',
      'shadow-sm hover:shadow-md'
    ];

    // Size classes - made more compact
    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base',
      xl: 'px-5 py-2.5 text-lg'
    };

    // Variant classes with bakery theme
    const variantClasses = {
      primary: [
        'bg-gradient-to-r from-amber-400 to-yellow-500',
        'hover:from-amber-500 hover:to-yellow-600',
        'text-amber-900 font-semibold',
        'border border-amber-300',
        'focus:ring-amber-500',
        'shadow-amber-200'
      ],
      secondary: [
        'bg-gradient-to-r from-orange-100 to-amber-100',
        'hover:from-orange-200 hover:to-amber-200',
        'text-amber-800 font-medium',
        'border border-amber-200',
        'focus:ring-amber-400'
      ],
      outline: [
        'bg-transparent border-2 border-amber-400',
        'hover:bg-amber-50 hover:border-amber-500',
        'text-amber-700 font-medium',
        'focus:ring-amber-400'
      ],
      ghost: [
        'bg-transparent hover:bg-amber-50',
        'text-amber-700 font-medium',
        'focus:ring-amber-400'
      ],
      danger: [
        'bg-gradient-to-r from-red-500 to-red-600',
        'hover:from-red-600 hover:to-red-700',
        'text-white font-medium',
        'border border-red-400',
        'focus:ring-red-500',
        'shadow-red-200'
      ]
    };

    const classes = [
      ...baseClasses,
      sizeClasses[this.size],
      ...variantClasses[this.variant]
    ];

    if (this.fullWidth) {
      classes.push('w-full');
    }

    return classes.join(' ');
  }

  get contentClasses(): string {
    return this.loading ? 'opacity-70' : '';
  }

  get rippleColor(): string {
    const rippleColors = {
      primary: 'rgba(245, 158, 11, 0.3)',
      secondary: 'rgba(217, 119, 6, 0.3)',
      outline: 'rgba(245, 158, 11, 0.2)',
      ghost: 'rgba(245, 158, 11, 0.1)',
      danger: 'rgba(239, 68, 68, 0.3)'
    };
    return rippleColors[this.variant];
  }
} 
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

@Component({
  selector: 'toast-notification',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ],
  template: `
    <div 
      *ngIf="visible"
      [@slideIn]
      [class]="toastClasses"
      [attr.role]="'alert'"
      [attr.aria-live]="'polite'"
      [attr.aria-atomic]="'true'">
      
      <!-- Icon -->
      <div class="flex-shrink-0">
        <svg [class]="iconClasses" fill="currentColor" viewBox="0 0 20 20">
          <!-- Success Icon -->
          <path *ngIf="type === 'success'" 
                fill-rule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clip-rule="evenodd" />
          
          <!-- Error Icon -->
          <path *ngIf="type === 'error'" 
                fill-rule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                clip-rule="evenodd" />
          
          <!-- Warning Icon -->
          <path *ngIf="type === 'warning'" 
                fill-rule="evenodd" 
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" 
                clip-rule="evenodd" />
          
          <!-- Info Icon -->
          <path *ngIf="type === 'info'" 
                fill-rule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                clip-rule="evenodd" />
        </svg>
      </div>

      <!-- Content -->
      <div class="ml-3 flex-1">
        <h4 *ngIf="title" [class]="titleClasses">{{ title }}</h4>
        <p [class]="messageClasses">{{ message }}</p>
        
        <!-- Action Button -->
        <div *ngIf="actionText" class="mt-3">
          <button 
            type="button"
            [class]="actionButtonClasses"
            (click)="onAction()">
            {{ actionText }}
          </button>
        </div>
      </div>

      <!-- Close Button -->
      <div *ngIf="closable" class="ml-4 flex-shrink-0 flex">
        <button 
          type="button"
          [class]="closeButtonClasses"
          (click)="onClose()"
          [attr.aria-label]="'Close notification'">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                  clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      position: fixed;
      z-index: 1000;
    }
    
    :host(.top-right) { top: 1rem; right: 1rem; }
    :host(.top-left) { top: 1rem; left: 1rem; }
    :host(.bottom-right) { bottom: 1rem; right: 1rem; }
    :host(.bottom-left) { bottom: 1rem; left: 1rem; }
    :host(.top-center) { top: 1rem; left: 50%; transform: translateX(-50%); }
    :host(.bottom-center) { bottom: 1rem; left: 50%; transform: translateX(-50%); }
  `]
})
export class ToastNotification implements OnInit, OnDestroy {
  @Input() type: ToastType = 'info';
  @Input() title?: string;
  @Input() message = '';
  @Input() duration = 5000; // 5 seconds
  @Input() closable = true;
  @Input() actionText?: string;
  @Input() position: ToastPosition = 'top-right';
  @Input() persistent = false; // Don't auto-hide
  @Input() visible = true;

  @Output() closed = new EventEmitter<void>();
  @Output() action = new EventEmitter<void>();

  private timeoutId?: number;

  ngOnInit(): void {
    if (!this.persistent && this.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.onClose();
      }, this.duration);
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  onClose(): void {
    this.visible = false;
    this.closed.emit();
  }

  onAction(): void {
    this.action.emit();
  }

  get toastClasses(): string {
    const baseClasses = [
      'max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto',
      'ring-1 ring-black ring-opacity-5 overflow-hidden',
      'transition-all duration-300 ease-in-out'
    ];

    const typeClasses = {
      success: 'border-l-4 border-green-400',
      error: 'border-l-4 border-red-400',
      warning: 'border-l-4 border-yellow-400',
      info: 'border-l-4 border-blue-400'
    };

    return [
      ...baseClasses,
      typeClasses[this.type],
      'p-4'
    ].join(' ');
  }

  get iconClasses(): string {
    const baseClasses = 'h-6 w-6';
    
    const typeClasses = {
      success: 'text-green-400',
      error: 'text-red-400',
      warning: 'text-yellow-400',
      info: 'text-blue-400'
    };

    return [baseClasses, typeClasses[this.type]].join(' ');
  }

  get titleClasses(): string {
    return 'text-sm font-medium text-gray-900';
  }

  get messageClasses(): string {
    return this.title ? 'mt-1 text-sm text-gray-500' : 'text-sm text-gray-900';
  }

  get actionButtonClasses(): string {
    const typeClasses = {
      success: 'text-green-600 hover:text-green-500 focus:ring-green-500',
      error: 'text-red-600 hover:text-red-500 focus:ring-red-500',
      warning: 'text-yellow-600 hover:text-yellow-500 focus:ring-yellow-500',
      info: 'text-blue-600 hover:text-blue-500 focus:ring-blue-500'
    };

    return [
      'text-sm font-medium rounded-md',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'transition-colors duration-200',
      typeClasses[this.type]
    ].join(' ');
  }

  get closeButtonClasses(): string {
    return [
      'bg-white rounded-md inline-flex text-gray-400',
      'hover:text-gray-500 focus:outline-none',
      'focus:ring-2 focus:ring-offset-2 focus:ring-amber-500',
      'transition-colors duration-200'
    ].join(' ');
  }
} 
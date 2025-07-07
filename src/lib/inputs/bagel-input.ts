import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

export type BagelInputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export type BagelInputSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'bagel-input',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BagelInput),
      multi: true
    }
  ],
  template: `
    <div class="w-full">
      <!-- Label -->
      <label 
        *ngIf="label" 
        [for]="inputId"
        [class]="labelClasses">
        {{ label }}
        <span *ngIf="required" class="text-red-500 ml-1">*</span>
      </label>

      <!-- Input Container -->
      <div [class]="containerClasses">
        <!-- Left Icon -->
        <div *ngIf="leftIcon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span [innerHTML]="leftIcon" class="text-amber-600"></span>
        </div>

        <!-- Input Field -->
        <input
          [id]="inputId"
          [type]="type"
          [value]="value"
          [placeholder]="placeholder"
          [disabled]="disabled"
          [readonly]="readonly"
          [class]="inputClasses"
          [attr.aria-label]="ariaLabel"
          [attr.aria-describedby]="ariaDescribedBy"
          [attr.autocomplete]="autocomplete"
          [attr.maxlength]="maxLength"
          [attr.minlength]="minLength"
          [attr.min]="min"
          [attr.max]="max"
          [attr.step]="step"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (focus)="onFocus()"
          (keyup.enter)="onEnter()"
        />

        <!-- Right Icon / Clear Button -->
        <div *ngIf="rightIcon || (clearable && value)" class="absolute inset-y-0 right-0 flex items-center">
          <button
            *ngIf="clearable && value && !disabled"
            type="button"
            class="pr-3 text-amber-600 hover:text-amber-700 focus:outline-none"
            (click)="clearValue()"
            [attr.aria-label]="'Clear ' + (label || 'input')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <span 
            *ngIf="rightIcon" 
            [innerHTML]="rightIcon" 
            class="pr-3 text-amber-600"></span>
        </div>
      </div>

      <!-- Helper Text -->
      <p *ngIf="helperText && !error" [class]="helperClasses">
        {{ helperText }}
      </p>

      <!-- Error Message -->
      <p *ngIf="error" [class]="errorClasses">
        {{ error }}
      </p>

      <!-- Character Count -->
      <p *ngIf="maxLength && showCharCount" [class]="charCountClasses">
        {{ value?.length || 0 }}/{{ maxLength }}
      </p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class BagelInput implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: BagelInputType = 'text';
  @Input() size: BagelInputSize = 'md';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() clearable = false;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Input() helperText?: string;
  @Input() error?: string;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;
  @Input() autocomplete?: string;
  @Input() maxLength?: number;
  @Input() minLength?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  @Input() showCharCount = false;
  @Input() inputId = `bagel-input-${Math.random().toString(36).substring(2, 9)}`;

  @Output() valueChange = new EventEmitter<string>();
  @Output() inputFocus = new EventEmitter<void>();
  @Output() inputBlur = new EventEmitter<void>();
  @Output() enterPressed = new EventEmitter<void>();

  value = '';
  private onChange = (value: string) => {};
  private onTouched = () => {};

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onBlur(): void {
    this.onTouched();
    this.inputBlur.emit();
  }

  onFocus(): void {
    this.inputFocus.emit();
  }

  onEnter(): void {
    this.enterPressed.emit();
  }

  clearValue(): void {
    this.value = '';
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  get labelClasses(): string {
    return [
      'block text-xs font-medium mb-1',
      this.error ? 'text-red-700' : 'text-amber-800'
    ].join(' ');
  }

  get containerClasses(): string {
    return 'relative';
  }

  get inputClasses(): string {
    const baseClasses = [
      'block w-full rounded-lg border-2 transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-1',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'placeholder-amber-400'
    ];

    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base'
    };

    const stateClasses = this.error 
      ? [
          'border-red-300 bg-red-50',
          'focus:border-red-500 focus:ring-red-200',
          'text-red-900'
        ]
      : [
          'border-amber-300 bg-amber-50',
          'focus:border-amber-500 focus:ring-amber-200',
          'text-amber-900',
          'hover:border-amber-400'
        ];

    const paddingAdjustment = [];
    if (this.leftIcon) paddingAdjustment.push('pl-10');
    if (this.rightIcon || this.clearable) paddingAdjustment.push('pr-10');

    return [
      ...baseClasses,
      sizeClasses[this.size],
      ...stateClasses,
      ...paddingAdjustment
    ].join(' ');
  }

  get helperClasses(): string {
    return 'mt-0.5 text-xs text-amber-600';
  }

  get errorClasses(): string {
    return 'mt-0.5 text-xs text-red-600 flex items-center';
  }

  get charCountClasses(): string {
    const isNearLimit = this.maxLength && this.value?.length > this.maxLength * 0.8;
    return [
      'mt-1 text-xs text-right',
      isNearLimit ? 'text-red-500' : 'text-amber-500'
    ].join(' ');
  }
} 
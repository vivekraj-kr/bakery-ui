import type { Meta, StoryObj } from '@storybook/angular';
import { BagelInput } from './bagel-input';

const meta: Meta<BagelInput> = {
  title: 'Bakery UI/Inputs/BagelInput',
  component: BagelInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# BagelInput

A comprehensive input component with bakery-inspired styling and enterprise-ready features.

## Features
- 🎨 Bakery-themed styling with warm colors
- 📝 Multiple input types (text, email, password, number, etc.)
- 📏 Three sizes (sm, md, lg)
- 🎯 Left and right icon support
- 🧹 Clearable functionality
- 📊 Character count display
- ⚠️ Error state handling
- ♿ Full accessibility support
- 🎭 Form integration with ControlValueAccessor

## Usage
Perfect for forms, search inputs, and data entry in bakery, restaurant, or e-commerce applications.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input'
    },
    readonly: {
      control: 'boolean',
      description: 'Make input readonly'
    },
    required: {
      control: 'boolean',
      description: 'Mark input as required'
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value'
    },
    showCharCount: {
      control: 'boolean',
      description: 'Show character count'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text'
    },
    helperText: {
      control: 'text',
      description: 'Helper text below input'
    },
    error: {
      control: 'text',
      description: 'Error message'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length'
    }
  },
  args: {
    type: 'text',
    size: 'md',
    disabled: false,
    readonly: false,
    required: false,
    clearable: false,
    showCharCount: false,
    label: 'Customer Name',
    placeholder: 'Enter your name...'
  }
};

export default meta;
type Story = StoryObj<BagelInput>;

// Basic Examples
export const Default: Story = {
  args: {
    label: 'Customer Name',
    placeholder: 'Enter your name...'
  }
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'john@example.com',
    helperText: 'We\'ll use this to send you order updates'
  }
};

export const WithError: Story = {
  args: {
    label: 'Phone Number',
    type: 'tel',
    placeholder: '(555) 123-4567',
    error: 'Please enter a valid phone number'
  }
};

export const Required: Story = {
  args: {
    label: 'Order Notes',
    placeholder: 'Special instructions...',
    required: true,
    helperText: 'Please provide any special instructions for your order'
  }
};

// Size Examples
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 w-80">
        <bagel-input 
          label="Small Input" 
          size="sm" 
          placeholder="Small size...">
        </bagel-input>
        <bagel-input 
          label="Medium Input" 
          size="md" 
          placeholder="Medium size...">
        </bagel-input>
        <bagel-input 
          label="Large Input" 
          size="lg" 
          placeholder="Large size...">
        </bagel-input>
      </div>
    `
  })
};

// Input Types
export const InputTypes: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 w-80">
        <bagel-input 
          label="Text Input" 
          type="text" 
          placeholder="Enter text...">
        </bagel-input>
        <bagel-input 
          label="Email Input" 
          type="email" 
          placeholder="Enter email...">
        </bagel-input>
        <bagel-input 
          label="Password Input" 
          type="password" 
          placeholder="Enter password...">
        </bagel-input>
        <bagel-input 
          label="Number Input" 
          type="number" 
          placeholder="Enter number...">
        </bagel-input>
        <bagel-input 
          label="Search Input" 
          type="search" 
          placeholder="Search products...">
        </bagel-input>
      </div>
    `
  })
};

// With Icons
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 w-80">
        <bagel-input 
          label="Search Products" 
          type="search"
          placeholder="Search our bakery..."
          [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot;></path></svg>'"
          [clearable]="true">
        </bagel-input>
        <bagel-input 
          label="Email Address" 
          type="email"
          placeholder="your@email.com"
          [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207&quot;></path></svg>'">
        </bagel-input>
        <bagel-input 
          label="Phone Number" 
          type="tel"
          placeholder="(555) 123-4567"
          [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;></path></svg>'">
        </bagel-input>
      </div>
    `
  })
};

// Character Count
export const WithCharacterCount: Story = {
  args: {
    label: 'Order Notes',
    placeholder: 'Enter special instructions...',
    maxLength: 200,
    showCharCount: true,
    helperText: 'Tell us about any special requirements for your order'
  }
};

// States
export const States: Story = {
  render: () => ({
    template: `
      <div class="space-y-6 w-80">
        <bagel-input 
          label="Normal State" 
          placeholder="Normal input...">
        </bagel-input>
        <bagel-input 
          label="Disabled State" 
          placeholder="Disabled input..."
          [disabled]="true">
        </bagel-input>
        <bagel-input 
          label="Readonly State" 
          placeholder="Readonly input..."
          [readonly]="true">
        </bagel-input>
        <bagel-input 
          label="With Error" 
          placeholder="Error state..."
          error="This field is required">
        </bagel-input>
      </div>
    `
  })
};

// Clearable
export const Clearable: Story = {
  args: {
    label: 'Search Products',
    placeholder: 'Start typing to search...',
    clearable: true,
    leftIcon: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>'
  }
};

// Form Example
export const FormExample: Story = {
  render: () => ({
    template: `
      <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-amber-900 mb-6">Order Information</h2>
        <form class="space-y-4">
          <bagel-input 
            label="Full Name" 
            placeholder="Enter your full name..."
            [required]="true"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;></path></svg>'">
          </bagel-input>
          
          <bagel-input 
            label="Email Address" 
            type="email"
            placeholder="your@email.com"
            [required]="true"
            helperText="We'll send order confirmation here"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207&quot;></path></svg>'">
          </bagel-input>
          
          <bagel-input 
            label="Phone Number" 
            type="tel"
            placeholder="(555) 123-4567"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;></path></svg>'">
          </bagel-input>
          
          <bagel-input 
            label="Special Instructions" 
            placeholder="Any dietary restrictions or special requests..."
            [maxLength]="200"
            [showCharCount]="true"
            helperText="Let us know about allergies or special requirements">
          </bagel-input>
          
          <div class="pt-4">
            <baguette-button [fullWidth]="true">Place Order</baguette-button>
          </div>
        </form>
      </div>
    `
  })
}; 
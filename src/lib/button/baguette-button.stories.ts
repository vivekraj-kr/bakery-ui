import type { Meta, StoryObj } from '@storybook/angular';
import { BaguetteButton } from './baguette-button';

const meta: Meta<BaguetteButton> = {
  title: 'Bakery UI/Buttons/BaguetteButton',
  component: BaguetteButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# BaguetteButton

A versatile button component with bakery-inspired styling and enterprise-ready features.

## Features
- 🎨 Multiple variants (primary, secondary, outline, ghost, danger)
- 📏 Four sizes (sm, md, lg, xl)
- 🔄 Loading states with spinner
- 🎯 Left and right icon support
- ♿ Full accessibility support
- 🎭 Material Design ripple effects
- 📱 Responsive design

## Usage
Perfect for call-to-action buttons, form submissions, and interactive elements in bakery, restaurant, or e-commerce applications.
        `
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button'
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width'
    },
    leftIcon: {
      control: 'text',
      description: 'SVG icon HTML for left side'
    },
    rightIcon: {
      control: 'text',
      description: 'SVG icon HTML for right side'
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  }
};

export default meta;
type Story = StoryObj<BaguetteButton>;

// Basic Examples
export const Primary: Story = {
  args: {
    variant: 'primary'
  },
  render: (args) => ({
    props: args,
    template: `<baguette-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">Order Fresh Bread</baguette-button>`
  })
};

export const Secondary: Story = {
  args: {
    variant: 'secondary'
  },
  render: (args) => ({
    props: args,
    template: `<baguette-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">View Menu</baguette-button>`
  })
};

export const Outline: Story = {
  args: {
    variant: 'outline'
  },
  render: (args) => ({
    props: args,
    template: `<baguette-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">Learn More</baguette-button>`
  })
};

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  },
  render: (args) => ({
    props: args,
    template: `<baguette-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">Cancel</baguette-button>`
  })
};

export const Danger: Story = {
  args: {
    variant: 'danger'
  },
  render: (args) => ({
    props: args,
    template: `<baguette-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth">Delete Order</baguette-button>`
  })
};

// Size Examples
export const Sizes: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <baguette-button size="sm">Small</baguette-button>
          <baguette-button size="md">Medium</baguette-button>
          <baguette-button size="lg">Large</baguette-button>
          <baguette-button size="xl">Extra Large</baguette-button>
        </div>
      </div>
    `
  })
};

// State Examples
export const States: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <baguette-button>Normal</baguette-button>
          <baguette-button [disabled]="true">Disabled</baguette-button>
          <baguette-button [loading]="true">Loading</baguette-button>
        </div>
      </div>
    `
  })
};

// With Icons
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <baguette-button 
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01&quot;></path></svg>'">
            Add to Cart
          </baguette-button>
          <baguette-button 
            variant="secondary"
            [rightIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot;></path></svg>'">
            Continue
          </baguette-button>
        </div>
      </div>
    `
  })
};

// Full Width Example
export const FullWidth: Story = {
  args: {
    fullWidth: true
  },
  render: (args) => ({
    props: args,
    template: `
      <div class="w-80">
        <baguette-button [fullWidth]="fullWidth">Complete Order</baguette-button>
      </div>
    `
  })
};

// Interactive Example
export const Interactive: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-amber-900">Bakery Actions</h3>
        <div class="grid grid-cols-2 gap-4">
          <baguette-button 
            variant="primary"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z&quot;></path></svg>'"
            (clicked)="onOrderClick()">
            Order Bread
          </baguette-button>
          <baguette-button 
            variant="secondary"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;></path></svg>'"
            (clicked)="onMenuClick()">
            View Menu
          </baguette-button>
          <baguette-button 
            variant="outline"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z&quot;></path><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 11a3 3 0 11-6 0 3 3 0 016 0z&quot;></path></svg>'"
            (clicked)="onLocationClick()">
            Find Store
          </baguette-button>
          <baguette-button 
            variant="ghost"
            [leftIcon]="'<svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;><path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;></path></svg>'"
            (clicked)="onCallClick()">
            Call Us
          </baguette-button>
        </div>
      </div>
    `,
    props: {
      onOrderClick: () => console.log('Order clicked!'),
      onMenuClick: () => console.log('Menu clicked!'),
      onLocationClick: () => console.log('Location clicked!'),
      onCallClick: () => console.log('Call clicked!')
    }
  })
}; 
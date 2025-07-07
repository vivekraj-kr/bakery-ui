import type { Meta, StoryObj } from '@storybook/angular';
import { CupcakeCard } from './cupcake-card';

const meta: Meta<CupcakeCard> = {
  title: 'Display/CupcakeCard',
  component: CupcakeCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A delightful card component perfect for displaying content with optional headers and footers. Sweet and customizable like a cupcake!'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined', 'filled'],
      description: 'Visual style variant of the card'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the card'
    },
    title: {
      control: 'text',
      description: 'Title of the card'
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle of the card'
    },
    image: {
      control: 'text',
      description: 'Image URL for the card'
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is clickable'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled'
    },
    hasHeader: {
      control: 'boolean',
      description: 'Whether the card has a header section'
    },
    hasFooter: {
      control: 'boolean',
      description: 'Whether the card has a footer section'
    }
  }
};

export default meta;
type Story = StoryObj<CupcakeCard>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    clickable: false,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [clickable]="clickable"
        [disabled]="disabled">
        <div class="p-2">
          <h3 class="text-sm font-semibold text-amber-900 mb-1">Vanilla Cupcake</h3>
          <p class="text-xs text-amber-700">A classic vanilla cupcake with buttercream frosting.</p>
        </div>
      </cupcake-card>
    `
  })
};

export const WithHeader: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
    title: 'Featured Dessert',
    subtitle: 'Baker\'s Choice',
    hasHeader: true,
    clickable: false,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [title]="title"
        [subtitle]="subtitle"
        [hasHeader]="hasHeader"
        [clickable]="clickable"
        [disabled]="disabled">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-amber-900 mb-2">Chocolate Delight</h3>
          <p class="text-amber-700">Rich chocolate cupcake with dark chocolate ganache and gold sprinkles.</p>
          <div class="mt-3 flex items-center justify-between">
            <span class="text-2xl font-bold text-amber-800">$4.99</span>
            <span class="text-sm text-amber-600">★★★★★</span>
          </div>
        </div>
      </cupcake-card>
    `
  })
};

export const WithFooter: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    hasFooter: true,
    clickable: false,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [hasFooter]="hasFooter"
        [clickable]="clickable"
        [disabled]="disabled">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-amber-900 mb-2">Strawberry Swirl</h3>
          <p class="text-amber-700">Fresh strawberry cupcake with cream cheese frosting and real strawberry pieces.</p>
        </div>
        <div slot="footer" class="px-4 py-2 bg-amber-50 border-t border-amber-200">
          <span class="text-sm text-amber-600">Available now</span>
        </div>
      </cupcake-card>
    `
  })
};

export const WithImage: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=300&fit=crop',
    clickable: false,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [image]="image"
        [clickable]="clickable"
        [disabled]="disabled">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-amber-900 mb-2">Red Velvet Supreme</h3>
          <p class="text-amber-700">Luxurious red velvet cupcake with cream cheese frosting and a hint of cocoa.</p>
        </div>
      </cupcake-card>
    `
  })
};

export const Clickable: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
    clickable: true,
    disabled: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [clickable]="clickable"
        [disabled]="disabled"
        (cardClick)="onClick()">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-amber-900 mb-2">Lemon Zest</h3>
          <p class="text-amber-700">Bright lemon cupcake with lemon buttercream and candied lemon peel.</p>
          <p class="text-sm text-amber-600 mt-2">Click me!</p>
        </div>
      </cupcake-card>
    `,
    methods: {
      onClick: () => {
        alert('Cupcake card clicked! 🧁');
      }
    }
  })
};

export const Disabled: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    disabled: true,
    clickable: false
  },
  render: (args) => ({
    props: args,
    template: `
      <cupcake-card
        [variant]="variant"
        [size]="size"
        [disabled]="disabled"
        [clickable]="clickable">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-amber-900 mb-2">Sold Out</h3>
          <p class="text-amber-700">This delicious cupcake is currently out of stock.</p>
        </div>
      </cupcake-card>
    `
  })
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4 class="text-sm font-medium text-amber-800 mb-2">Default</h4>
          <cupcake-card variant="default" size="md">
            <div class="p-4">
              <h3 class="text-base font-semibold text-amber-900 mb-2">Default Style</h3>
              <p class="text-sm text-amber-700">Clean and simple</p>
            </div>
          </cupcake-card>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-amber-800 mb-2">Elevated</h4>
          <cupcake-card variant="elevated" size="md">
            <div class="p-4">
              <h3 class="text-base font-semibold text-amber-900 mb-2">Elevated Style</h3>
              <p class="text-sm text-amber-700">With shadow depth</p>
            </div>
          </cupcake-card>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-amber-800 mb-2">Outlined</h4>
          <cupcake-card variant="outlined" size="md">
            <div class="p-4">
              <h3 class="text-base font-semibold text-amber-900 mb-2">Outlined Style</h3>
              <p class="text-sm text-amber-700">With border accent</p>
            </div>
          </cupcake-card>
        </div>
        
        <div>
          <h4 class="text-sm font-medium text-amber-800 mb-2">Filled</h4>
          <cupcake-card variant="filled" size="md">
            <div class="p-4">
              <h3 class="text-base font-semibold text-amber-900 mb-2">Filled Style</h3>
              <p class="text-sm text-amber-700">With background color</p>
            </div>
          </cupcake-card>
        </div>
      </div>
    `
  })
}; 
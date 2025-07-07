import type { Meta, StoryObj } from '@storybook/angular';
import { ToastNotification } from './toast-notification';

const meta: Meta<ToastNotification> = {
  title: 'Feedback/ToastNotification',
  component: ToastNotification,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A toast notification component that pops up like fresh bread from the oven! Perfect for showing success, error, warning, and info messages.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Type of notification'
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'],
      description: 'Position of the toast on screen'
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in milliseconds (0 for manual dismiss only)'
    },
    title: {
      control: 'text',
      description: 'Title of the notification'
    },
    message: {
      control: 'text',
      description: 'Message content'
    },
    closable: {
      control: 'boolean',
      description: 'Whether to show the close button'
    },
    persistent: {
      control: 'boolean',
      description: 'Whether the toast persists until manually closed'
    },
    actionText: {
      control: 'text',
      description: 'Label for action button'
    },
    visible: {
      control: 'boolean',
      description: 'Whether the toast is visible'
    }
  }
};

export default meta;
type Story = StoryObj<ToastNotification>;

export const Success: Story = {
  args: {
    type: 'success',
    position: 'top-right',
    duration: 0,
    title: 'Order Complete!',
    message: 'Your delicious bakery items have been added to your cart.',
    closable: true,
    persistent: false,
    visible: true
  }
};

export const Error: Story = {
  args: {
    type: 'error',
    position: 'top-right',
    duration: 0,
    title: 'Oops! Something went wrong',
    message: 'We couldn\'t process your order. Please try again.',
    closable: true,
    persistent: false,
    visible: true
  }
};

export const Warning: Story = {
  args: {
    type: 'warning',
    position: 'top-right',
    duration: 0,
    title: 'Limited Stock',
    message: 'Only 3 croissants left in stock. Order soon!',
    closable: true,
    persistent: false,
    visible: true
  }
};

export const Info: Story = {
  args: {
    type: 'info',
    position: 'top-right',
    duration: 0,
    title: 'New Items Available',
    message: 'Check out our fresh seasonal pastries now available.',
    closable: true,
    persistent: false,
    visible: true
  }
};

export const WithAction: Story = {
  args: {
    type: 'success',
    position: 'bottom-right',
    duration: 0,
    title: 'Item Added to Cart',
    message: 'Chocolate croissant has been added to your cart.',
    closable: true,
    persistent: false,
    actionText: 'View Cart',
    visible: true
  },
  render: (args) => ({
    props: args,
    template: `
      <toast-notification
        [type]="type"
        [position]="position"
        [duration]="duration"
        [title]="title"
        [message]="message"
        [closable]="closable"
        [persistent]="persistent"
        [actionText]="actionText"
        [visible]="visible"
        (action)="onActionClick()"
        (closed)="onDismiss()">
      </toast-notification>
    `,
    methods: {
      onActionClick: () => {
        alert('Action clicked! 🛒');
      },
      onDismiss: () => {
        console.log('Toast dismissed');
      }
    }
  })
};

export const AutoDismiss: Story = {
  args: {
    type: 'info',
    position: 'top-center',
    duration: 3000,
    title: 'Fresh Bread Alert!',
    message: 'New batch of sourdough just came out of the oven.',
    closable: false,
    persistent: false,
    visible: true
  }
};

export const Persistent: Story = {
  args: {
    type: 'error',
    position: 'top-center',
    duration: 0,
    title: 'Connection Error',
    message: 'Unable to connect to our servers. Please check your internet connection.',
    closable: true,
    persistent: true,
    visible: true
  }
};

export const MinimalMessage: Story = {
  args: {
    type: 'info',
    position: 'bottom-center',
    duration: 0,
    message: 'Cookie preferences updated',
    closable: true,
    persistent: false,
    visible: true
  }
};

export const AllTypes: Story = {
  render: () => ({
    template: `
      <div class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <h4 class="text-sm font-medium text-amber-800 mb-2">Success</h4>
            <toast-notification
              type="success"
              position="top-right"
              title="Success!"
              message="Your order has been placed successfully."
              [closable]="true"
              [visible]="true"
              [duration]="0">
            </toast-notification>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-amber-800 mb-2">Error</h4>
            <toast-notification
              type="error"
              position="top-right"
              title="Error"
              message="Something went wrong with your request."
              [closable]="true"
              [visible]="true"
              [duration]="0">
            </toast-notification>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-amber-800 mb-2">Warning</h4>
            <toast-notification
              type="warning"
              position="top-right"
              title="Warning"
              message="Please review your order before proceeding."
              [closable]="true"
              [visible]="true"
              [duration]="0">
            </toast-notification>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-amber-800 mb-2">Info</h4>
            <toast-notification
              type="info"
              position="top-right"
              title="Info"
              message="New features are now available."
              [closable]="true"
              [visible]="true"
              [duration]="0">
            </toast-notification>
          </div>
        </div>
      </div>
    `
  })
}; 
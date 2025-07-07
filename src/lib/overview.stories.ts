import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { BaguetteButton } from './button/baguette-button';
import { BagelInput } from './inputs/bagel-input';
import { CupcakeCard } from './display/cupcake-card';
import { ToastNotification } from './feedback/toast-notification';

@Component({
  selector: 'bakery-overview',
  standalone: true,
  imports: [BaguetteButton, BagelInput, CupcakeCard, ToastNotification],
  template: `
    <div class="p-8 space-y-8 bg-amber-50 min-h-screen">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-amber-900 mb-2">🥖 Bakery UI Components</h1>
        <p class="text-amber-700">A delicious collection of Angular components</p>
      </div>

      <section class="bg-white rounded-lg p-6 shadow-md">
        <h2 class="text-xl font-semibold text-amber-800 mb-4">🥖 Buttons</h2>
        <div class="flex flex-wrap gap-4">
          <bakery-baguette-button variant="primary">Primary</bakery-baguette-button>
          <bakery-baguette-button variant="secondary">Secondary</bakery-baguette-button>
          <bakery-baguette-button variant="outline">Outline</bakery-baguette-button>
          <bakery-baguette-button variant="ghost">Ghost</bakery-baguette-button>
          <bakery-baguette-button variant="danger">Danger</bakery-baguette-button>
        </div>
      </section>

      <section class="bg-white rounded-lg p-6 shadow-md">
        <h2 class="text-xl font-semibold text-amber-800 mb-4">🥯 Inputs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <bakery-bagel-input label="Name" placeholder="Enter your name"></bakery-bagel-input>
          <bakery-bagel-input label="Email" type="email" placeholder="your@email.com"></bakery-bagel-input>
        </div>
      </section>

      <section class="bg-white rounded-lg p-6 shadow-md">
        <h2 class="text-xl font-semibold text-amber-800 mb-4">🧁 Cards</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <bakery-cupcake-card title="Croissant" subtitle="Fresh baked">
            <p>Buttery and flaky pastry</p>
          </bakery-cupcake-card>
          <bakery-cupcake-card title="Sourdough" subtitle="Artisan bread" variant="outlined">
            <p>Traditional fermented bread</p>
          </bakery-cupcake-card>
        </div>
      </section>

      <section class="bg-white rounded-lg p-6 shadow-md">
        <h2 class="text-xl font-semibold text-amber-800 mb-4">🍞 Notifications</h2>
        <div class="space-y-4">
          <bakery-toast-notification type="success" title="Success!" message="Order placed successfully" [autoDismiss]="false"></bakery-toast-notification>
          <bakery-toast-notification type="info" title="Info" message="New items available" [autoDismiss]="false"></bakery-toast-notification>
        </div>
      </section>
    </div>
  `
})
class OverviewComponent {}

const meta: Meta<OverviewComponent> = {
  title: 'Bakery UI/Overview',
  component: OverviewComponent,
  parameters: { layout: 'fullscreen' }
};

export default meta;
type Story = StoryObj<OverviewComponent>;

export const ComponentShowcase: Story = {
  name: 'All Components'
}; 
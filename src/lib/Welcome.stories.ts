import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'welcome-story',
  standalone: true,
  template: `
    <div style="padding: 2rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
      <h1 style="color: #d4af37; font-size: 2.5rem; margin-bottom: 1rem;">
        🥖 Welcome to Bakery UI
      </h1>
      
      <p style="font-size: 1.2rem; color: #333; margin-bottom: 2rem;">
        A delicious collection of Angular components with a warm, bakery-inspired theme.
      </p>
      
      <div style="background: linear-gradient(135deg, #f8f4e6, #fff8dc); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
        <h2 style="color: #8b4513; margin-bottom: 1rem;">🎨 Design Theme</h2>
        <ul style="color: #654321; line-height: 1.6;">
          <li><strong>Golden colors</strong> inspired by fresh bread and pastries</li>
          <li><strong>Warm browns</strong> reminiscent of chocolate and coffee</li>
          <li><strong>Smooth gradients</strong> that evoke the warmth of a bakery</li>
          <li><strong>Modern typography</strong> that's easy to read</li>
        </ul>
      </div>
      
      <div style="background: linear-gradient(135deg, #fff8dc, #f8f4e6); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
        <h2 style="color: #8b4513; margin-bottom: 1rem;">🧩 Available Components</h2>
        <div style="color: #654321;">
          <h3 style="color: #d4af37; margin-bottom: 0.5rem;">Our Components</h3>
          <ul style="line-height: 1.6;">
            <li><strong>BaguetteButton</strong> - Feature-rich buttons with multiple variants</li>
            <li><strong>BagelInput</strong> - Input fields with validation and icons</li>
            <li><strong>CupcakeCard</strong> - Display cards with headers and footers</li>
            <li><strong>ToastNotification</strong> - Feedback notifications with animations</li>
          </ul>
        </div>
      </div>
      
      <div style="background: linear-gradient(135deg, #f0f8ff, #e6f3ff); padding: 1.5rem; border-radius: 12px;">
        <h2 style="color: #2c5aa0; margin-bottom: 1rem;">🚀 Getting Started</h2>
        <p style="color: #1e3a8a; line-height: 1.6;">
          Browse through the component stories in the sidebar to see all available components and their variations. 
          Each component includes interactive controls, documentation, and code snippets you can copy.
        </p>
      </div>
    </div>
  `
})
export class WelcomeComponent {}

const meta: Meta<WelcomeComponent> = {
  title: 'Welcome/Introduction',
  component: WelcomeComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Welcome to the Bakery UI component library!'
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<WelcomeComponent>;

export const Welcome: Story = {}; 
import type { Meta, StoryObj } from '@storybook/angular';

// Create a dummy component for the welcome story
const WelcomeComponent = {
  selector: 'welcome-story',
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
          <h3 style="color: #d4af37; margin-bottom: 0.5rem;">Button Component</h3>
          <p>Our button component comes in three delicious variants:</p>
          <ul style="line-height: 1.6;">
            <li><strong>Primary</strong> - Golden like fresh croissants</li>
            <li><strong>Secondary</strong> - Rich brown like chocolate cake</li>
            <li><strong>Danger</strong> - For those critical actions</li>
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
};

const meta: Meta = {
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
type Story = StoryObj;

export const Welcome: Story = {
  render: () => ({
    template: WelcomeComponent.template
  })
}; 
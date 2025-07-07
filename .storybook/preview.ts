import 'zone.js';
import 'reflect-metadata';
import 'tslib';
import type { Preview } from '@storybook/angular'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'bakery',
      values: [
        { name: 'bakery', value: '#fef7e0' },
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
};

export default preview;
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook"
  ],

  framework: { 
    name: "@storybook/angular", 
    options: {
      enableIvy: true,
      enableProdMode: false
    }
  },

  docs: {
    autodocs: true
  },

  typescript: {
    check: false
  },

  webpackFinal: async (config: any) => {
    // Add tslib as a provider for __decorate
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['tslib'] = require.resolve('tslib');
    
    return config;
  }
};

export default config;
# 🥖 Bakery UI

[![npm version](https://badge.fury.io/js/bakery-ui.svg)](https://badge.fury.io/js/bakery-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-20.0.0-red.svg)](https://angular.io/)

A delicious Angular UI component library with bakery-inspired theming and Storybook integration.

## ✨ Features

- 🎨 **Bakery-inspired theming** with warm, golden colors
- 🧩 **Modular components** built with Angular 20
- 📱 **Responsive design** that works on all devices
- 🔧 **TypeScript support** with full type definitions
- 📖 **Storybook integration** for component development
- 🎯 **Tree-shakable** for optimal bundle size
- ♿ **Accessible** components following WCAG guidelines

## 📦 Installation

```bash
npm install bakery-ui
```

## 🚀 Quick Start

### 1. Import the component in your Angular module or standalone component:

```typescript
import { Component } from '@angular/core';
import { Button } from 'bakery-ui';

@Component({
  selector: 'app-example',
  imports: [Button],
  template: `
    <lib-button 
      label="Order Now" 
      variant="primary" 
      size="medium">
    </lib-button>
  `
})
export class ExampleComponent {}
```

### 2. Use in your template:

```html
<!-- Primary button -->
<lib-button label="Order Now" variant="primary" size="medium"></lib-button>

<!-- Secondary button -->
<lib-button label="Learn More" variant="secondary" size="large"></lib-button>

<!-- Danger button -->
<lib-button label="Delete" variant="danger" size="small" [disabled]="false"></lib-button>
```

## 🧩 Available Components

### Button Component

A versatile button component with bakery-inspired styling.

**Properties:**
- `label: string` - Button text (default: 'Button')
- `variant: 'primary' | 'secondary' | 'danger'` - Button style (default: 'primary')
- `size: 'small' | 'medium' | 'large'` - Button size (default: 'medium')
- `disabled: boolean` - Disabled state (default: false)

**Example:**
```html
<lib-button 
  label="Add to Cart" 
  variant="primary" 
  size="large"
  [disabled]="isLoading">
</lib-button>
```

## 🎨 Theming

Bakery UI comes with a built-in bakery-inspired theme featuring:

- **Primary**: Golden colors reminiscent of fresh bread
- **Secondary**: Rich brown tones like chocolate
- **Danger**: Warm red for important actions
- **Hover effects**: Subtle animations and depth
- **Typography**: Clean, readable fonts

## 📖 Storybook

View all components in our interactive Storybook:

```bash
# Clone the repository
git clone https://github.com/vivekraj-kr/bakery-ui.git
cd bakery-ui

# Install dependencies
npm install

# Run Storybook
ng run bakery-ui:storybook
```

## 🔧 Development

### Building the Library

```bash
ng build bakery-ui
```

### Running Tests

```bash
ng test
```

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Requirements

- Angular 20.0.0 or higher
- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- 🐛 [Report bugs](https://github.com/vivekraj-kr/bakery-ui/issues)
- 💡 [Request features](https://github.com/vivekraj-kr/bakery-ui/issues)
- 📧 [Contact us](mailto:vivekrajkr.mail@gmail.com)

## 🏆 Acknowledgments

- Built with [Angular CLI](https://angular.io/cli)
- Powered by [Storybook](https://storybook.js.org/)
- Inspired by the warmth and comfort of bakeries everywhere

---

Made with ❤️ and a lot of ☕ by [Vivek Raj](https://github.com/vivekraj-kr)

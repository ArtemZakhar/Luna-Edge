import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        smallTel: {
          name: 'smallTel',
          styles: {
            width: '320px',
            height: '570px',
          },
        },
        largerTel: {
          name: 'largerTelephone',
          styles: {
            width: '578px',
            height: '800px',
          },
        },
        laptop: {
          name: 'laptop',
          styles: {
            width: '769px',
            height: '900px',
          },
        },
        smallPC: {
          name: 'smallPC',
          styles: {
            width: '1200px',
            height: '1400px',
          },
        },
        bigPC: {
          name: 'bigPC',
          styles: {
            width: '1600px',
            height: '2400px',
          },
        },
      }, // newViewports would be an ViewportMap. (see below for examples)
      defaultViewport: 'portrait',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

import type { Preview } from "@storybook/react";
import * as NextImage from 'next/image'
import React from 'react';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => React.createElement(OriginalNextImage, { ...props, unoptimized: true }),
});

// Object.defineProperty(NextImage, '__esModule', {
//   configurable: true,
//   value: true,
// });

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

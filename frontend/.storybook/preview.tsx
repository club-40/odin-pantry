import React from "react";
import type { Decorator, Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../src/index.css";

const viewports = {
  small: {
    name: "Small",
    styles: {
      width: "390px",
      height: "844px",
    },
  },
  medium: {
    name: "Medium",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Large",
    styles: {
      width: "1512px",
      height: "982px",
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      retry: false,
      cacheTime: 0,
    },
  },
});

const decorators: Decorator[] = [
  (Story) => {
    // Extend if we're going to have more providers
    return (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    );
  },
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ["Introduction", "Design", "Components"],
      },
    },
    viewport: { viewports, defaultViewport: "small" },
  },
  decorators,
};

export default preview;

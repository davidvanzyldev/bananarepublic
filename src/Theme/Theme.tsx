import { Theme } from "@emotion/react";

export type VariantType = "primary" | "secondary";
export type PaddingSizeTYpe = "xs" | "sm" | "md" | "lg";

// some sane breakpoints for media queries
export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 900,
  xl: 1400
};

// Typing of breakpoints
export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });

// Theme to expose to app
export const theme: Theme = {
  typography: {
    global: {
      fontFamily: "Arial"
    }
  },

  layout: {
    xs: 12,
    sm: 24,
    md: 32,
    lg: 48,
    xl: 64
  },

  // colours to be retrieved from docs
  color: {
    // e.g. green button
    primary: {
      main: "#60e6c5",
      contrast: "white"
    },
    // e.g. grey button
    secondary: {
      main: "#f5f8f9",
      contrast: "black"
    },

    backgrounds: {
      white: "#FFFFFF",
      yellow: "#ffd500",
      orange: "#FFA500"
    },
    form: {
      // when active
      primary: {
        background: "fcfcfd",
        color: "#383838",
        border: "#cad7dd"
      },
      // when not focused
      secondary: {
        background: "#f5f8f9",
        color: "#b1bfcd",
        border: ""
      },
      error: {
        background: "",
        color: "",
        border: ""
      }
    },
    text: {
      primary: "#383838",
      secondary: ""
    }
  }
};

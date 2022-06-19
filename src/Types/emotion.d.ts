import "@emotion/react";

interface ColorType {
  main: string;
  contrast: string;
}

interface FormType {
  background: string;
  color: string;
  border: string;
}

declare module "@emotion/react" {
  export interface Theme {
    typography: {
      global: {
        fontFamily: string;
      };
    };
    layout: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };

    color: {
      primary: ColorType;
      secondary: ColorType;
      backgrounds: {
        white: string;
        yellow: string;
        orange: string;
      };
      form: {
        primary: FormType;
        secondary: FormType;
        error: FormType;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: string;

    colors: {
      primary_bg: {
        primary: string,
  
        text: string,
  
        button: string,
      },
  
      secondary_bg: {
        primary: string,
  
        primary_text: string,
        secondary_text: string,
  
        button: string,
        border: string
      },

      hover: string
    }
  }
}
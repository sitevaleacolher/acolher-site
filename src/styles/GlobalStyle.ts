"use client";

import { createGlobalStyle, css } from "styled-components";
import { theme, Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme["colors"];
    fonts: {
      base: string;
      mono: string;
    };
    input: Theme["input"];
    sidebar: Theme["sidebar"];
    selectInput: Theme["selectInput"];
    iconButton: Theme["iconButton"];
    iconShape: Theme["iconShape"];
    textArea: Theme["textArea"];
    textField: Theme["textField"];
    button: Theme["button"];
    tag: Theme["tag"];
    contentSwitcher: Theme["contentSwitcher"];
  }
}

const generateColorVars = (colors: Theme["colors"]) => {
  let vars = "";
  for (const colorName in colors) {
    const shades = colors[colorName as keyof Theme["colors"]];
    for (const shade in shades) {
      vars += `--${colorName}-${shade}: ${
        shades[shade as unknown as keyof typeof shades]
      };\n`;
    }
  }
  return css`
    ${vars}
  `;
};

export const GlobalStyle = createGlobalStyle`
  :root {
    ${generateColorVars(theme.colors)}

    --font-base: ${({ theme }) => theme.fonts.base};
    --font-mono: ${({ theme }) => theme.fonts.mono};
    --font-family: ${({ theme }) => theme.fonts.base};

    /* Mapeando para o PrimeReact */
    --primary-color: var(--blue-500);
    --primary-color-text: #ffffff;
    --surface-ground: var(--gray-50);
    --surface-card: #ffffff;
    --text-color: var(--gray-900);
  }

  body {
    background: var(--surface-ground);
    color: var(--text-color);
    font-family: var(--font-base);
    margin: 0;
  }
`;

import { colorsTheme } from "./themes/colors.theme";
import { typographyTheme } from "./themes/typography.theme";

const sizes = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  largeDesktop: "1200px",
};

export const theme = {
  colors: colorsTheme,
  fonts: {
    base: "var(--font-base)",
    montserrat: "var(--font-montserrat)",
    redHat: "var(--font-red-hat)",
    mono: "'Courier New', monospace",
  },
  border: {
    none: "0px",
    hairline: "1px",
    thin: "2px",
    thick: "4px",
    heavy: "8px",
  },
  radius: {
    none: "0px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    pill: "500px",
  },
  shadow: {
    1: "0px 4px 8px 0px #00000029",
    2: "0px 4px 8px 0px #00000029",
    3: "0px 16px 32px 0px #00000014",
    4: "0px 16px 48px 0px #00000014",
  },
  opacity: {
    semiOpaque: 0.72,
    deep: 0.64,
    intense: 0.48,
    medium: 0.32,
    light: 0.16,
    semiTransparent: 0.8,
  },
  blur: {
    soft: "8px",
    medium: "24px",
    strong: "32px",
  },
  breakpoints: {
    mobile: sizes.mobile,
    tablet: sizes.tablet,
    desktop: sizes.desktop,
    largeDesktop: sizes.largeDesktop,
  },
  media: {
    mobile: `@media (max-width: ${sizes.mobile})`,
    tablet: `@media (max-width: ${sizes.tablet})`,
    desktop: `@media (max-width: ${sizes.desktop})`,
    largeDesktop: `@media (max-width: ${sizes.largeDesktop})`,
  },
  input: {},
  sidebar: {},
  selectInput: {},
  contentSwitcher: {},
  iconButton: {},
  iconShape: {},
  textField: {},
  textArea: {},
  button: {},
  tag: {},
  typography: typographyTheme,
} as const;

export type Theme = typeof theme;

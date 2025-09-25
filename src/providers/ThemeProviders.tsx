"use client";

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

import { GlobalStyle } from "@/styles/GlobalStyle";

export function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

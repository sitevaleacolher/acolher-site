"use client";

import { AppThemeProvider } from "./ThemeProviders";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}

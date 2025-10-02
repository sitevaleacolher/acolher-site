"use client";

import React, { useState, useCallback } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  const styledComponentsFlushEffect = useCallback(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return styles;
  }, [styledComponentsStyleSheet]);

  const StyledComponentsRegistry = useCallback(
    ({ children }: { children: React.ReactNode }) => {
      // No cliente, não precisamos do StyleSheetManager para melhor HMR
      if (typeof window !== "undefined") {
        return <>{children}</>;
      }

      return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
          {children}
        </StyleSheetManager>
      );
    },
    [styledComponentsStyleSheet]
  );

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}

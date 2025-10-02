"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { useStyledComponentsRegistry } from "./useStyledComponentsRegistry";

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  // Só usar no servidor
  if (typeof window === "undefined") {
    useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);
  }

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

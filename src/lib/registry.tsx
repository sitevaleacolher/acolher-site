"use client";

import { useServerInsertedHTML } from "next/navigation";
import { useStyledComponentsRegistry } from "./useStyledComponentsRegistry";

export function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

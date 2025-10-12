import { theme } from "@/styles/theme";
import styled from "styled-components";

export const EmblaDot = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 10px;
  height: 10px;

  background: transparent;
  cursor: pointer;

  border: 2px solid
    ${({ selected }) =>
      selected ? theme.colors.gray[0] : theme.colors.primary[900]};

  border-radius: 50%;

  &::after {
    box-shadow: inset 0 0 0 0.2rem
      ${({ selected }) =>
        selected ? "var(--text-body)" : "var(--detail-medium-contrast)"};
  }
`;

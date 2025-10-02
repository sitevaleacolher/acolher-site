// components/Typography.tsx

"use client";

import styled, { css } from "styled-components";
import { Theme } from "@/styles/theme";

type Variant = keyof Theme["typography"];

interface Props {
  $variant?: Variant;
  styles?: React.CSSProperties;
}

const Typography = styled.p<Props>`
  margin: 0;
  ${({ theme, $variant = "body", styles }) => {
    const style = theme.typography[$variant];

    return css`
      font-family: ${style.fontFamily};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      letter-spacing: ${style.letterSpacing};

      /* aplica o tamanho default (desktop) */
      font-size: ${typeof style.fontSize === "string"
        ? style.fontSize
        : style.fontSize.desktop};

      /* aplica os breakpoints */
      ${typeof style.fontSize !== "string" &&
      css`
        ${theme.media.tablet} {
          font-size: ${style.fontSize.tablet};
        }
        ${theme.media.mobile} {
          font-size: ${style.fontSize.mobile};
        }
      `}

      /* estilos extras via prop */
      ${styles &&
      css`
        ${Object.entries(styles).map(
          ([key, value]) => css`
            ${key}: ${value};
          `
        )}
      `}
    `;
  }}
`;

export default Typography;

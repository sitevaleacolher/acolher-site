import styled, { keyframes } from "styled-components";

import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  width: 40%;
  height: 420px;
  overflow: hidden;
  border-radius: 20px;
`;

export const Slide = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease;
  z-index: 1;

  & > span {
    position: unset !important;
  }
`;

export const ImgStyled = styled(Image)`
  width: 570px;
`;

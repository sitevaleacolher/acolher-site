import styled, { keyframes } from "styled-components";

import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  width: 40vw;
  height: 420px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

  ${({ theme }) => theme.media.tablet} {
    width: 90vw;
    height: 197px;
  }
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
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
`;

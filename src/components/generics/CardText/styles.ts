import styled from "styled-components";
import Typography from "../Typography";

import Image from "next/image";

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);

  gap: 12px;

  &:hover {
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.16);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

export const Title = styled(Typography).attrs({ $variant: "h3" })<{
  $hasIcon?: boolean;
}>`
  text-align: ${({ $hasIcon }) => ($hasIcon ? "center" : "start")};
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary[600]};
`;

export const Content = styled(Typography).attrs({ $variant: "p" })`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ImageStyles = styled(Image)`
  height: auto;

  & > svg {
    width: 100% !important;
    height: auto !important;
  }
`;

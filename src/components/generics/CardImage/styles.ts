import styled from "styled-components";
import Typography from "../Typography";

import Image from "next/image";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;

  background: ${({ theme }) => theme.colors.gray[0]};

  flex-wrap: wrap;

  gap: 35px;
  width: 100%;
`;

export const ImgStyled = styled(Image)`
  object-fit: cover;
  width: 450px;
  height: 320px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);

  border-radius: 20px;

  ${({ theme }) => theme.media.tablet} {
    width: 90%;
    height: 120px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  width: 30%;

  ${({ theme }) => theme.media.tablet} {
    width: 90%;
  }
`;

export const Title = styled(Typography).attrs({ $variant: "h2" })`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary[600]};

  strong {
    font-weight: bold;
  }
`;

export const Content = styled(Typography).attrs({ $variant: "p" })`
  color: ${({ theme }) => theme.colors.gray[700]};

  ${({ theme }) => theme.media.tablet} {
    text-align: center;
  }
`;

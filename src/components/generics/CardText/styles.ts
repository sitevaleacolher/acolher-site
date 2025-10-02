import styled from "styled-components";
import Typography from "../Typography";

export const CardContainer = styled.a`
  background: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;

export const Title = styled(Typography).attrs({ $variant: "h2" })`
  text-align: center;
  color: #ca3a38; // sua cor principal
`;

export const Content = styled(Typography).attrs({ $variant: "p" })`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

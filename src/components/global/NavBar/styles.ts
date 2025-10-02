import styled from "styled-components";
import { Typography } from "@/components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  z-index: 999;
  gap: 55px;

  height: 80px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 9.8px 0px rgba(0, 0, 0, 0.25);
`;

export const NavItens = styled.ul`
  list-style: none;
  display: flex;
`;

export const TypographyItem = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary[700]};
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: underline;
  }
`;

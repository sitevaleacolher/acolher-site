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
  gap: 3vw;

  height: 80px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 9.8px 0px rgba(0, 0, 0, 0.25);

  padding: 0 16px;
`;

export const NavWrapperMobile = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  z-index: 999;

  height: 80px;
  background: #fff;
  border-radius: 0px 0px 20px 20px;
  box-shadow: 0px 2px 9.8px 0px rgba(0, 0, 0, 0.25);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const NavItens = styled.ul`
  list-style: none;
  display: flex;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const TypographyItem = styled(Typography)`
  color: ${({ theme }) => theme.colors.secondary[700]};
  text-transform: uppercase;
  font-size: 16px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
    text-decoration: underline;
  }

  ${({ theme }) => theme.media.tablet} {
    font-size: 12px;
  }

  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  & > svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.primary[600]};
  }
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 32px;
  gap: 32px;
`;

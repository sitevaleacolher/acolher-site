import Image from "next/image";
import styled, { keyframes } from "styled-components";

export const DonateContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 80px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.gray[0]};

  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  overflow: hidden;

  height: 100%;

  padding-bottom: 22px;
`;

export const LocalImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const LocalTitle = styled.h3`
  margin: 16px 0 8px 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondary[600]};
  text-align: start;
  width: 100%;
  padding-left: 16px;
`;

export const LocalAddress = styled.address`
  font-style: normal;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 12px;
  text-align: start;
  width: 100%;
  padding-left: 16px;
`;

export const LocalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;

  color: rgba(25, 115, 232, 1);

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

export const Icon = styled(Image)`
  height: auto;

  & > svg {
    width: 100% !important;
    height: auto !important;
  }
`;

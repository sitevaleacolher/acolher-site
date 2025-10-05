import styled, { keyframes } from "styled-components";

export const WhatDonateContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 64px;
  gap: 80px;

  ${({ theme }) => theme.media.tablet} {
    margin-top: 32px;
    gap: 32px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 30%;
`;

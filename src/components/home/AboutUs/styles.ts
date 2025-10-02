import styled, { keyframes } from "styled-components";

export const AboutUsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 80px;

  ${({ theme }) => theme.media.tablet} {
    padding: 0 24px;
    gap: 32px;
  }
`;

export const CardsContainers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  width: 30vw;

  ${({ theme }) => theme.media.tablet} {
    width: 100%;
  }
`;

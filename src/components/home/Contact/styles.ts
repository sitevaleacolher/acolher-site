import styled, { keyframes } from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  gap: 80px;

  padding: 0 82px;

  width: 100%;

  & > a {
    width: 100%;
  }

  ${({ theme }) => theme.media.desktop} {
    margin-top: 24px;
    flex-direction: column;
    gap: 8px;
  }
  ${({ theme }) => theme.media.tablet} {
    padding: 0 16px;
    gap: 8px;
  }
`;

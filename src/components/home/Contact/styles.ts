import styled, { keyframes } from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 64px;
  gap: 80px;

  padding: 0 82px;

  flex-wrap: wrap;

  & > a {
    flex: 1;
    width: 100%;
  }

  ${({ theme }) => theme.media.tablet} {
    padding: 0 16px;
    gap: 8px;
  }
`;

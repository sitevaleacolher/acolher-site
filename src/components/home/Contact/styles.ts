import styled, { keyframes } from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-top: 32px;
  gap: 80px;

  padding: 10px 82px 82px 82px;

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
    margin-top: 0px;
    padding: 16px;
    padding-top: 0px;
    gap: 8px;
  }
`;

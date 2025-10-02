import Typography from "@/components/generics/Typography";
import styled from "styled-components";

// export const FooterContainer = styled.footer`
//   color: #fff;
//   padding: 40px 0 20px 0;
//   width: 100%;
//   min-height: 60px;
//   background-color: ${({ theme }) => theme.colors.primary[600]};
// `;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  padding: 12px 64px 0px 64px;
  background-color: ${({ theme }) => theme.colors.primary[600]};

  ${({ theme }) => theme.media.tablet} {
    padding: 12px 16px;
  }
`;

export const ContactList = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 24px;
  border: 2px solid #fff;

  color: #fff;

  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
  width: 33%;
  hight: 100px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary[300]};
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: 0.95rem;
  color: #ccc;
  text-align: start;
  min-width: 40%;

  ${({ theme }) => theme.media.tablet} {
    font-size: 8px;
  }
`;

export const Rights = styled.span`
  font-size: 0.95rem;
  color: #ccc;
  text-align: end;
  min-width: 40%;

  ${({ theme }) => theme.media.tablet} {
    font-size: 8px;
  }
`;

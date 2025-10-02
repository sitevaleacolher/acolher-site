import styled from "styled-components";
import Typography from "../Typography";
import { theme } from "@/styles/theme";

interface ColorProps {
  $color?: string;
}

interface SectionWrapperProps {
  $backgroundColor?: string;
}

export const SectionWrapper = styled.div<SectionWrapperProps>`
  width: 100%;
  margin: 40px 0;
  padding-top: 20px;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || "transparent"};

  scroll-margin-top: 100px;

  ${({ theme }) => theme.media.tablet} {
    padding: 20px 24px 0 24px;
  }
`;

export const Title = styled(Typography).attrs({ $variant: "h1" })<ColorProps>`
  text-align: center;
  color: ${({ $color }) => $color || "#CA3A38"};
`;

export const Subtitle = styled(Typography).attrs({
  $variant: "subtitle",
})<ColorProps>`
  text-align: center;
  color: ${({ $color }) => $color || "#666"};
  margin-bottom: 20px;
`;

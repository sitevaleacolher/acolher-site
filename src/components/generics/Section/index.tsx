import { SectionWrapper, Title, Subtitle } from "./styles";

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
  backgroundColor?: string;
  id?: string;
}

export default function Section({
  title,
  subtitle,
  children,
  titleColor,
  subtitleColor,
  backgroundColor,
  id,
}: SectionProps) {
  return (
    <SectionWrapper $backgroundColor={backgroundColor} id={id}>
      <div>
        <Title $color={titleColor}>{title}</Title>
        <Subtitle $color={subtitleColor}>{subtitle}</Subtitle>
      </div>
      {children}
    </SectionWrapper>
  );
}

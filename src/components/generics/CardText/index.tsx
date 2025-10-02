import { CardContainer, TextWrapper, Content, Title } from "./styles";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  href?: string;
}

export default function Card({ title, content, icon, href }: CardProps) {
  const isLink = Boolean(href);
  return (
    <CardContainer
      as={isLink ? "a" : "div"}
      href={href}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      aria-label={isLink ? `Link para ${title}` : undefined}
    >
      {icon}
      <TextWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content || "" }} />
      </TextWrapper>
    </CardContainer>
  );
}

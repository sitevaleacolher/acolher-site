import {
  CardContainer,
  TextWrapper,
  Content,
  Title,
  ImageStyles,
} from "./styles";

interface CardProps {
  title: string;
  icon?: string;
  iconSizes?: number;
  content: React.ReactNode;
  href?: string;
}

export default function Card({
  title,
  content,
  icon,
  href,
  iconSizes,
}: CardProps) {
  const isLink = Boolean(href);
  return (
    <CardContainer
      as={isLink ? "a" : "div"}
      href={href}
      target={isLink ? "_blank" : undefined}
      rel={isLink ? "noopener noreferrer" : undefined}
      aria-label={isLink ? `Link para ${title}` : undefined}
      style={{ cursor: isLink ? "pointer" : "auto" }}
    >
      {icon && (
        <ImageStyles
          src={icon}
          alt={`Icone ${title}`}
          height={iconSizes || 32}
        />
      )}
      <TextWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content || "" }} />
      </TextWrapper>
    </CardContainer>
  );
}

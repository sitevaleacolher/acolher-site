import { CardContainer, Content, Title } from "./styles";

interface CardProps {
  title: string;
  content: React.ReactNode;
}

export default function Card({ title, content }: CardProps) {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: content || "" }} />
    </CardContainer>
  );
}

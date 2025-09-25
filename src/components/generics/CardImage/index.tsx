import { StaticImageData } from "next/image";
import {
  CardContainer,
  Content,
  Title,
  ImgStyled,
  TextWrapper,
} from "./styles";

interface CardProps {
  title: string;
  content: string;
  image: string | StaticImageData;
}

export default function CardImage({ title, content, image }: CardProps) {
  return (
    <CardContainer>
      <ImgStyled src={image} alt={title} />

      <TextWrapper>
        <Title>{title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: content || "" }} />
      </TextWrapper>
    </CardContainer>
  );
}

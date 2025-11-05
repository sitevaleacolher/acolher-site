"use client";

import { AboutUsContainer, CardsContainers } from "./styles";

import { Card, Section, SlideShow } from "@/components";
import { theme } from "@/styles/theme";

interface AboutUsProps {
  id: string;
  data: [
    {
      "Carrosel de imagens": string;
      Missão: string;
      "Quem Somos": string;
      Valores: string;
    }
  ];
}

export const AboutUs = ({ id, data }: AboutUsProps) => {
  const carouselImages = data
    .map((item) => {
      const url = item["Carrosel de imagens"];
      if (!url) return null;

      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (!match) return null;

      const id = match[1];
      return `/api/image?id=${id}`;
    })
    .filter((url): url is string => Boolean(url));

  const cardsData = [
    {
      title: "QUEM SOMOS",
      content: data[0]?.["Quem Somos"] || "Informação não disponível.",
    },
    {
      title: "MISSÃO",
      content: data[0]?.Missão || "Informação não disponível.",
    },
    {
      title: "VALORES",
      content: data[0]?.Valores || "Informação não disponível.",
    },
  ];

  return (
    <Section
      title={"SOBRE NÓS"}
      subtitle={"Aqui você pode nos conhecer um pouco melhor"}
      titleColor={theme.colors.primary[1000]}
      subtitleColor={theme.colors.gray[600]}
      id={id}
    >
      <AboutUsContainer>
        <SlideShow images={carouselImages} />

        <CardsContainers>
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </CardsContainers>
      </AboutUsContainer>
    </Section>
  );
};

export default AboutUs;

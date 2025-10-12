"use client";

import { Grupo, Grupo2 } from "@/assets";
import { AboutUsContainer, CardsContainers } from "./styles";

import { Card, Section, SlideShow } from "@/components";
import { theme } from "@/styles/theme";

export const AboutUs = ({ id }: { id: string }) => {
  const cardsData = [
    {
      title: "QUEM SOMOS",
      content:
        "Somos voluntários unidos em um só Deus, um só propósito e um só espírito, juntos espalhando amor.",
    },
    {
      title: "MISSÃO",
      content:
        "Prestar assistência fraterna a moradores em situação de rua e famílias menos favorecidas, com alimentação, cestas básicas e outros.",
    },
    {
      title: "VALORES",
      content:
        "Caridade, empatia, humildade, respeito e solidariedade a todos que carecem de ajuda.",
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
        <SlideShow images={[Grupo.src, Grupo2.src]} />

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

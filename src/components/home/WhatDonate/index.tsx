"use client";

import { WhatDonateContainer } from "./styles";

import { Section, CardImage } from "@/components";
import { theme } from "@/styles/theme";

import { StaticImageData } from "next/image";

interface WhatDonateProps {
  id: string;
  data: [
    {
      Titulo: string;
      Descrição: string;
      Imagem: string;
    }
  ];
}

export const WhatDonate = ({ id, data }: WhatDonateProps) => {
  const cardsData = data.map((donate) => {
    const url = donate.Imagem;
    let imagem: string | StaticImageData = "";

    if (url) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match) {
        const id = match[1];
        imagem = `/api/image?id=${id}`;
      } else {
        imagem = url;
      }
    }

    return {
      title: donate.Titulo,
      content: donate.Descrição,
      image: imagem,
    };
  });

  return (
    <Section
      title={"O que doar?"}
      subtitle={"Aqui você encontra o que pode doar"}
      titleColor={theme.colors.primary[1000]}
      subtitleColor={theme.colors.gray[600]}
      id={id}
    >
      <WhatDonateContainer>
        {cardsData.map((card, index) => (
          <CardImage
            key={`${card.title} + ${index}`}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </WhatDonateContainer>
    </Section>
  );
};

export default WhatDonate;

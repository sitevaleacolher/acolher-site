"use client";

import { WhatDonateContainer, ItemContainer } from "./styles";

import { Card, Section, CardImage } from "@/components";
import { theme } from "@/styles/theme";

import { Grupo, Grupo2 } from "@/assets";

export const WhatDonate = ({ id }: { id: string }) => {
  const cardsData = [
    {
      title: "Itens de cesta básica",
      content:
        "Arroz, feijão, açucar, óleo, fubá, macarrão, canjiquinha, pó de café, farinha de mandioca, sal, biscoito e leite.",
      image: Grupo,
    },
    {
      title: "Produtos de higiene pessoal",
      content:
        "Absorvente, fralda infantil e geriatrica, sabonete, escova de dente, creme dental, papel higiênico,luva, touca descartável.",
      image: Grupo2,
    },
    {
      title: "Produtos de limpeza",
      content:
        "Caridade, empatia, humildade, respeito e solidariedade a todos que carecem de ajuda.",
      image: Grupo,
    },
    {
      title: "Qualquer quantia em dinheiro",
      content:
        "Você também pode doar qualquer quantia em dinheiro escaneando o Código QR ao lado, ou doando pela chave PIX abaixo.<br/> Nome: <strong>RAUL PIMENTA DA CUNHA PEREIRA</strong> <br/>Chave:<strong> acolhervaledoaco@gmail.com</strong>",
      image: Grupo2,
    },
  ];

  return (
    <Section
      title={"O que doar?"}
      subtitle={"Aqui você encontra o que pode doar"}
      titleColor={theme.colors.primary[600]}
      subtitleColor={theme.colors.gray[600]}
      id={id}
    >
      <WhatDonateContainer>
        {cardsData.map((card, index) => (
          <CardImage
            key={card.title}
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

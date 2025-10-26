"use client";

import {
  AboutUs,
  Contact,
  Donate,
  Footer,
  NavBar,
  WhatDonate,
} from "@/components";

import { HomeContainer } from "./styles";
import { useEffect, useState } from "react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dados, setDados] = useState<any>(null);

  useEffect(() => {
    fetch("/api/sheets/all")
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  if (!dados) {
    return <p>Carregando...</p>;
  } else {
    console.log(dados);
  }

  return (
    <HomeContainer>
      <NavBar />
      <AboutUs data={dados["Sobre nós"]} id="about-us" />
      <Donate data={dados["Onde Doar"]} id="donate" />
      <WhatDonate data={dados["O que doar"]} id="what-donate" />
      <Contact data={dados["Contato"]} id="contato" />
      <Footer data={dados["Endereço"]} id="direitos" />
    </HomeContainer>
  );
}

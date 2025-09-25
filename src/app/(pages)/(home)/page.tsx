"use client";

import { AboutUs, Donate, Footer, NavBar, WhatDonate } from "@/components";

import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <NavBar />
      <AboutUs id="about-us" />
      <Donate id="donate" />
      <WhatDonate id="what-donate" />
      <Footer id="contato" />
    </HomeContainer>
  );
}

import { Grupo, Grupo2 } from "@/assets";
import { DonateContainer } from "./styles";

import { Section, Carousel } from "@/components";
import { theme } from "@/styles/theme";
import EmblaCarousel from "@/components/generics/EmblaCarouselLib";
import { EmblaOptionsType } from "embla-carousel";

export const Donate = ({ id }: { id: string }) => {
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];

  const cardsData = [
    {
      title: "Itens de cesta básica",
      subtitle:
        "Arroz, feijão, açucar, óleo, fubá, macarrão, canjiquinha, pó de café, farinha de mandioca, sal, biscoito e leite.",
      image: Grupo,
    },
    {
      title: "Produtos de higiene pessoal",
      subtitle:
        "Absorvente, fralda infantil e geriatrica, sabonete, escova de dente, creme dental, papel higiênico,luva, touca descartável.",
      image: Grupo2,
    },
    {
      title: "Produtos de limpeza",
      subtitle:
        "Caridade, empatia, humildade, respeito e solidariedade a todos que carecem de ajuda.",
      image: Grupo,
    },
    {
      title: "Qualquer quantia em dinheiro",
      subtitle:
        "Você também pode doar qualquer quantia em dinheiro escaneando o Código QR ao lado, ou doando pela chave PIX abaixo.<br/> Nome: <strong>RAUL PIMENTA DA CUNHA PEREIRA</strong> <br/>Chave:<strong> acolhervaledoaco@gmail.com</strong>",
      image: Grupo2,
    },
  ];

  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <Section
      title={"Onde Doar"}
      subtitle={"Aqui você encontra os locais que coletam as doações"}
      titleColor={theme.colors.gray[0]}
      subtitleColor={theme.colors.gray[0]}
      backgroundColor={theme.colors.primary[600]}
      id={id}
    >
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </Section>
  );
};

export default Donate;

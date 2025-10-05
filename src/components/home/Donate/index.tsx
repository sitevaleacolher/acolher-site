import {
  ItemContainer,
  LocalAddress,
  LocalImage,
  LocalLink,
  LocalTitle,
  Icon,
} from "./styles";

import { Section } from "@/components";
import { theme } from "@/styles/theme";
import EmblaCarousel from "@/components/generics/EmblaCarouselLib";
import { EmblaOptionsType } from "embla-carousel";
import { Grupo, MapsIcon } from "@/assets";

export const Donate = ({ id }: { id: string }) => {
  const locaisDoacao = [
    {
      title: "Centro Comunitário Esperança",
      link: "https://www.google.com/maps/search/?api=1&query=Av.+Monsenhor+Rafael,+285,+Jhon+Kenedy,+Timóteo",
      address: "Av. Monsenhor Rafael, 285, Jhon Kenedy, Timóteo",
      imagem: Grupo,
    },
    {
      title: "Igreja São João Batista",
      link: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+São+Paulo,+SP",
      address: "Av. Monsenhor Rafael, 285, Jhon Kenedy, Timóteo",
      imagem: Grupo,
    },
    {
      title: "Associação Mãos Solidárias",
      link: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+São+Paulo,+SP",
      address: "Av. Monsenhor Rafael, 285, Jhon Kenedy, Timóteo",
      imagem: Grupo,
    },
    {
      title: "Casa de Apoio Vida Nova",
      link: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+São+Paulo,+SP",
      address: "Av. Monsenhor Rafael, 285, Jhon Kenedy, Timóteo",
      imagem: Grupo,
    },
    {
      title: "Projeto Semeando Esperança",
      link: "https://www.google.com/maps/search/?api=1&query=Av.+Paulista,+São+Paulo,+SP",
      address: "Av. Monsenhor Rafael, 285, Jhon Kenedy, Timóteo",
      imagem: Grupo,
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
      <EmblaCarousel
        slides={locaisDoacao.map((local) => (
          <ItemContainer key={local.title}>
            <LocalImage src={local.imagem} alt={local.title} />
            <LocalTitle>{local.title}</LocalTitle>
            <LocalAddress>{local.address}</LocalAddress>
            <LocalLink
              href={local.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                src={MapsIcon}
                alt={`Icone do maps leva para ${local.title}`}
                height={32}
              />
              {"Ver no Google Maps"}
            </LocalLink>
          </ItemContainer>
        ))}
        options={OPTIONS}
      />
    </Section>
  );
};

export default Donate;

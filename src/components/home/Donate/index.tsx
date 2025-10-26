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
import { MapsIcon } from "@/assets";
import { StaticImageData } from "next/image";

interface DonateProps {
  id: string;
  data: [
    {
      Titulo: string;
      "Link do endereço": string;
      Endereço: string;
      Imagem: string;
    }
  ];
}

export const Donate = ({ id, data }: DonateProps) => {
  const locaisDoacao = data.map((local) => {
    const url = local.Imagem;
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
      title: local.Titulo,
      link: local["Link do endereço"],
      address: local.Endereço,
      imagem,
    };
  });

  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <Section
      title={"Onde Doar"}
      subtitle={"Aqui você encontra os locais que coletam as doações"}
      titleColor={theme.colors.gray[0]}
      subtitleColor={theme.colors.gray[0]}
      backgroundColor={theme.colors.primary[1000]}
      id={id}
    >
      <EmblaCarousel
        slides={locaisDoacao.map((local) => (
          <ItemContainer key={local.title}>
            <LocalImage
              src={local.imagem}
              alt={local.title}
              width={400}
              height={240}
            />
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

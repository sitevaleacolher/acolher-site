import React from "react";

import {
  FooterContent,
  Address,
  Rights,
  DataWrapper,
  ImageWrapper,
} from "./styles";
import { Logo } from "@/assets";

import Image from "next/image";

interface FooterProps {
  id: string;
  data: [
    {
      "Endereço do rodape": string;
    }
  ];
}

const Footer = ({ id, data }: FooterProps) => {
  const endSpreadsheet =
    data[0]?.["Endereço do rodape"] || "Informação não disponível.";
  return (
    <FooterContent id={id}>
      <DataWrapper>
        <Address>Endereço: {endSpreadsheet}</Address>

        <ImageWrapper>
          <Image src={Logo} alt="Logo" width={45} height={45} />
        </ImageWrapper>

        <Rights>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Rights>
      </DataWrapper>
    </FooterContent>
  );
};

export default Footer;

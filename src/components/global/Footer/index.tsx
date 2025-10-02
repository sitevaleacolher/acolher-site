import React from "react";

import {
  FooterContent,
  ContactList,
  Address,
  Rights,
  DataWrapper,
  ImageWrapper,
  Link,
} from "./styles";
import { Logo } from "@/assets";

import Image from "next/image";

const Footer = ({ id }: { id: string }) => {
  const endSpreadsheet =
    "Rua Exemplo, 123 - Bairro, Cidade - UF, CEP 00000-000";
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

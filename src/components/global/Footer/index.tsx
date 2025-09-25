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
import Typography from "@/components/generics/Typography";

import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = ({ id }: { id: string }) => (
  <FooterContent id={id}>
    <ContactList>
      <Link
        href="https://wa.me/+5531999387840?text=Ol%C3%A1%20estou%20vindo%20do%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20projeto!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
        <Typography $variant="h2">WhatsApp</Typography>
      </Link>
      <Link
        href="https://instagram.com/seu_instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
        <Typography $variant="h2">Instagram</Typography>
      </Link>
      <Link href="mailto:seuemail@gmail.com">
        <MailOutlineIcon />
        <Typography $variant="h2">Gmail</Typography>
      </Link>
    </ContactList>
    <DataWrapper>
      <Address>
        Endereço: Rua Exemplo, 123 - Bairro, Cidade - UF, CEP 00000-000
      </Address>

      <ImageWrapper>
        <Image src={Logo} alt="Logo" width={45} height={45} />
      </ImageWrapper>

      <Rights>
        © {new Date().getFullYear()} Todos os direitos reservados.
      </Rights>
    </DataWrapper>
  </FooterContent>
);

export default Footer;

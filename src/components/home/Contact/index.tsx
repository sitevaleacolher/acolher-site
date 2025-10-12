"use client";

import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/assets";
import { ContactContainer } from "./styles";

import { Section, CardText } from "@/components";
import { theme } from "@/styles/theme";

export const Contact = ({ id }: { id: string }) => {
  const emailSpreedsheet = "acolhervaledoaco@gmail.com";
  const instagramUsernameSpreedsheet = "acolhervaledoaco";
  const whatsappTextSpreedsheet =
    "Olá estou vindo do site do acolher vale do aço, gostaria de saber mais sobre o projeto!";
  const whatsaappNumberSpreedsheet = "+5531999387840";

  const whatsappMessage = encodeURIComponent(whatsappTextSpreedsheet);
  const cardsData = [
    {
      title: "WhatsApp",
      content: "+55 (31) 99938-7840",
      href: `https://wa.me/${whatsaappNumberSpreedsheet}?text=${whatsappMessage}`,
      icon: WhatsAppIcon,
    },
    {
      title: "Instagram",
      content: `@${instagramUsernameSpreedsheet}`,
      href: `https://www.instagram.com/${instagramUsernameSpreedsheet}/`,
      icon: InstagramIcon,
    },
    {
      title: "Email",
      content: emailSpreedsheet,
      icon: MailIcon,
      href: `mailto:${emailSpreedsheet}`,
    },
  ];

  return (
    <Section
      title={"Contato"}
      subtitle={"Clique nos cartões para ser redirecionado e fale conosco"}
      titleColor={theme.colors.gray[0]}
      subtitleColor={theme.colors.gray[100]}
      backgroundColor={theme.colors.primary[1000]}
      id={id}
    >
      <ContactContainer>
        {cardsData.map((card, index) => (
          <CardText
            key={card.title + index}
            title={card.title}
            content={card.content}
            icon={card.icon}
            iconSizes={45}
            href={card.href}
          />
        ))}
      </ContactContainer>
    </Section>
  );
};

export default Contact;

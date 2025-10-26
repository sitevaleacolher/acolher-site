"use client";

import { WhatsAppIcon, InstagramIcon, MailIcon } from "@/assets";
import { ContactContainer } from "./styles";

import { Section, CardText } from "@/components";
import { theme } from "@/styles/theme";

interface ContactProps {
  id: string;
  data: [
    {
      Instagram: string;
      Email: string;
      WhatsApp: string;
      "Mensagem WhatsApp": string;
    }
  ];
}

function onlyDigits(input?: string) {
  return (input || "").toString().replace(/\D/g, "");
}

function formatDisplayNumber(raw?: string) {
  const digits = onlyDigits(raw);
  const local = digits.startsWith("55") ? digits.slice(2) : digits;

  if (local.length === 11) {
    const ddd = local.slice(0, 2);
    const part1 = local.slice(2, 7);
    const part2 = local.slice(7);
    return `+55 (${ddd}) ${part1}-${part2}`;
  }

  if (local.length === 10) {
    const ddd = local.slice(0, 2);
    const part1 = local.slice(2, 6);
    const part2 = local.slice(6);
    return `+55 (${ddd}) ${part1}-${part2}`;
  }

  if (!digits) return "Informação não disponível.";
  return digits.startsWith("55") ? `+${digits}` : `+55${digits}`;
}

export const Contact = ({ id, data }: ContactProps) => {
  console.log("Contact data:", data);

  const emailSpreedsheet = data[0]?.Email || "Informação não disponível.";

  const instagramUsernameSpreedsheet =
    data[0]?.Instagram || "Informação não disponível.";

  const whatsappTextSpreedsheet =
    data[0]?.["Mensagem WhatsApp"] || "Informação não disponível.";

  const whatsappDisplay = formatDisplayNumber(data[0]?.WhatsApp);
  const whatsaappNumberSpreedsheet =
    `+55${data[0]?.WhatsApp}` || "Informação não disponível.";

  const whatsappMessage = encodeURIComponent(whatsappTextSpreedsheet);
  const cardsData = [
    {
      title: "WhatsApp",
      content: whatsappDisplay,
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

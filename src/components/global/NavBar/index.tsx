"use client";

import { Logo } from "@/assets";
import { NavWrapper, NavItens, TypographyItem } from "./styles";
import Image from "next/image";
import { useResponsive } from "@/hooks/useResponsive";

export const NavBar = () => {
  const { isMobile } = useResponsive();

  const itensList = [
    { label: "Sobre Nós", sectionId: "about-us" },
    { label: "Onde Doar", sectionId: "donate" },
    { label: "Logo", sectionId: "" },
    { label: "O que doar", sectionId: "what-donate" },
    { label: "Contato", sectionId: "contato" },
  ];

  const handleNavClick = (sectionId: string) => {
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isMobile) {
    return (
      <NavWrapper>
        <NavItens>
          <Image src={Logo} alt="Logo" width={75} height={75} />
        </NavItens>
      </NavWrapper>
    );
  }

  return (
    <NavWrapper>
      {itensList.map((item) =>
        item.label === "Logo" ? (
          <NavItens key={item.label}>
            <Image src={Logo} alt="Logo" width={75} height={75} />
          </NavItens>
        ) : (
          <NavItens key={item.label}>
            <TypographyItem
              $variant="small"
              as="button"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Vai para seção ${item.label}`}
              onClick={() => handleNavClick(item.sectionId)}
            >
              {item.label}
            </TypographyItem>
          </NavItens>
        )
      )}
    </NavWrapper>
  );
};
export default NavBar;

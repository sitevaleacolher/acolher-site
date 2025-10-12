"use client";

import { Logo } from "@/assets";
import {
  NavWrapper,
  NavWrapperMobile,
  NavItens,
  TypographyItem,
  IconButton,
  DrawerContainer,
  ContentWrapper,
} from "./styles";
import Image from "next/image";
import { useResponsive } from "@/hooks/useResponsive";
import { Drawer } from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";

export const NavBar = () => {
  const { isMobile } = useResponsive();
  const [toggle, setToggle] = useState(false);

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
        setToggle(false);
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (isMobile) {
    return (
      <NavWrapperMobile key={"navbar"}>
        <ContentWrapper>
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <IconButton
            onClick={() => setToggle(true)}
            aria-label="Abrir menu de navegação"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"top"}
            open={toggle}
            onClose={() => setToggle(false)}
            sx={{
              "& .MuiDrawer-paper": {
                borderRadius: "0px 0px 20px 20px",
              },
            }}
          >
            <DrawerContainer>
              <IconButton
                onClick={() => setToggle(false)}
                aria-label="Abrir menu de navegação"
              >
                <Close />
              </IconButton>
              {itensList
                .filter((item) => item.label !== "Logo")
                .map((item) => (
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
                ))}
            </DrawerContainer>
          </Drawer>
        </ContentWrapper>
      </NavWrapperMobile>
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

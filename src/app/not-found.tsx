"use client";

import { theme } from "@/styles/theme";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

// --- Animações suaves ---
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${theme.colors.primary[900]};
  color: ${theme.colors.primary[100]};
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${theme.fonts.redHat};
  color: ${theme.colors.primary[200]};
  margin-bottom: 16px;
  animation: ${fadeInUp} 0.8s ease-out forwards;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.primary[300]};
  margin-bottom: 32px;
  max-width: 420px;
  animation: ${fadeInUp} 1s ease-out forwards;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.primary[600]};
  color: ${theme.colors.primary[100]};
  padding: 12px 28px;
  border-radius: ${theme.radius.sm};
  font-weight: 600;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary[500]};
    transform: translateY(-2px);
    box-shadow: ${theme.shadow[2]};
  }
`;

const Decoration = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(
    circle,
    rgba(38, 140, 153, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
  top: -60px;
  left: -60px;
  z-index: 0;
`;

export default function NotFoundPage() {
  return (
    <Container>
      <Decoration />
      <Title>Ops, algo não deu certo…</Title>
      <Subtitle>
        Não encontramos a página que você procura. Mas não se preocupe, você
        pode continuar navegando.
      </Subtitle>
      <HomeButton href="/home">Voltar para o site</HomeButton>
    </Container>
  );
}

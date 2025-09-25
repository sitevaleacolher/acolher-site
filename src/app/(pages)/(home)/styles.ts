import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  overflow-y: scroll;
  padding-top: 80px; /* altura da NavBar fixa */

  /* Estilização da barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px;
    background: #f0f0f0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #8ecae6;
    border-radius: 8px;
    border: 2px solid #f0f0f0;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #219ebc;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #2f6c89ff #f0f0f0;
`;

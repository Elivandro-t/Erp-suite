import styled from "styled-components";

export default {
  container: styled.div`
    background-color: #f0f7f6; /* Novo fundo Verde Cana suave */
    padding: 90px 10px 20px 10px; /* Padding superior para não cobrir o conteúdo pelo header */
    min-height: 100vh;
  `,

  container_int: styled.div`
    display: flex;
    gap: 12px;
    width: auto; /* Deixa crescer conforme os botões */
    
    /* Posição Fixa no mesmo local de antes */
    position: fixed;
    top: 85px; /* Ajustado para ficar logo abaixo do novo Header de 75px */
    right: 6.2%;
    z-index: 999;
    
    /* Estilização Cana */
    background: #ffffff;
    border: 1px solid #b2dfdb;
    border-radius: 12px;
    padding: 8px 15px;
    box-shadow: 0 4px 15px rgba(0, 77, 64, 0.1);

    @media screen and (min-width: 900px) {
      right: 1.5%;
      gap: 15px;
    }

    @media screen and (max-width: 600px) {
      right: 2%;
      top: 130px; /* Desce um pouco no mobile se o header for mais alto */
    }
  `
};
import styled from "styled-components";

export default {
  areaHeader: styled.header`
    width: 100%;
    height: 65px;
    background-color: #ffffff;
    border-bottom: 1px solid #e6eeec; /* Borda verde-gelo bem fininha */
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(38, 166, 154, 0.05);
  `,

  container: styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  btnLogin: styled.div`
    display: flex;
    align-items: center;
    min-width: 40px;
  `,

  logo: styled.h1`
    flex: 1;
    text-align: center;
    font-size: 18px;
    font-weight: 800;
    color: #26a69a; /* Verde Cana Principal */
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 500px) {
      font-size: 14px;
      /* Garante que o título não fique colado nas bordas em telas pequenas */
      padding: 0 10px;
    }
  `,

  // Estilos extras caso você use botões dentro do header futuramente
  ButtomService: styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: #4a635d;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;

    &:active {
      transform: scale(0.9);
    }
  `
};
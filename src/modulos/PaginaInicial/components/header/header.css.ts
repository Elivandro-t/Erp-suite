import styled from "styled-components";

export default {
  header: styled.header`
    height: 70px;
    /* Usamos um branco com fundo levemente esverdeado ou transparente */
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    border-bottom: 1px solid #e0f2f1; /* Borda na cor Cana */
    position: sticky;
    top: 0;
    z-index: 1000;
  `,

    tituloTexto: styled.h1`
      font-size: 18px;
      font-weight: 800;
      color: #004d40;
      cursor: pointer;
      margin: 0;
      letter-spacing: -0.5px;
      white-space: nowrap;
  
      span {
        color: #26a69a;
        font-weight: 400;
      }
  
      @media (min-width: 768px) {
        font-size: 22px;
      }
    `,

  contaier: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    a { text-decoration: none; }

    h1 {
      font-size: 18px;
      color: #004d40; /* Verde Petróleo para combinar com o Menu */
      font-weight: 700;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 10px;

      small {
        font-size: 12px;
        color: #26a69a;
        background: #e0f2f1;
        padding: 4px 12px;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
  `,

  perfil: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    padding: 5px 5px 5px 15px;
    border-radius: 50px;
    border: 1px solid #e0f2f1;
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 12px rgba(38, 166, 154, 0.1);
      border-color: #26a69a;
    }
  `,

  nomeUsuario: styled.div`
    font-size: 14px;
    color: #546e7a;
    
    strong {
      color: #004d40;
      font-weight: 700;
    }
  `
};
import styled from "styled-components";

export default {
  container: styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #f8fafc; /* Um cinza azulado bem leve para o fundo */
    overflow: hidden;
  `,

  main: styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    background-color: #f8fafc;
  `,

  // Área onde o conteúdo (Outlet) aparece com scroll
  scroll: styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 30px;
    
    /* Scrollbar minimalista para não poluir o design */
    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-thumb {
      background: #e2e8f0;
      border-radius: 10px;
    }
  `,

  // Estilização para a Grid de Módulos (caso use na Home)
  grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  `,

  // Card Moderno com o BoxShadow que você pediu
  link: styled.div`
    background: #ffffff;
    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid #f1f5f9;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #5d87ff;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      border-color: #5d87ff33;
      
      &::after { opacity: 1; }
    }
  `,

  card_title: styled.h3`
    font-size: 18px;
    color: #2a3547;
    font-weight: 700;
    margin: 8px 0 0 0;
  `,

  card_desc: styled.p`
    font-size: 13px;
    color: #7c8fac;
    line-height: 1.5;
    margin: 0;
  `,

  footer: styled.footer`
    padding: 20px;
    text-align: center;
    color: #94a3b8;
    font-size: 12px;
    font-weight: 500;
  `
};
import styled from "styled-components";

export default {
  areaHeader: styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px); 
    border-bottom: 2px solid #e0f2f1;
    box-shadow: 0 4px 12px rgba(0, 77, 64, 0.05);
  `,

  container: styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    gap: 15px;

    @media (min-width: 768px) {
      flex-wrap: nowrap;
      padding: 0 40px;
      height: 75px;
    }
  `,

  areaLogo: styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    order: 1;
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

  SelectFilial: styled.select`
    background: #ffffff;
    border: 1px solid #b2dfdb;
    color: #004d40;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    outline: none;
  `,

  BadgeFilial: styled.span`
    font-weight: 800;
    font-size: 11px;
    padding: 6px 14px;
    background: #00796b;
    border-radius: 50px;
    color: #fff;
    text-transform: uppercase;
  `,

  /* BUSCA REESTABELECIDA */
  wrapperBusca: styled.div`
    order: 3;
    width: 100%;
    @media (min-width: 768px) {
      order: 2;
      flex: 1;
      max-width: 450px;
    }
  `,

  busca: styled.input`
    width: 100%;
    height: 42px;
    border-radius: 12px;
    padding: 0 15px;
    border: 1px solid #b2dfdb;
    background: #f1f8f7;
    color: #004d40;
    outline: none;
    transition: all 0.3s ease;

    &::placeholder { color: #80cbc4; }

    &:focus {
      background: #fff;
      border-color: #26a69a;
      box-shadow: 0 0 0 4px rgba(38, 166, 154, 0.1);
    }
  `,

  /* PERFIL REESTABELECIDO */
  perfil: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    order: 2;
    @media (min-width: 768px) {
      order: 3;
      padding-left: 20px;
      border-left: 1px solid rgba(0, 77, 64, 0.1);
    }
  `,

  nomeUsuario: styled.div`
    display: none;
    @media (min-width: 1024px) {
      display: block;
      text-align: right;
      color: #004d40;
      font-size: 14px;
      font-weight: 600;
      strong { 
        display: block; 
        font-size: 9px; 
        color: #26a69a; 
        text-transform: uppercase; 
        opacity: 0.8;
      }
    }
  `
};
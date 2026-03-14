import { MdInbox } from "react-icons/md";
import styled from "styled-components";

export default {
  container: styled.div`
    display: flex;
    height: 100vh;
    background-color: #f2f6fa; /* Fundo azulado bem claro */
  `,
  main: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  scroll: styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 0 5px;
  `,
  grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  `,
  link: styled.div`
    background: #ffffff;
    padding: 30px;
    border-radius: 20px; /* Bem arredondado como na imagem */
    border: none;
    box-shadow: 0px 7px 30px 0px rgba(90, 114, 123, 0.11);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 10px 30px 0px rgba(90, 114, 123, 0.2);
    }

    /* Estilização do ícone estilo Modernize */
    svg {
        color: #5d87ff;
        background: #ecf2ff; /* Fundo pastel */
        padding: 12px;
        border-radius: 12px;
        width: 45px;
        height: 45px;
        margin-bottom: 20px;
    }
  `,
  card_title: styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #2a3547;
    margin-bottom: 5px;
  `,
  card_desc: styled.div`
    font-size: 14px;
    color: #7c8fac;
    line-height: 1.6;
  `,
  footer: styled.footer`
    padding: 20px;
    text-align: center;
    color: #7c8fac;
    font-size: 13px;
  `
};
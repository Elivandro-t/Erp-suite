import styled from "styled-components";
import { MdInbox } from "react-icons/md";

const Template = {
  Area: styled.div`
    background-color: #f4f7f6; /* Fundo verde-gelo bem sutil */
    min-height: 100vh;
    padding: 15px;
    font-family: 'Inter', sans-serif;

    @media screen and (min-width: 768px) {
      padding: 30px 20px;
    }
  `,

  Container: styled.div`
    max-width: 650px;
    margin: auto;
    background: #ffffff;
    border-radius: 16px;
    border: 1px solid #e6eeec;
    box-shadow: 0 10px 30px rgba(74, 99, 93, 0.05);
    overflow: hidden;
  `,

  heanderPedido: styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f0f4f3;
  `,

  tituloPedido: styled.h4`
    margin: 0;
    font-size: 13px;
    color: #26a69a; /* Verde Cana */
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  status: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  Chip: styled.div<{ color: string }>`
    padding: 6px 14px;
    font-weight: 800;
    border-radius: 8px;
    color: ${({ color }) => color || "#26a69a"};
    background: #fff;
    font-size: 11px;
    text-transform: uppercase;
    border: 1px solid ${({ color }) => `${color}40`};
  `,

  /* ÁREA DA FOTO PRINCIPAL */
  CardCentro: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafdfc;
    border-bottom: 1px dashed #d1dbd9;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      align-items: center;
      gap: 30px;
    }
  `,

  Image: styled.img`
    width: 130px;
    height: 130px;
    border-radius: 15px; /* Quadrado arredondado moderno */
    object-fit: cover;
    /* Sem bordas conforme solicitado */
    background: #fff;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    margin-bottom: 20px;
    cursor: pointer;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,

  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  `,

  /* CORPO DAS INFORMAÇÕES */
  Card: styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  `,

  SummaryRow: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  `,

  AreaItemJust: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  AreaItemJustCenter: styled.div` display: flex; flex-direction: column; gap: 4px; `,
  AreaItemJustRigth: styled.div` display: flex; flex-direction: column; gap: 4px; `,

  Label: styled.span`
    font-size: 11px;
    font-weight: 800;
    color: #b0c2be; /* Legendas discretas em verde acinzentado */
    text-transform: uppercase;
    letter-spacing: 0.8px;
  `,

  LabelSubtitulo: styled.span`
    font-size: 15px;
    font-weight: 700;
    color: #2f3d39; /* Texto escuro e nítido */
    line-height: 1.3;
  `,

  LabelDescrip: styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #4a635d;
    background: #f8fafc;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #eef2f1;
    line-height: 1.5;
  `,

  imagemArea: styled.div`
    display: flex;
    gap: 15px;
    margin-top: 5px;
    flex-wrap: wrap;
  `,

  ImagemItemRecebido: styled.div` 
    display: flex; 
    flex-direction: column; 
    gap: 8px;
    p { margin: 0; font-size: 12px; font-weight: 700; color: #4a635d; }
  `,

  ItemImage: styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s;
    /* Sem bordas */
    &:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
  `,

  Button: styled.button<{ ativo: boolean }>`
    display: ${({ ativo }) => (ativo ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    background-color: #26a69a; /* Verde Cana Ativo */
    color: #fff;
    border: none;
    padding: 16px;
    font-size: 15px;
    font-weight: 800;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: all 0.2s;
    box-shadow: 0 6px 20px rgba(38, 166, 154, 0.25);
    
    &:hover { background-color: #00897b; transform: translateY(-2px); }
    &:active { transform: scale(0.98); }
  `,

  semItens: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    color: #b0c2be;
    gap: 15px;
  `,

  iconSemItens: styled(MdInbox)` font-size: 60px; opacity: 0.6; `,
  edit: styled.div` margin: 0; `,
  p: styled.p` margin: 0; `
};

export default Template;
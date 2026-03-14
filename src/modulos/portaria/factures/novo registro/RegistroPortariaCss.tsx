import { MdInbox } from "react-icons/md";
import styled from "styled-components";

interface CamposProps {
  hasError?: boolean;
}

export default {
  container_principal: styled.div`
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    min-height: 100vh;
    background-color: #f4f7f9; // Fundo mais moderno e limpo
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 30px;
    }
  `,

  container: styled.div`
    padding: 20px 15px;
    width: 100%;
    background-color: #ffffff;
    max-width: 800px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04); // Sombra bem leve

    @media (min-width: 768px) {
      padding: 30px;
    }
  `,

  area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto;
    padding: 10px 0;
    width: 100%;

    @media (min-width: 768px) {
      max-width: 750px;
    }
  `,

  titulo: styled.h1`
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 25px;
    color: #1a1a1a;
    text-align: center;
    letter-spacing: -0.5px;

    @media (min-width: 768px) {
      font-size: 26px;
      text-align: left;
    }
  `,

  pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,

  FormSub: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,

  label: styled.label`
    font-size: 0.75rem;
    font-weight: 700;
    color: #455a64;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 8px;
    display: inline-block;
  `,

  CamposInput: styled.div`
    width: 100%;
    position: relative;
    margin: 2px 0;
  `,

  Select: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px; 
    margin: 8px 0;
  `,

  Campos: styled.input.withConfig({
    shouldForwardProp: (prop) => prop !== "hasError",
  }) <CamposProps>`
    width: 100%;
    height: 48px;
    border-radius: 12px;
    padding: 0 16px;
    background-color: #fcfdfe;
    font-size: 16px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff5252' : '#e0e6ed')};
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #26a69a;
        background-color: #ffffff;
        box-shadow: 0 0 0 4px rgba(38, 166, 154, 0.1);
    }

    @media (min-width: 768px) {
      height: 44px;
      font-size: 15px;
    }
  `,

  labelCheck: styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: #f8fafc;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #f1f5f9;
    transition: 0.2s;

    &:hover {
      background: #f1f5f9;
    }
  `,

  checkbox: styled.input`
    height: 18px;
    width: 18px;
    accent-color: #26a69a;
    cursor: pointer;
  `,

  SelectItens: styled.select<CamposProps>`
    width: 100%;
    height: 48px;
    background-color: #fcfdfe;
    border-radius: 12px;
    padding: 0 12px;
    font-size: 16px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff5252' : '#e0e6ed')};
    cursor: pointer;
    appearance: none;

    @media (min-width: 768px) {
      height: 44px;
      font-size: 15px;
    }
  `,

  TextArea: styled.textarea<CamposProps>`
    min-height: 110px;
    resize: vertical;
    width: 100%;
    padding: 15px;
    background-color: #fcfdfe;
    border-radius: 12px;
    font-size: 16px;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff5252' : '#e0e6ed')};
    font-family: inherit;

    &:focus {
        outline: none;
        border-color: #26a69a;
    }
  `,

  Options: styled.option`
    padding: 10px;
  `,

  Erros: styled.div`
    color: #ff5252;
    font-size: 12px;
    margin-top: 6px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  `,

  BtnLogin: styled.button`
    width: 100%;
    height: 52px;
    background: linear-gradient(135deg, #26a69a 0%, #2bbbad 100%);
    border-radius: 14px;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
    box-shadow: 0 4px 15px rgba(38, 166, 154, 0.25);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:active {
        transform: scale(0.98);
    }

    &:hover {
        box-shadow: 0 6px 20px rgba(38, 166, 154, 0.35);
        filter: brightness(1.1);
    }

    @media (min-width: 768px) {
      height: 48px;
    }
  `,

  leftArea: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 20px;
    }
  `,

  btnDivider: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
    margin-top: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  `,

  CardCentro: styled.div`
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 15px;
    background: #fff;
    border: 1px solid #f1f5f9;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 25px;
    }
  `,

  StatusContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
  `,

  AreaItemJust: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,

  AreaItemJustCenter: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
    }
  `,

  AreaItemJustRigth: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: 32%;
    }
  `,

  semItens: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    height: 40vh;
    font-size: 16px;
    gap: 15px;
  `,

  iconSemItens: styled(MdInbox)`
    font-size: 64px;
    color: #e2e8f0;
  `,

  StatusItem: styled.div<{ active?: boolean }>`
    flex: 1;
    text-align: center;
    color: ${(props) => (props.active ? "#fff" : "#64748b")};
    background: ${(props) => (props.active ? "#26a69a" : "#f1f5f9")};
    border-radius: 10px;
    padding: 10px;
    margin: 4px;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  `,

  Button: styled.button`
    background: #26a69a;
    color: #fff;
    border: none;
    padding: 14px;
    font-size: 14px;
    border-radius: 12px;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
    font-weight: 700;
    transition: 0.2s;

    &:hover { filter: brightness(1.1); }
  `,

  ItemImage: styled.img`
    width: 100%;
    max-width: 130px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 14px;
    margin-bottom: 15px;
    border: 3px solid #f8fafc;

    @media (min-width: 560px) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  `,

  ItemDetails: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  `,

  SummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 5px;
  `,

  heanderPedido: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f1f5f9;
  `,

  tituloPedido: styled.h4`
    font-size: 15px;
    color: #26a69a;
    font-weight: 700;
  `,

  p: styled.p`
    font-weight: 600;
    font-size: 15px;
    color: #1e293b;
    margin: 4px 0;
  `,

  status: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    color: #64748b;
  `,

  Image: styled.img`
    width: 100%;
    height: 200px;
    border-radius: 16px;
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);

    @media (min-width: 560px) {
      width: 160px;
      height: 160px;
    }
  `,

  description: styled.div`
    width: 100%;
    font-size: 14px;
    line-height: 1.6;
    color: #475569;
    background: #f8fafc;
    padding: 12px;
    border-radius: 10px;
  `,

  Label: styled.span`
    font-size: 0.75rem;
    font-weight: 800;
    color: #1e293b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  AreaBuscaPlaca: styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    padding: 35px 25px;
    width: 90%;
    max-width: 480px;
    border-radius: 24px;
    background: #fff;
    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
    gap: 20px;
    text-align: center;

    @media (min-width: 600px){
      margin: 4em auto;
    }
  `,

  busca: styled.div`
    display: flex;
    width: 100%;
    border-radius: 14px;
    padding: 6px;
    background: #f1f5f9;
    border: 2px solid transparent;
    transition: 0.3s;
    align-items: center;

    &:focus-within {
      background: #fff;
      border-color: #26a69a;
      box-shadow: 0 4px 12px rgba(38, 166, 154, 0.1);
    }
  `,

  LabelSubtitulo: styled.span`
    font-weight: 500;
    color: #64748b;
    font-size: 0.8rem;
  `,

  edit: styled.div`
    margin: 0;
  `,
};
import styled from "styled-components";

type Props = {
  hasError?: boolean;
};

const Styles = {
    // Manutenção da estrutura original com visual limpo
    container: styled.div`
        min-height: 100vh;
        padding: 32px 80px;
        background-color: #f8fafc; /* Fundo Gelo */
        @media screen and (max-width: 760px) {
            padding: 16px;
        }
    `,
    container_int: styled.div`
        display: flex;
        gap: 24px;
        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
    `,

    container_left: styled.section`
        flex: 1;
        padding: 24px;
        background: #fff;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        @media screen and (max-width: 760px) {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
    `,
    conainter_right: styled.section`
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 24px;
        border-radius: 12px;
    `,
    container_usuarioArea: styled.div`
        display: flex;
        gap: 12px;
        align-items: center;
    `,
    container_img: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 220px;
        height: 160px;
        background: #f1f5f9;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
            border-radius: 6px;
        }
    `,

    container_titulo: styled.div`
        font-size: 20px;
        font-weight: 800;
        color: #004d40; /* Verde Escuro da nova paleta */
        font-family: 'Inter', sans-serif;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;

        &::before {
            content: '';
            width: 4px;
            height: 18px;
            background: #26a69a; /* Destaque Verde Água */
            border-radius: 2px;
        }
    `,
    area_infor: styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
    `,
    meta: styled.div`
        margin-top: 14px;
        color: #64748b;
        font-size: 14px;
        display: flex;
        flex-direction: column;
    `,
    span: styled.span`
        padding: 4px 0;
        font-weight: 500;
    `,
    small: styled.small`
        color: #94a3b8; 
        font-size: 12px;
    `,
    nomeFilial: styled.div`
        text-align: start; 
        margin-top: 4px; 
        color: #26a69a; 
        font-size: 13px;
        font-weight: 600;
    `,

    form: styled.form`
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 8px 0;
    `,
    area_forma: styled.div`
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        gap: 16px;
        scrollbar-width: thin;
    `,
    CamposInput: styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 6px;
    `,
    input: styled.input<Props>`
        width: 100%;
        padding: 12px 14px;
        border-radius: 10px;
        background: #f8fafc;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        transition: all 0.2s ease;
        border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#e2e8f0')};
        
        &:focus {
            outline: none;
            background: #fff;
            border-color: ${({ hasError }) => (hasError ? '#ef4444' : '#26a69a')};
            box-shadow: 0 0 0 4px ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(38, 166, 154, 0.1)')};
        }
    `,
    label: styled.label`
        display: block;
        font-size: 12px;
        font-weight: 700;
        color: #475569;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        margin-left: 4px;
    `,
    Erros: styled.div`
        color: #ef4444; 
        font-size: 12px;
        font-weight: 500;
        margin: 4px 0 0 4px;
    `,

    area_campo: styled.div`
        display: flex;
        gap: 12px;
    `,
    area_btn: styled.div`
        display: flex;
        width: 100%;
        gap: 12px;
        margin-top: 8px;
    `,
};

export default Styles;
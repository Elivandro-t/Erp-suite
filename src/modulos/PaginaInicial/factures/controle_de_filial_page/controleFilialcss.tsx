import styled from "styled-components";

type props = {
  hasError?: boolean;
}

export default {
    container: styled.div`
        min-height: 100vh;
        padding: 32px 80px;
        background-color: #f8fafc; /* Fundo Gelo */
        display: flex;
        flex-direction: column;
        
        @media screen and (max-width: 760px) {
            padding: 16px;
        }
    `,

    container_int: styled.div`
        display: flex;
        gap: 24px;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;

        @media screen and (max-width: 1080px) {
            flex-direction: column;
        }
    `,

    container_left: styled.section`
        flex: 1;
        background: #fff;
        padding: 24px;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        height: fit-content;
        position: sticky;
        top: 24px;

        @media screen and (max-width: 760px) {
            position: relative;
            top: 0;
        }
    `,

    conainter_right: styled.section`
        flex: 2;
        display: flex;
        flex-direction: column;
        gap: 24px;
    `,

    // Títulos com a sua paleta Verde Escuro
    container_titulo: styled.div`
        margin-bottom: 20px;
        font-size: 20px;
        font-weight: 800;
        color: #004d40;
        font-family: 'Inter', sans-serif;
        display: flex;
        align-items: center;
        gap: 10px;

        &::before {
            content: '';
            width: 4px;
            height: 20px;
            background: #26a69a;
            border-radius: 4px;
        }
    `,

    ///////// Area da Imagem do Perfil /////////
    container_img: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 200px;
        background: #f1f5f9;
        border-radius: 12px;
        border: 2px dashed #cbd5e1;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            border-color: #26a69a;
            background: #f0fdfa;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,

    ////////// Formulario Clean /////////
    area_forma: styled.div`
        background: #fff;
        padding: 32px;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,

    CamposInput: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        width: 100%;
    `,

    label: styled.label`
        font-size: 13px;
        font-weight: 700;
        color: #475569;
        margin-left: 4px;
        text-transform: uppercase;
        letter-spacing: 0.025em;
    `,

    input: styled.input<props>`
        width: 100%;
        padding: 12px 16px;
        border-radius: 10px;
        font-size: 14px;
        font-family: 'Inter', sans-serif;
        background: #f8fafc;
        transition: all 0.2s ease;
        border: 1px solid ${({ hasError }) => (hasError ? '#ef4444' : '#e2e8f0')};
        color: #1e293b;

        &::placeholder {
            color: #94a3b8;
        }

        &:focus {
            outline: none;
            background: #fff;
            border-color: ${({ hasError }) => (hasError ? '#ef4444' : '#26a69a')};
            box-shadow: 0 0 0 4px ${({ hasError }) => (hasError ? 'rgba(239, 68, 68, 0.1)' : 'rgba(38, 166, 154, 0.1)')};
        }
    `,

    Erros: styled.div`
        color: #ef4444;
        font-size: 12px;
        font-weight: 500;
        margin-top: 4px;
        margin-left: 4px;
    `,

    area_campo: styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    `,

    area_btn: styled.div`
        display: flex;
        gap: 12px;
        margin-top: 10px;
        justify-content: flex-end;

        button {
            height: 45px;
            padding: 0 24px;
            border-radius: 10px;
            font-weight: 600;
            transition: all 0.2s;
        }
    `,

    meta: styled.div`
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #f1f5f9;
        display: flex;
        flex-direction: column;
        gap: 8px;
    `,

    span: styled.span`
        font-size: 14px;
        color: #334155;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
    `,

    small: styled.small`
        color: #64748b;
        font-size: 12px;
    `,

    nomeFilial: styled.div`
        font-size: 13px;
        color: #26a69a;
        font-weight: 600;
        background: #f0fdfa;
        padding: 4px 12px;
        border-radius: 20px;
        width: fit-content;
        margin-top: 4px;
    `
}
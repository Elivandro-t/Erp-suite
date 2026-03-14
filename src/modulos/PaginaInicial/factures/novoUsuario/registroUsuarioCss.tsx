import styled from "styled-components";

interface CamposProps {
    hasError?: boolean;
}

export default {
    container: styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 60px;
    width: 100%;

    `,

    titulo: styled.h1`
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 10px;
    color: #004d40; /* Nosso verde escuro padrão */
    letter-spacing: -0.5px;
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 4px;
        background-color: #26a69a;
        margin-top: 8px;
        border-radius: 2px;
    }
    `,

    FormSub: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px; /* Aumentado para não ficar amontoado */
    background: #fff;
    padding: 25px;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    `,

    label: styled.label`
    font-size: 0.85rem;
    font-weight: 700;
    color: #475569; /* Cinza azulado sério */
    font-family: "Inter", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 6px;
    display: inline-block;
    `,

    CamposInput: styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    `,

    Select: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px; 
    margin-bottom: 10px;
    `,

    Campos: styled.input.withConfig({
        shouldForwardProp: (prop) => prop !== "hasError",
    })<CamposProps>`
    width: 100%;
    height: 45px; /* Levemente mais alto para conforto visual */
    background-color: #fcfdfe;
    border-radius: 10px;
    padding: 0 15px;
    font-size: 15px;
    color: #1e293b;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#e2e8f0')};
    transition: all 0.2s ease-in-out;

    &::placeholder {
        color: #94a3b8;
    }

    &:focus {
        outline: none;
        border-color: #26a69a;
        background-color: #fff;
        box-shadow: 0 0 0 4px rgba(38, 166, 154, 0.1);
    }
    `,

    SelectItens: styled.select<CamposProps>`
    width: 100%;
    height: 45px;
    background-color: #fcfdfe;
    border-radius: 10px;
    padding: 0 10px;
    font-size: 15px;
    color: #1e293b;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#e2e8f0')};
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #26a69a;
    }
    `,

    TextArea: styled.textarea<CamposProps>`
    width: 100%;
    min-height: 100px;
    background-color: #fcfdfe;
    border-radius: 10px;
    padding: 12px 15px;
    font-size: 15px;
    color: #1e293b;
    font-family: inherit;
    border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#e2e8f0')};
    resize: vertical;

    &:focus {
        outline: none;
        border-color: #26a69a;
    }
    `,

    Options: styled.option`
        padding: 10px;
    `,

    Erros: styled.div`
    color: #ff4d4f;
    font-size: 11px;
    font-weight: 600;
    margin-top: 4px;
    display: flex;
    align-items: center;
    
    &::before {
        content: '';
        margin-right: 4px;
        font-size: 10px;
    }
    `,

    BtnLogin: styled.button`
    margin-top: 15px;
    width: 100%;
    height: 48px;
    border: none;
    background-color: #26a69a; /* Verde da nossa paleta */
    border-radius: 12px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(38, 166, 154, 0.2);
    
    &:hover {
        background-color: #2bbbad;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(38, 166, 154, 0.3);
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        background-color: #cbd5e1;
        cursor: not-allowed;
        transform: none;
    }
    `,

    leftArea: styled.div`
    width: 100%;
    padding: 10px 0;
    display: grid; /* Mudado para grid para melhor alinhamento */
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
    `
}
import { Link } from "react-router-dom";
import styled from "styled-components";

export default {
    container: styled.div`
        min-height: 100vh;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin: 0 auto;
        padding: 40px 20px;
        background-color: #f8fafc; /* Fundo Gelo */
        width: 100%;
        box-sizing: border-box;
    `,

    titulo: styled.h1`
        font-size: 26px;
        font-weight: 800;
        color: #004d40; /* Seu Verde Escuro */
        font-family: 'Inter', sans-serif;
        letter-spacing: -0.5px;
        margin: 0;
        
        &::after {
            content: '';
            display: block;
            width: 40px;
            height: 4px;
            background-color: #26a69a; /* Destaque Esmeralda */
            margin-top: 8px;
            border-radius: 2px;
        }
    `,

    grid: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 24px;
    `,

    link: styled(Link)`
        background: white;
        padding: 24px;
        text-decoration: none;
        border-radius: 16px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        /* Barra lateral sutil em vez de grossa */
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 4px;
            background: #26a69a;
            transform: scaleY(0.4);
            transition: transform 0.3s;
        }

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border-color: #26a69a;

            &::before {
                transform: scaleY(1);
            }
        }
    `,

    card_title: styled.div`
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 10px;
        font-family: 'Inter', sans-serif;
        transition: color 0.2s;

        ${/* O título ganha a cor verde no hover do card */ ''}
        ${Link as any}:hover & {
            color: #26a69a;
        }
    `,

    card_desc: styled.div`
        font-size: 14px;
        color: #64748b;
        line-height: 1.5;
    `,

    disabledCard: styled.div`
        padding: 24px;
        border-radius: 16px;
        background: #f1f5f9; /* Cinza claro suave em vez de escuro */
        border: 1px solid #e2e8f0;
        cursor: not-allowed;
        opacity: 0.7;
        display: flex;
        flex-direction: column;
        position: relative;
    `,

    small: styled.small`
        color: #94a3b8;
        display: inline-block;
        margin-bottom: 12px;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        background: #e2e8f0;
        padding: 2px 8px;
        border-radius: 4px;
        width: fit-content;
    `
};
import styled from "styled-components";

export default {
    container: styled.div`
        display: flex;
        gap: 5px;
        align-items: center;
        background: #f0f4f3; /* Fundo sutil para agrupar os botões */
        padding: 4px 8px;
        border-radius: 10px;
        border: 1px solid #e6eeec;
    `,
    Or: styled.span`
        text-align: center;
        color: #b0c2be; /* Cor neutra para o separador */
        font-weight: 300;
        font-size: 14px;
        margin: 0 2px;
    `
}
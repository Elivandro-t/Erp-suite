import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Template = {
  Main: styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #f1f5f9; /* Um cinza bem claro para destacar os cards brancos */
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 20px 40px;
    }
  `,

  HeaderCard: styled.div`
    background: #fff;
    padding:5px 15px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; /* Mobile: um embaixo do outro */
    gap: 15px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      flex-direction: row; /* Desktop: lado a lado */
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px;
    }
  `,

  TitleSection: styled.div`
    small {
      color: #7c3aed; /* Roxo vibrante */
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
      display: block;
    }
    h2 {
      margin: 4px 0 0 0;
      color: #1e293b;
      font-size: 1.2rem;
    }
  `,

  FilterArea: styled.div`
    display: flex;
    align-items: flex-end; /* Alinha o botão de refresh com o final do input */
    gap: 10px;
    width: 100%;
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,

  SelectGroup: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;

    input {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      font-size: 14px;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      color: #334155;

      &:focus {
        border-color: #7c3aed;
        box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
      }
    }

    @media (min-width: 768px) {
      min-width: 200px;
    }
  `,

  Label: styled.label`
    font-size: 11px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
  `,

  RefreshButton: styled.button<{ loading: boolean }>`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    padding: 0;

    &:hover:not(:disabled) {
      background: #f8fafc;
      border-color: #cbd5e1;
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    svg {
      font-size: 22px;
      color: #475569;
      /* Rotação suave com cubic-bezier para ficar "mais bonita" */
      ${(props) =>
        props.loading &&
        css`
          animation: ${rotate} 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          color: #7c3aed;
        `}
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      background: #f1f5f9;
    }
  `,
};

export default Template;
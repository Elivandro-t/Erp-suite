import styled from "styled-components";

interface AtivoProps { ativo: boolean; }
interface RowProps { isSelected?: boolean; }

export default {
  container: styled.div`
    min-height: 100vh;
    padding: 24px 40px;
    display: flex;
    flex-direction: column;
    background-color: #f8fafc;
    overflow-x: hidden;
    @media (max-width: 768px) { padding: 16px; }
  `,

  titulo: styled.h1`
    font-size: 22px;
    font-weight: 700;
    color: #004d40;
    font-family: 'Inter', sans-serif;
  `,

  FormSub: styled.div`
    margin-top: 20px;
    background: #ffffff;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  `,

  CamposInput: styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 12px;
    border-bottom: 1px solid #f1f5f9;
  `,

  InputWrapper: styled.div`
    display: flex;
    align-items: center;
    background: #f1f5f9;
    border-radius: 8px;
    padding: 0 12px;
    height: 40px;
    flex: 1;
    max-width: 400px;
    input {
      border: none;
      background: transparent;
      outline: none;
      width: 100%;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
    }
  `,

  TableContainer: styled.div`
    width: 100%;
    overflow-x: auto;
  `,

  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    min-width: 1000px;
    
    thead th {
      background-color: #f8fafc;
      padding: 14px 16px;
      text-align: left;
      font-size: 12px;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      cursor: pointer; /* Indica que é clicável para filtro/ordem */
      user-select: none;
      transition: background 0.2s;

      &:hover {
        background-color: #f1f5f9;
        color: #26a69a; /* Destaque no hover do header */
      }
    }
  `,

  // NOVA TR COM HOVER E ACTIVE
  Row: styled.tr<RowProps>`
    cursor: pointer;
    transition: all 0.2s ease;
    background-color: ${props => props.isSelected ? '#e0f2f1' : 'transparent'}; // Verde bem clarinho se selecionado
    
    &:hover {
      background-color: ${props => props.isSelected ? '#e0f2f1' : '#f1f5f9'};
    }

    td {
      padding: 12px 16px;
      font-size: 14px;
      border-bottom: 1px solid #f1f5f9;
      color: ${props => props.isSelected ? '#004d40' : '#334155'};
      font-weight: ${props => props.isSelected ? '500' : '400'};
    }
  `,

  ativo: styled.div<AtivoProps>`
    width: 8px;
    height: 8px;
    background-color: ${({ ativo }) => (ativo ? "#26a69a" : "#ef4444")};
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
  `,

  device: styled.div`
    padding: 2px 8px;
    background: #f1f5f9;
    color: #475569;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 600;
  `,

  trBTN: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
  `
};
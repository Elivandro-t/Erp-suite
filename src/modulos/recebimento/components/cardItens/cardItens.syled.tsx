import styled from "styled-components";

const Template = {
  Container: styled.div`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    
    @media (min-width: 768px) {
      max-width: 800px;
      margin: 0 auto;
    }
  `,

  Card: styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    margin-bottom: 12px;
  `,

  CardHeaderPrincipal: styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 8px;
    margin-bottom: 10px;

    .tag {
      background: #f1f5f9;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      margin-right: 4px;
    }

    .titulo {
      margin: 5px 0;
      font-size: 14px;
      color: #1e293b;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,

  info_date: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #94a3b8;
  `,

  TableWrapper: styled.div`
    width: 100%;
    overflow-x: auto;
    /* Remove scrollbar visibility mas mantém funcionalidade */
    &::-webkit-scrollbar { display: none; } 
  `,

  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: auto; // Permite que a tabela se ajuste ao conteúdo

    th {
      font-size: 9px;
      text-transform: uppercase;
      color: #64748b;
      padding: 0px 2px;
      text-align: center;
      border-bottom: 2px solid #f1f5f9;
      white-space: nowrap; // Evita quebra de linha no título
    }

    td {
      padding: 1px 2px;
      font-size: 12px;
      text-align: center;
      border-bottom: 1px solid #f8fafc;
    }

    .bold { 
      text-align: left; 
      font-weight: 600; 
      color: #334155;
      min-width: 80px;
    }

    /* Cores solicitadas para os valores */
    .val-portaria { color: #0891b2; font-weight: 600; }
    .val-porto { color: #7c3aed; font-weight: 600; }
    .val-total { color: #16a34a; font-weight: 700; background: #f0fdf4; border-radius: 4px; }
    .val-pendente { color: #dc2626; font-weight: 600; }

    .footer-row {
      background: #f8fafc;
      td {
        border-top: 2px solid #e2e8f0;
        font-weight: 800;
        padding: 10px 2px;
      }
      .total-geral {
        color: #000;
        background: #dae6f1;
      }
    }

    @media (min-width: 768px) {
      th { font-size: 11px; padding: 5px; }
      td { font-size: 14px; padding: 5px; }
    }
  `,

  Thead: styled.thead``,
  Tbody: styled.tbody``,
  Tr: styled.tr``
};

export default Template;
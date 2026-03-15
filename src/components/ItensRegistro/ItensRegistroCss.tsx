import styled from "styled-components";
export default {
  container: styled.div`
    background-color: #f0f4f3;
    padding: 10px 0;
    min-height: 100vh;
  `,
  area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
  `,
  titulo: styled.h1`
    font-size: 22px;
    font-weight: 800;
    color: #26a69a; /* Verde Cana que você gostou */
    margin-bottom: 10px;
  `,
  pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  `,
  cardItem: styled.div`
    background: #fff;
    border-radius: 12px;
    padding: 18px;
    border-left: 5px solid #26a69a; /* Mantive o detalhe estiloso na lateral */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0px 6px 16px rgba(38, 166, 154, 0.1);
    }
  `,
  card_item_header: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ecf0ef;
    padding-bottom: 10px;
    margin-bottom: 12px;
  `,
  card_item_center: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  `,
  numeroDoPedido: styled.h4`
    font-size: 14px;
    color: #004d40;
    font-weight: 800;
  `,
  data: styled.small`
    font-size: 10px;
    color: #6b7280;
    font-weight: 600;
  `,
  btnAguadandoPagamento: styled.div`
    background-color: #e0f2f1;
    color: #00796b;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 700;
    border: 1px solid #b2dfdb;
  `,
  AreaStatus: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
  `,
  Image: styled.img`
    width: 75px;
    height: 75px;
    border-radius: 12px;
    object-fit: cover;
    /* BORDA REMOVIDA AQUI */
    background-color: #f1f8f7;
  `,
  dataPedido: styled.div`
    font-size: 12px;
    color: #26a69a;
    font-weight: 900;
    margin: 10px 0 5px 5px;
    text-transform: uppercase;
  `,
  Areaitem: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
  `,
  inforLabel: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  Span: styled.span`
    font-size: 11px;
    font-weight: 800;
    color: #94a3b8;
    text-transform: uppercase;
  `,
  Infor: styled.small`
    font-size: 14px;
    color: #004d40;
    font-weight: 800;
    letter-spacing: 0.5px;
  `,
  buttonNext: styled.button`
    color: #26a69a;
    background: transparent;
    cursor: pointer;
    border: 0;
    font-weight: 800;
    font-size: 18px;
    &:hover { color: #004d40; }
  `,
  sentinela: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  loadingFooter: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #26a69a;
    font-weight: 700;
  `,
};
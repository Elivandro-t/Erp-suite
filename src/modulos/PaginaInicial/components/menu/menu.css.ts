import styled from "styled-components";

// Interface para aceitar as propriedades de estado do Menu
interface MenuProps {
  isOpen?: boolean;
  isActive?: boolean;
}

export default {
  container: styled.div`
    width: 240px;
    background-color: #f8fafc; /* Gelo */
    height: 100vh;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    flex-shrink: 0;
    transition: all 0.3s ease;
    box-shadow: 6px 0 18px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    z-index: 100;

    @media screen and (max-width: 760px) {
      position: fixed;
      top: 0;
      left: 0;
    }
  `,

  ///usuario

  // ... dentro do seu export default {

  UserInfo: styled.div`
  height: 70px;
    padding:0  20px;
    border-bottom: 1px solid rgba(38, 166, 154, 0.1);
    display: flex;
    align-items: center;
    gap: 12px;

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: linear-gradient(135deg, #26a69a, #004d40);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 18px;
      box-shadow: 0 4px 10px rgba(38, 166, 154, 0.3);
    }

    .info {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      
      span {
        font-size: 14px;
        font-weight: 700;
        color: #004d40;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      
      small {
        font-size: 11px;
        color: #26a69a;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  `,

// ... restante dos estilos

  container_int: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  `,

  areaMenu: styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 24px 16px;
    /* A barra em si (largura) */
&::-webkit-scrollbar {
  width: 8px;
}

/* O fundo da barra (trilho) */
&::-webkit-scrollbar-track {
  background: #f1f1f1; 
  border-radius: 10px;
    padding: 5px 0;

}

/* O "ponteiro" que se move (o que você quer verde) */
&::-webkit-scrollbar-thumb {
  background: #26a69a; /* Sua cor esmeralda */
  border-radius: 10px;
  padding: 5px 0;
}

/* Efeito ao passar o mouse no scroll */
&::-webkit-scrollbar-thumb:hover {
  background: #027764; /* Verde mais escuro */
    padding: 5px 0;

}
  `,

  LabelSection: styled.div`
    padding: 24px 16px 12px 16px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-weight: 800;
    color: #004d40; /* Verde escuro */
    opacity: 0.6;
  `,

  menu_nav: styled.nav` width: 100%; `,

  menu_ul: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  menu_li: styled.li`
    margin-bottom: 6px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;

    .menu-item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      color: #004d40;
      font-size: 14px;
      font-weight: 600;
      border-radius: 12px;
      transition: all 0.2s;

      &:hover {
        background-color: rgba(38, 166, 154, 0.1);
        color: #26a69a;
      }
    }
  `,

  menu_liApi: styled.li<MenuProps>`
    margin-bottom: 6px;
    
    a, .logout-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 16px;
      border-radius: 12px;
      text-decoration: none;
      font-size: 14px;
      transition: all 0.2s ease;

      /* Lógica de Rota Ativa na API */
      color: ${props => props.isActive ? '#26a69a' : '#004d40'};
      background-color: ${props => props.isActive ? 'rgba(38, 166, 154, 0.12)' : 'transparent'};
      font-weight: ${props => props.isActive ? '700' : '600'};
      box-shadow: ${props => props.isActive ? '0 4px 12px rgba(38, 166, 154, 0.08)' : 'none'};

      &:hover {
        background-color: rgba(38, 166, 154, 0.1);
        color: #26a69a;
        transform: translateX(5px);
      }

      &.logout-active {
        color: #d32f2f;
        margin-top: 10px;
        &:hover {
          background-color: #ffebee;
          color: #d32f2f;
        }
      }
    }
  `,

  submenu: styled.ul<{ isOpen: boolean }>`
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: ${props => (props.isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 0 0 12px 12px;
  `,

  submenu_item: styled.div<MenuProps>`
    padding: 10px 16px 10px 48px;
    font-size: 13px;
    position: relative;
    transition: 0.2s;
    border-radius: 8px;
    margin: 2px 8px;

    /* Lógica de Rota Ativa no Submenu */
    color: ${props => props.isActive ? '#26a69a' : '#455a64'};
    background-color: ${props => props.isActive ? 'rgba(38, 166, 154, 0.08)' : 'transparent'};
    font-weight: ${props => props.isActive ? '700' : '500'};

    &::before {
      content: "";
      position: absolute;
      left: 28px;
      top: 50%;
      width: 6px;
      height: 6px;
      background-color: ${props => props.isActive ? '#26a69a' : '#b2dfdb'};
      border-radius: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      color: #26a69a;
      background-color: rgba(255, 255, 255, 0.8);
      &::before { background-color: #26a69a; }
    }
  `
};
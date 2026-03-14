import styled from "styled-components";

export default {
  container: styled.div`
    width: 240px;
    /* Retornando ao Verde Cana/Gelo Profissional */
    background-color: #f8fafc; 
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
     &::-webkit-scrollbar { width: 8px; }
    &::-webkit-scrollbar-thumb {
      background: #80cbc4;
      border-radius: 10px;
    } 
  `,

  LabelSection: styled.div`
    padding: 24px 16px 12px 16px;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-weight: 800;
    color: #004d40; /* Verde escuro profissional */
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
        color: #26a69a; /* Verde água principal */
      }
    }
  `,

  menu_liApi: styled.li`
    margin-bottom: 6px;
    
    a, .logout-btn {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 12px 16px;
      border-radius: 12px;
      color: #004d40;
      text-decoration: none;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.2s ease;

      &:hover {
        background-color: rgba(38, 166, 154, 0.1);
        color: #26a69a;
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
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
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0 0 12px 12px;
  `,

  submenu_item: styled.div`
    padding: 10px 16px 10px 48px;
    font-size: 13px;
    color: #455a64;
    position: relative;
    transition: 0.2s;

    &::before {
      content: "";
      position: absolute;
      left: 28px;
      top: 50%;
      width: 6px;
      height: 6px;
      background-color: #b2dfdb;
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
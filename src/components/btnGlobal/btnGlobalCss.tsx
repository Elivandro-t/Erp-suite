import styled from "styled-components";

type LoginType = "code" | "admin" | "default";

type Props = {
  global: LoginType;
};

const loginStyles: Record<LoginType, { bg: string; hoverBg: string; color: string; hoverColor: string }> = {
  code: {
    bg: "#cad4d4",
    hoverBg: "transparent",
    color: "#000",
    hoverColor: "#dad6d6",
  },
  // Representa o estado ATIVO (Verde Cana Escuro)
  admin: {
    bg: "#26a69a", 
    hoverBg: "#00796b",
    color: "#fff",
    hoverColor: "#fff",
  },
  // Representa o estado INATIVO (Verde Cana Suave)
  default: {
    bg: "#e0f2f1",
    hoverBg: "#b2dfdb",
    color: "#004d40",
    hoverColor: "#004d40",
  },
};

export const BtnLogin = styled.button<Props>`
  margin: 5px 0;
  width: 100%;
  height: 38px; /* Aumentei levemente para melhor clique */
  border: 0;
  border-radius: 10px; /* Bordas mais arredondadas para combinar com o resto */
  padding: 0 15px;
  font-size: 13px;
  font-weight: 800; /* Mais negrito para destacar */
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  background-color: ${({ global }) => loginStyles[global]?.bg ?? loginStyles.default.bg};
  color: ${({ global }) => loginStyles[global]?.color ?? loginStyles.default.color};

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: ${({ global }) => loginStyles[global]?.hoverBg ?? loginStyles.default.hoverBg};
    color: ${({ global }) => loginStyles[global]?.hoverColor ?? loginStyles.default.hoverColor};
    box-shadow: 0 4px 8px rgba(0, 77, 64, 0.1);
  }
`;
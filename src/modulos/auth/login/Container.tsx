import styled from "styled-components";

interface CamposProps {
  hasError?: boolean;
  cor?: any;
}

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  height: 100vh;
  background-color: #f4f7f9;

  @media screen and (min-width: 560px) {
    justify-content: center;
    padding: 30px 20px;
    width: 100%;
  }
`;

export const LogoText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 26px;
  color: #26a69a;
  letter-spacing: -1px;
  margin-bottom: 5px;
  text-align: center;
  
  span {
    color: #1e293b;
    font-weight: 400;
  }
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  padding: 20px;
  gap: 15px;
  background-color: #fff;

  @media screen and (min-width: 430px) {
    width: 400px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    padding: 40px 30px;
  }
`;

export const Text = styled.p`
  color: #64748b;
  font-size: 14px;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
`;

export const FormSub = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Select = styled.div`
  position: relative;
  width: 100%;
`;

export const Campos = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<CamposProps>`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  padding: 0 16px;
  background-color: #fcfdfe;
  font-size: 16px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ff5252' : '#e0e6ed')};
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #26a69a;
    box-shadow: 0 0 0 4px rgba(38, 166, 154, 0.1);
  }
`;

export const Input = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<CamposProps>`
  height: 48px;
  background-color: #fcfdfe;
  border-radius: 12px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ff5252' : '#e0e6ed')};
  padding: 0 8px 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #26a69a;
    box-shadow: 0 0 0 4px rgba(38, 166, 154, 0.1);
  }
`;

export const Password = styled.input`
  width: 100%;
  outline: none;
  border: 0;
  background: transparent;
  font-size: 16px;
  color: #1e293b;
`;

export const Erros = styled.div`
  position: absolute;
  color: #ff5252;
  font-size: 11px;
  font-weight: 600;
  margin-top: 4px;
  padding-left: 4px;
`;

export const Foooter = styled.footer`
  position: absolute;
  bottom: 20px;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const EsquceuSenha = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -10px;
`;

// Mantidos apenas para não quebrar imports se existirem
export const Or = styled.div` height: 1px; width: 100%; background: #f1f5f9; margin: 10px 0; `;
export const Logo = styled.div``;
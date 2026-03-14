import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f8fafc;
  text-align: center;
  padding: 20px;
`;

export const Illustration = styled.div`
  margin-bottom: 20px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

export const Title = styled.h1`
  font-size: 80px;
  font-weight: 900;
  color: #004d40;
  margin: 0;
  letter-spacing: -2px;
  line-height: 1;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: #1e293b;
  margin: 10px 0 20px;
  font-weight: 600;
`;

export const Button = styled.button`
  background-color: #26a69a;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(38, 166, 154, 0.2);

  &:hover {
    background-color: #2bbbad;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(38, 166, 154, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ZapDaiLogo = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 12px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
`;
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Home from "@mui/icons-material/Home";
import Template from "./btnCss";

export const BotaoVoltar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  return (
    <Template.container>
      <Button
        onClick={() => navigate(-1)}
        sx={{
          color: "#26a69a", // Verde Cana
          minWidth: "35px",
          height: "35px",
          padding: 0,
          borderRadius: "8px",
          "& .MuiButton-startIcon": { margin: 0 }, // Centraliza o ícone
          "&:hover": {
            backgroundColor: "rgba(38, 166, 154, 0.08)",
          }
        }}
        startIcon={<ArrowBackIcon fontSize="small" />}
      />
      
      <Template.Or>|</Template.Or>
      
      <Button
        onClick={handleHome}
        sx={{
          color: "#26a69a", // Verde Cana
          minWidth: "35px",
          height: "35px",
          padding: 0,
          borderRadius: "8px",
          "& .MuiButton-startIcon": { margin: 0 },
          "&:hover": {
            backgroundColor: "rgba(38, 166, 154, 0.08)",
            transform: "scale(1.1)"
          }
        }}
        startIcon={<Home fontSize="small" />}
      />
    </Template.container>
  );
};
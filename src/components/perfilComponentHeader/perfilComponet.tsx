import Perfil from "./perfil";
import * as React from 'react';
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Divider, ListItemIcon } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

// Ícones Corporativos
import Logout from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';

import save from "../../localStorage/service-localStorage";
import { contextProvider } from "../../reducer/userProvider/userProvider";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
import { subjet } from "../../jwt/jwtservice";

const settings = [
  { name: "Minha Conta", icon: <AccountBoxIcon fontSize="small" /> },
  { name: "Portaria Pendentes", permissions: ["REGISTRAR_SAIDA"], icon: <PendingActionsIcon fontSize="small" /> },
  { name: "Meus Registros", permissions: ["VISUALIZAR_REGISTRO"], icon: <AssignmentIcon fontSize="small" /> },
  { name: "Registros Gerais", permissions: ["GERENCIAR_REGISTROS"], icon: <AssignmentIcon fontSize="small" /> },
  { name: "Controle De Registros", permissions: ["GERENCIAR_REGISTROS"], icon: <AdminPanelSettingsIcon fontSize="small" /> },
  { name: "Criar Registro", permissions: ["CRIAR_REGISTRO"], icon: <AddCircleOutlineIcon fontSize="small" /> },
  { name: "Sair", icon: <Logout fontSize="small" /> }
];

export const PerfilComponet = () => {
  const user = subjet();
  const contex = useContext(contextProvider);
  const [loading, setLoading] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [menuItens, setITensMenu] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleClose = () => setAnchorElUser(null);

  const handleAction = (setting: string) => {
    handleClose();
    if (setting === "Sair") {
      save.logout();
      contex?.logout();
      window.location.href = "/verify";
      return;
    }

    const paths: Record<string, string> = {
      "Meus Registros": "/portaria/controle/meus-registros",
      "Minha Conta": "/portaria/configuracao/my-count",
      "Registros Gerais": "/portaria/active/gerais",
      "Portaria Pendentes": "/portaria/active/pendentes",
      "Controle De Registros": "/portaria/configuracao",
      "Criar Registro": "/portaria/controle/registro-portaria-cd"
    };

    if (paths[setting]) {
      setLoading(true);
      setTimeout(() => {
        navigate(paths[setting]);
        setLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    const decodedUser = subjet();
    const permissions: string[] = decodedUser?.permissoes || [];

    const filteredMenu = settings.filter((item) => {
      if (!item.permissions || item.name === "Sair" || item.name === "Minha Conta") return true;
      return item.permissions.some((p) => permissions.includes(p));
    });

    setITensMenu(filteredMenu);
  }, [contex?.user]);

  return (
    <Perfil.container>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Menu do Usuário">
          {/* Ajuste: Borda agora usa o verde cana suave */}
          <IconButton onClick={handleOpenUserMenu} sx={{ p: '2px', border: '2px solid #b2dfdb' }}>
            <Avatar 
              src={contex?.usuario?.avatar || "/static/images/avatar/2.jpg"} 
              alt={user?.nome}
              sx={{ width: 38, height: 38 }}
            />
          </IconButton>
        </Tooltip>
        
        <Menu
          sx={{ mt: '45px' }}
          anchorEl={anchorElUser}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={Boolean(anchorElUser)}
          onClose={handleClose}
          PaperProps={{
            elevation: 4,
            sx: {
              minWidth: 240,
              borderRadius: '16px', // Bordas arredondadas como os cards
              padding: '8px',
              border: '1px solid #e0f2f1',
              '& .MuiMenuItem-root': {
                borderRadius: '10px',
                margin: '2px 0',
                transition: '0.2s',
                '&:hover': {
                  backgroundColor: '#f1f8f7', // Hover no tom cana
                  color: '#004d40'
                }
              }
            }
          }}
        >
          {/* Cabeçalho do Menu */}
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#004d40' }}>
                {user?.nome || "Usuário"}
            </Typography>
            <Typography variant="caption" sx={{ color: '#26a69a', fontWeight: 600 }}>
                Acesso Portaria
            </Typography>
          </Box>
          
          <Divider sx={{ my: 1, borderColor: '#e0f2f1' }} />

          {menuItens.map((item) => (
            <MenuItem key={item.name} onClick={() => handleAction(item.name)}>
              <ListItemIcon sx={{ 
                // Ajuste: Ícones agora são Verde Cana (#26a69a)
                color: item.name === 'Sair' ? '#d32f2f' : '#26a69a' 
              }}>
                {item.icon}
              </ListItemIcon>
              <Typography sx={{ 
                fontSize: '0.85rem', 
                fontWeight: 600,
                color: item.name === 'Sair' ? '#d32f2f' : '#004d40' 
              }}>
                {item.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {loading && <LoadingSecundary />}
    </Perfil.container>
  );
};
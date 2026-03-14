import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { Logued } from "../../../portaria/service/Logued"
import Template from "./header.css"
import { subjet } from "../../../../jwt/jwtservice";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { contextProvider } from "../../../../reducer/userProvider/userProvider";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
type props = {
    handleBtn: () => void,
    subtitulo?: string,
    ativaBtnDrower: boolean

}
const settings = [
    { name: "Minha Conta" },
    { name: "Sair" }
];
export const HeaderPaginaInicial = ({ handleBtn, subtitulo, ativaBtnDrower }: props) => {
    const contex = useContext(contextProvider)
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const navigate = useNavigate()
    const usuario = subjet();
    const handleCloseUserMenu = (setting: string) => {
        setAnchorElUser(null);

        switch (setting) {
            case "Minha Conta":
                setTimeout(() => {
                    navigate("/required/profile");
                }, 1000)

                break;
            case "Sair":
                window.location.href = "/verify";
                contex?.logout()
                break;
            default:
                break;
        }
    };
    return (
        // ... no retorno do seu componente
        <Template.header>
            <Template.contaier>
                {ativaBtnDrower &&
                    <IconButton onClick={handleBtn} sx={{ background: '#f0f5ff', '&:hover': { background: '#e0eaff' } }}>
                        <MenuIcon sx={{ color: '#5d87ff', fontSize: 24 }} />
                    </IconButton>
                }
                 <Link to={"/"}>
                    <Template.tituloTexto onClick={handleBtn}>
                        ERP - <span>SUITE CORE</span>  {subtitulo && <small>{subtitulo}</small>}
                    </Template.tituloTexto>
                </Link>
            </Template.contaier>

            {Logued() && (
                <Template.perfil>
                    {usuario?.nome && (
                        <Template.nomeUsuario>
                            Olá, <strong>{usuario.nome.split(" ")[0]}</strong>
                        </Template.nomeUsuario>
                    )}
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                            sx={{
                                width: 35,
                                height: 35,
                                border: '2px solid #fff',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                            alt={usuario?.nome}
                            src={contex?.usuario?.avatar || "/static/images/avatar/2.jpg"}
                        />
                    </IconButton>
                    {/* ... Menu MUI */}
                </Template.perfil>
            )}
        </Template.header>
    )
}
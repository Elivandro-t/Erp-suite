import Drower from "./menu.css";
import Logout from "../../../../localStorage/service-localStorage";
import { LogOutIcon, ChevronDown, User } from "lucide-react"; // Adicionado User icon
import { useContext, useEffect, useState } from "react";
import { subjet } from "../../../../jwt/jwtservice";
import apiModulos from "../../service/moduleApi";
import { FaTruck } from "react-icons/fa";
import SouthWestIcon from '@mui/icons-material/SouthWest';
import InventoryIcon from '@mui/icons-material/Inventory';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import menuConfig from "../../../../json";
import { contextProvider } from "../../../../reducer/userProvider/userProvider";
import { Link, useLocation } from "react-router-dom";

export const MenuDropComponent = ({ handleBtn }: any) => {
    const [userPermissions, setUserPermissions] = useState<string[]>([]);
    const [openMenus, setOpenMenus] = useState<number[]>([]);
    
    const location = useLocation(); 
    const contex = useContext(contextProvider);
    const usuario = subjet();
    const [menu, setModule] = useState<any[]>([]);

    const handleLogout = () => {
        window.location.href = "/verify";
        Logout.logout();
    };

    const toggleMenu = (index: number) => {
        setOpenMenus((prev) =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    const isMenuOpen = (index: number) => openMenus.includes(index);

    useEffect(() => {
        window.scroll(0, 0);
        const handleApi = async () => {
            const json = await apiModulos.modulo(usuario?.id);
            if (json) setModule(json?.acess);
        };
        handleApi();
    }, []);

    useEffect(() => {
        menuConfig.forEach((item, index) => {
            const hasActiveSubitem = item.items.some(sub => sub.to === location.pathname);
            if (hasActiveSubitem && !openMenus.includes(index)) {
                setOpenMenus(prev => [...prev, index]);
            }
        });
    }, [location.pathname]);

    useEffect(() => {
        const userSuv = subjet();
        setUserPermissions(userSuv?.permissoes || []);
    }, [contex?.user]);

    const hasPermission = (perm?: string | null) => {
        if (!perm) return true;
        return userPermissions.includes(perm);
    };

    function retornaIcone(modulo: string, valor: any, isActive: boolean) {
        const iconColor = isActive ? "#26a69a" : "#004d40"; 
        switch (modulo) {
            case "PORTARIA_ACCESS": return <FaTruck color={iconColor} size={valor} />;
            case "INVENTARIO_ACCESS": return <InventoryIcon sx={{ color: iconColor, fontSize: valor }} />;
            case "RECEBIMENTO_ACCESS": return <SouthWestIcon sx={{ color: iconColor, fontSize: valor, fontWeight: "bold" }} />;
            case "LOGISTICO_ACCESS": return <Inventory2Icon sx={{ color: iconColor, fontSize: valor, fontWeight: "bold" }} />;
            default: return null;
        }
    }

    return (
        <Drower.container onClick={handleBtn}>
            <Drower.container_int onClick={(e) => e.stopPropagation()}>
                
                {/* AREA DO PERFIL DO USUÁRIO */}
                <Drower.UserInfo>
                    <div className="avatar">
                        {usuario?.nome?.charAt(0).toUpperCase() || <User size={20} />}
                    </div>
                    <div className="info">
                        <span>{usuario?.nome || "Usuário"}</span>
                        <small>{usuario?.permissoes?.[0]?.replace('_', ' ') || "Acesso Padrão"}</small>
                    </div>
                </Drower.UserInfo>

                <Drower.areaMenu>
                    <Drower.menu_nav>
                        <Drower.LabelSection>Início</Drower.LabelSection>
                        <Drower.menu_ul>
                            <Link to={"/"} onClick={handleBtn} style={{ textDecoration: 'none' }}>
                                <Drower.submenu_item isActive={location.pathname === "/required/geral"}>
                                    HOME
                                </Drower.submenu_item>
                            </Link>
                        </Drower.menu_ul>

                        {usuario?.permissoes?.includes("GERENCIAR_USUARIOS") && (
                            <Drower.LabelSection>Menu Principal</Drower.LabelSection>
                        )}

                        <Drower.menu_ul>
                            {menuConfig.filter(it => hasPermission(it.permission)).map((item, index) => {
                                const isParentActive = item.items.some(s => s.to === location.pathname);
                                return (
                                    <Drower.menu_li key={index}>
                                        <div 
                                            className="menu-item-header" 
                                            onClick={() => toggleMenu(index)}
                                            style={{ color: isParentActive ? '#26a69a' : '#004d40' }}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                size={16}
                                                style={{
                                                    transform: isMenuOpen(index) ? 'rotate(180deg)' : 'none',
                                                    transition: '0.3s',
                                                    opacity: isParentActive ? 1 : 0.6
                                                }}
                                            />
                                        </div>

                                        <Drower.submenu isOpen={isMenuOpen(index)}>
                                            {item.items.filter(sub => hasPermission(sub.permission)).map((sub, i) => (
                                                <Link to={sub?.to as any} onClick={handleBtn} key={i} style={{ textDecoration: 'none' }}>
                                                    <Drower.submenu_item isActive={location.pathname === sub.to}>
                                                        {sub.label}
                                                    </Drower.submenu_item>
                                                </Link>
                                            ))}
                                        </Drower.submenu>
                                    </Drower.menu_li>
                                );
                            })}
                        </Drower.menu_ul>

                        <Drower.LabelSection>Permissões & Ações</Drower.LabelSection>
                        <Drower.menu_ul>
                            {menu.map((n: any, i: any) => {
                                const isActive = location.pathname === n.router;
                                return (
                                    <Drower.menu_liApi key={i} isActive={isActive}>
                                        <Link to={n.router}>
                                            {retornaIcone(n?.permission_name, 18, isActive)}
                                            {n.titulo}
                                        </Link>
                                    </Drower.menu_liApi>
                                );
                            })}

                            <Drower.menu_liApi onClick={handleLogout}>
                                <div className="logout-btn logout-active" style={{cursor:"pointer"}}>
                                    <LogOutIcon size={18} />
                                     Sair
                                </div>
                            </Drower.menu_liApi>
                        </Drower.menu_ul>
                    </Drower.menu_nav>
                </Drower.areaMenu>
            </Drower.container_int>
        </Drower.container>
    );
};
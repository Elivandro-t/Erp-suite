import Template from "./menuConfigCss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../../assets/logo portaria (1).png"
import { BotaoVoltar } from "../../../../../components/voltar/BotaoVoltar";
import ObjConfig from "../../../../../objConfig";
import { useContext, useEffect, useState } from "react";
import { subjet } from "../../../../../jwt/jwtservice";
import { contextProvider } from "../../../../../reducer/userProvider/userProvider";
export const MenuConfig = () => {
    const navigate = useNavigate()
    const hendleHome = () => {
        navigate("/verify")
    }
    const [userPermissions, setUserPermissions] = useState<string[]>([])
    const contex = useContext(contextProvider)
    // p=>perfil.permissoes.includes(p))
    useEffect(() => {
        const userSuv = subjet();
        setUserPermissions(userSuv?.permissoes || []);
    }, [contex?.user])

    const hasPermission = (perm?: string | null) => {
        if (!perm) return true;
        return userPermissions.includes(perm);
    };
  
    return (
        <Template.continer>
            <Template.areaMenu>
                <BotaoVoltar />
               
            </Template.areaMenu>
             <Template.tituloTexto onClick={hendleHome}>
                ERP <span>LOGÍSTICA</span>
            </Template.tituloTexto>

        </Template.continer>

    );
};

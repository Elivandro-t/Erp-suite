import Template from "./menuConfigCss";
import { useNavigate } from "react-router-dom";
import { BotaoVoltar } from "../../../../../components/voltar/BotaoVoltar";
export const MenuConfig = () => {
    const navigate = useNavigate()
    const hendleHome = () => {
        navigate("/verify")
    }
    // p=>perfil.permissoes.includes(p))
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

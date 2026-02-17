import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import api from "../../service/apiRecebimento";
import { notify } from "../../../portaria/service/snackbarService";
import Template from "./painelDetalhesCard.styled";
import { SemItens } from "../../components/SemItens";
import { Loading } from "../../components/Loading/loading";
import { MdRefresh } from "react-icons/md";
import { CardItensComponents } from "../../components/cardItens/cardItens";

const PainelDetalhesCard = () => {
    const [loadingInfor, setLoadinInfor] = useState(false);
    const [itens, setItens] = useState<any[]>([]);
    const [filtroTexto, setFiltroTexto] = useState(""); // 1. Estado para o texto do filtro

    const { filial } = useParams();

    const carregarDadosLogistico = async () => {
        setLoadinInfor(true);
        try {
            const resposta = await api.listaGerais(filial);
            if (resposta?.recebimentpFilias.content) {
                setItens(resposta.recebimentpFilias.content);
            }
        } catch (error) {
            notify("Erro ao carregar dados logísticos", "error");
        } finally {
            setLoadinInfor(false);
        }
    };

    useEffect(() => {
        carregarDadosLogistico();
    }, [filial]);

    // 2. Lógica de filtragem através da lista
    const itensFiltrados = useMemo(() => {
        return itens.filter((item) => {
            const termoBusca = filtroTexto.toLowerCase();
            return (
                item.nomeFilial?.toLowerCase().includes(termoBusca) ||
                item.filial?.toString().includes(termoBusca) ||
                item.tipoBloco?.toString().includes(termoBusca)
            );
        });
    }, [itens, filtroTexto]);

    const handleClick = async () => {
        await carregarDadosLogistico();
    };

    return (
        <Template.Main>
            <Template.HeaderCard>
                <Template.TitleSection>
                    <small>Controle de Recebimento</small>
                    <h2>Painel Logístico - {filial || "Geral"}</h2>
                </Template.TitleSection>

                <Template.FilterArea>
                    <Template.SelectGroup>
                        <Template.Label>Filtrar na Lista:</Template.Label>
                        <input 
                            type="text" 
                            placeholder="Buscar filial ou código..."
                            value={filtroTexto}
                            onChange={(e) => setFiltroTexto(e.target.value)} // 3. Atualiza o filtro ao digitar
                        />
                    </Template.SelectGroup>
                    <Template.RefreshButton 
                        loading={loadingInfor} 
                        disabled={loadingInfor} 
                        onClick={handleClick}
                    >
                        <MdRefresh />
                    </Template.RefreshButton>
                </Template.FilterArea>
            </Template.HeaderCard>

            {loadingInfor && <Loading />}
            
            {!loadingInfor && itensFiltrados.length === 0 && <SemItens />}

            {/* 4. Mapeia a lista filtrada em vez da lista original */}
            {!loadingInfor && itensFiltrados.map((c, index) => (
               <CardItensComponents 
                    c={c} 
                    key={c.id || index} 
                    handleFunction={carregarDadosLogistico}
                />
            ))}
        </Template.Main >
    );
};

export default PainelDetalhesCard;
import { useEffect, useState, type ChangeEvent } from "react";
import Template from "./UsuariosCss";
import Api from "../../service/apiUsuario";
import AddIcon from "@mui/icons-material/Add";
import Avatar from '@mui/material/Avatar';
import { IconButton, Box, Tooltip, Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { useNavigate } from "react-router-dom";
import { notify } from "../../../portaria/service/snackbarService";
import api from "../../service/apiUsuario";
import { PopupUpdatePerfilComponent } from "../../../../components/updatePerfilComponent/popup/updatePerfil";
import { Paginator } from "../../../../components/paginator/paginator";
import { LoadingSecundary } from "../../../../components/LoadingSecundary/LoadingSecundary";
import { subjet } from "../../../../jwt/jwtservice";

export const UsuarioListaComponets = () => {
  const [lista, setLista] = useState<any[]>([]);
  const [id, setId] = useState('');
  const [busca, setBusca] = useState("");
  const [totaPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [order, setOrder] = useState<{ field: string, direction: 'asc' | 'desc' }>({ field: 'nome', direction: 'asc' });
  const [updateAtivo, setUpdateModal] = useState(false);

  const navigate = useNavigate();
  const user = subjet();
  const permission = user?.permissoes;

  const onSubmit = async (valuePage?: any) => {
    setLoading(true);
    const resposta = await Api.listAusuario(busca.trim(), valuePage);
    if (resposta) {
      setTimeout(() => {
        setLoading(false);
        setLista(resposta.content);
        setTotalPage(resposta?.totalPages);
      }, 800);
    }
  };

  const handleSort = (field: string) => {
    const isAsc = order.field === field && order.direction === 'asc';
    const direction = isAsc ? 'desc' : 'asc';
    setOrder({ field, direction });

    const sortedData = [...lista].sort((a, b) => {
      let valA = a[field]?.nome || a[field];
      let valB = b[field]?.nome || b[field];
      
      if (typeof valA === 'string') valA = valA.toLowerCase();
      if (typeof valB === 'string') valB = valB.toLowerCase();

      if (valA < valB) return direction === 'asc' ? -1 : 1;
      if (valA > valB) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    setLista(sortedData);
  };

  const handleNextPage = (_: ChangeEvent<unknown>, value: number) => {
    onSubmit(value - 1);
  };

  useEffect(() => {
    if (busca.trim() === "") onSubmit();
  }, [busca]);

  const hendleUpdate = (item: any) => {
    setId(item.id);
    setUpdateModal(true);
  };

  const hendleBuscaApi = async (data?: any, ativo?: any, usuarioId?: any) => {
    const idFinal = id || usuarioId;
    const response = await api.AdicionarPefil(idFinal, data?.idPerfil, ativo);
    if (response) {
      setUpdateModal(false);
      notify(response.msg, "success");
      onSubmit();
    }
  };

  const handleConvetData = (data: any) => {
    const d = new Date(data);
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()} às ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const renderSortIcon = (field: string) => {
    if (order.field !== field) return null;
    return order.direction === 'asc' ? 
      <ArrowUpwardIcon sx={{ fontSize: 14, ml: 0.5, verticalAlign: 'middle' }} /> : 
      <ArrowDownwardIcon sx={{ fontSize: 14, ml: 0.5, verticalAlign: 'middle' }} />;
  };

  return (
    <Template.container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Template.titulo>Gestão de Usuários</Template.titulo>
      </Box>

      <Template.FormSub>
        <Template.CamposInput>
          <Template.InputWrapper>
            <SearchIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
            <input
              placeholder="Buscar por nome ou e-mail..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
            />
          </Template.InputWrapper>

          <Tooltip title="Novo Usuário">
            <IconButton
              onClick={() => navigate("/required/cadastro/usuario")}
              sx={{ bgcolor: "#26a69a", color: "#fff", "&:hover": { bgcolor: "#1f8c81" }, borderRadius: '8px', width: 40, height: 40 }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>

          <Box sx={{ flexGrow: 1 }} />
          <Paginator totalPage={totaPage} handleNextPage={handleNextPage} />
        </Template.CamposInput>

        <Template.TableContainer>
          <Template.Table>
            <thead>
              <tr>
                <th onClick={() => handleSort('nome')}>Membro {renderSortIcon('nome')}</th>
                <th>E-mail</th>
                <th onClick={() => handleSort('ocupacaoOperacional')}>Função {renderSortIcon('ocupacaoOperacional')}</th>
                <th onClick={() => handleSort('perfil')}>Perfil {renderSortIcon('perfil')}</th>
                <th>Device</th>
                <th>Último Acesso</th>
                <th onClick={() => handleSort('ativo')}>Status {renderSortIcon('ativo')}</th>
                {permission?.includes("ADICIONAR_ACESSO") && <th style={{ textAlign: 'right' }}>Ações</th>}
              </tr>
            </thead>
            <tbody>
              {lista.length === 0 && !loading ? (
                <tr><td colSpan={8} style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>Nenhum usuário encontrado.</td></tr>
              ) : (
                lista.map((item) => (
                  <Template.Row 
                    key={item.id} 
                    isSelected={selectedRow === item.id} 
                    onClick={() => setSelectedRow(item.id)}
                  >
                    <td>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 32, height: 32, border: '1px solid #e2e8f0' }} src={item?.avatar} />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{item.nome}</Typography>
                      </Box>
                    </td>
                    <td>{item.email}</td>
                    <td>
                      <Typography variant="caption" sx={{ display: 'block', fontWeight: 700 }}>{item.ocupacaoOperacional}</Typography>
                      <Typography variant="caption" color="textSecondary">{item.filial}</Typography>
                    </td>
                    <td>
                      <Box sx={{ px: 1, py: 0.2, bgcolor: selectedRow === item.id ? '#fff' : '#f1f5f9', borderRadius: '4px', display: 'inline-block' }}>
                        <Typography variant="caption" sx={{ fontWeight: 800 }}>{item?.perfil?.nome || 'N/A'}</Typography>
                      </Box>
                    </td>
                    <td><Template.device>{item?.sessionDevice || "desktop"}</Template.device></td>
                    <td style={{ fontSize: '12px' }}>{item?.sessionLastLogin ? handleConvetData(item?.sessionLastLogin) : "---"}</td>
                    <td>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Template.ativo ativo={item?.ativo} />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>{item?.ativo ? "Ativo" : "Inativo"}</Typography>
                      </Box>
                    </td>
                    {permission?.includes("ADICIONAR_ACESSO") && (
                      <td>
                        <Template.trBTN>
                          <IconButton size="small" onClick={(e) => { e.stopPropagation(); hendleUpdate(item); }}>
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={(e) => { e.stopPropagation(); item.ativo ? hendleBuscaApi(null, false, item.id) : hendleBuscaApi(null, true, item.id); }}
                            sx={{ color: item.ativo ? "#ef4444" : "#26a69a" }}
                          >
                            {item.ativo ? <LockOpenIcon fontSize="small" /> : <LockIcon fontSize="small" />}
                          </IconButton>
                        </Template.trBTN>
                      </td>
                    )}
                  </Template.Row>
                ))
              )}
            </tbody>
          </Template.Table>
        </Template.TableContainer>
      </Template.FormSub>

      {updateAtivo && (
        <PopupUpdatePerfilComponent 
          ID={id} 
          handleConfirm={(w) => hendleBuscaApi(w, null, null)} 
          handleCancel={() => setUpdateModal(false)} 
          message={""} 
          ativoBtn={false} 
        />
      )}
      {loading && <LoadingSecundary />}
    </Template.container>
  );
};
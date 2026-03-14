import Template from "./resetRadomCss"
import Api from "../../service/apiUsuario"
import { notify } from "../../../portaria/service/snackbarService";
import { useState } from "react";
import { AlertComponent } from "../../../../components/popup/alertPassWd";
import { Button } from "@mui/material"; // Ou use o seu BtnLogin do outro arquivo
import KeyIcon from '@mui/icons-material/Key';

export const ResetComponets = () => {
  const [busca, setBusca] = useState("")
  const [pwd, setPasswd] = useState("")
  const [ativo, setAtivo] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if (!busca) return notify("Informe o e-mail primeiro","error");
    
    setLoading(true);
    try {
      const resposta = await Api.reset(busca);
      if (resposta) {
        notify("Senha resetada com sucesso!", "success");
        setPasswd(resposta.psw)
        setAtivo(true)
      }
    } catch (err) {
      notify("Erro ao resetar senha", "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Template.container>
        <Template.titulo>Reset de Senha</Template.titulo>
        
        <Template.FormSub>
          <Template.CamposInput>
            <Template.label>E-mail do Usuário*</Template.label>
            <Template.Campos
              autoComplete="off"
              placeholder="Digite o e-mail para localizar"
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSubmit()
                }
              }}
            />
          </Template.CamposInput>

          <Button
            variant="contained"
            onClick={onSubmit}
            disabled={loading}
            startIcon={<KeyIcon />}
            sx={{
              bgcolor: '#26a69a',
              height: '48px',
              borderRadius: '10px',
              fontWeight: 'bold',
              textTransform: 'none',
              '&:hover': { bgcolor: '#2bbbad' }
            }}
          >
            {loading ? "Processando..." : "Gerar Nova Senha"}
          </Button>

          <Template.TableContainer />
          
          {ativo && (
            <AlertComponent 
              handleCancel={() => setAtivo(false)} 
              message={pwd} 
              ativoBtn={false} 
            />
          )}
        </Template.FormSub>
      </Template.container>
    </>
  )
}
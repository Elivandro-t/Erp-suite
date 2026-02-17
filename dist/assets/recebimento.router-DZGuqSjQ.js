import{j as e,r as g,u as z,F as O,q as H,s as U,k as F,I as Q,b as E,H as Y,J as Z,N as se,M as de,O as le,w as ce,C as pe}from"./mui-_wqMIBiI.js";import{a as I,d as a,m as R,j as xe,b as N,n as D,S as fe,u as ee,o as oe,g as V,l as ue,O as me,p as ae,R as ge,k as P,N as he}from"./index-DDiw_5kW.js";import{L as be,D as je,B as ve}from"./SpeedDial-CdlBdtfV.js";import{a as we,b as J,c as ye,d as Ce}from"./BotaoVoltar-CtOoKzJN.js";import ze from"./NotFund-DKzA1gWG.js";import{H as ke}from"./HeaderSecundario-BQepcxUR.js";import{H as De}from"./header.component-BzoECtl3.js";import"./react-OvXVS5lI.js";const L="http://localhost:8084",Pe=async(o,t,i)=>{const s=new URLSearchParams;return i!=null&&s.append("filiais",i),t!=null&&s.append("filial",t),(await I.get(L+o,{params:Object.fromEntries(s)})).data},Te=async(o,t)=>{const i=new URLSearchParams;return t!=null&&i.append("filial",t),(await I.get(L+o,{params:Object.fromEntries(i)})).data},Se=async(o,t)=>{const i=await I.post(L+o,t);return i.data?i.data:null},qe=async(o,t)=>{const i=await I.put(L+o,t);return i.data?i.data:null},Be=async(o,t,i)=>{const s=new URLSearchParams;t!=null&&i!=null&&(s.append("registroId",t),s.append("filial",i));const m=await I.delete(L+o,{params:Object.fromEntries(s)});return m.data?m.data:null},A={lista:async(o,t)=>await Pe("/communit/v1/recebimento/lista",o,t),listaGerais:async o=>await Te("/communit/v1/recebimento/lista/geral",o),cadastro:async o=>await Se("/communit/v1/recebimento/registro",o),update:async o=>await qe("/communit/v1/recebimento/update",o),delete:async(o,t)=>await Be("/communit/v1/recebimento/delete",o,t)},Fe=R`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,W={Main:a.div`
    display: flex;
    flex-direction: column;
    padding: 5px 0; /* Reduzi o padding lateral no mobile */
    min-height: 100vh;
    position: relative;

    @media (min-width: 768px) {
      padding: 10px 5px;
    }
  `,HeaderCard:a.div`
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column; /* Mobile first: coluna */
    gap: 15px;
    margin-bottom: 20px;
    /* border-left: 5px solid #4c1d95; */

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
    }
  `,TitleSection:a.div`
    small {
      color: #7c3aed;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
    }
    h2 {
      margin: 4px 0 0 0;
      color: #1e293b;
      font-size: 1.2rem; /* Menor no mobile */
    }
    @media (min-width: 768px) {
      h2 { font-size: 1.4rem; }
    }
  `,FilterArea:a.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:a.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:a.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:o})=>o?`${Fe} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:a.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:a.select`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    width: 100%; /* Full width no mobile */
    font-size: 14px;
    outline: none;

    @media (min-width: 768px) {
      min-width: 250px;
      width: auto;
    }
  `,Container:a.div`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
  `,Card:a.div`
    background: #fff;
    border-radius: 12px;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 1px 4px -1px rgba(0,0,0,0.4);
    position: relative;

    @media (min-width: 768px) {
      padding:20px 15px;
      margin-bottom: 20px;
    }
  `,info_date:a.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 10px;
   @media (max-width: 768px) {
      position: absolute;
      right: 0;
      padding:0 10px;
    }
  `,CardHeaderPrincipal:a.div`
    display: flex;
    flex-direction: column; /* Coluna no mobile */
    gap: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;
    .titulo{
    font-size: 10px;
    padding: 10px;
    color:#3a3737;
  }

    .tag {
      background: #f5f3ff;
      color: #5b21b6;
      padding: 3px 8px;
      border-radius: 20px;
      font-size: 9px;
      font-weight: 800;
      display: inline-block;
    }
    h3 { margin: 5px 0 0 0; color: #334155; font-size: 1rem; }
    .info-date { color: #94a3b8; font-size: 12px; }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      h3 { font-size: 1.1rem; }
    }
  `,TableWrapper:a.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  `,Table:a.table`
    width: 100%;
    border-collapse: collapse;
    /* min-width: 500px; Garante que os dados não encavalem */
    
    th {
      background: #f8fafc;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      padding: 10px 2px;
      text-align: left;
       @media (max-width: 768px) {
                 padding:5px;
                 word-break: break-all;
                 text-transform: capitalize;
    }
    }

    td {
      padding: 3px 10px;
      border-bottom: 1px solid #f1f5f9;
      font-size: 13px;
      color: #475569;
       @media (max-width: 768px) {
                 padding: 0px 4px;
                 font-size: 12px;

    }
    }

    .bold { font-weight: 600; color: #1e293b; }
    .status-ativo { color: #16a34a; font-weight: 700; }
    .status-manutencao { color: #ca8a04; font-weight: 700; }
    .status-total { color: #5964fc; font-weight: 700; }
     /* #ca8a04 */
    @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Thead:a.thead``,Tbody:a.tbody`
  width: 100%;
   @media (max-width: 768px) {
                 padding: 12px 5px;

    }
  `,Tr:a.tr`
    &:hover { background: #fdfdff; }
  `,ViewButton:a.button`
    background: #fff;
    border: 1px solid #e2e8f0;
    padding: 8px 5px;
    border-radius: 6px;
    color: #4f46e5;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    
    @media (min-width: 768px) {
      padding: 6px 12px;
    }
  `},_={container:a.div`
    display: flex;
    flex-direction: column; 
    height: 100vh;
    position: relative; /* Garante que o botão se posicione em relação a este container */
    `,Main:a.section`
    padding: 0 5px;
    `,ButtonContainer:a.div`
     position: fixed; /* Troquei para fixed para ele não sumir ao dar scroll */
        bottom: 30px;
        right: 30px;
        z-index: 999;
    `,StyledActionButton:a.button`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); /* Gradiente moderno */
        color: white;
        border: none;
        cursor: pointer;
        font-size: 30px;
        box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.1) rotate(90deg);
            box-shadow: 0 6px 20px rgba(37, 117, 252, 0.6);
            filter: brightness(1.1);
        }

        &:active {
            transform: scale(0.9); /* Efeito de clique */
        }
    `},Ie=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #555;
  height: 60vh;
  font-size: 16px;
  gap: 10px;
  opacity: 0.8;
  text-align: center; /* Garante centralização do texto em telas menores */
`,Re=a.div`
  font-size: 60px;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
`,te=()=>e.jsxs(Ie,{children:[e.jsx(Re,{children:"📂"}),"Nenhum registro diário encontrado"]}),Ne=R`
from{transform:rotate(0deg);}
to{transform:rotate(360deg);}

`,Le={Container:a.div`
    display: flex;
    width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #555;
      height: 60vh;
      font-size: 16px;
      opacity: 0.8;
  color: #5B7FFF; /* O azul da sua marca */

  svg {
    animation: ${Ne} 1s linear infinite;
  }

  span {
    margin-top: 12px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748b;
  }
`},K=()=>e.jsx(Le.Container,{children:e.jsx(be,{})}),C={Container:a.div`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    
    @media (min-width: 768px) {
      max-width: 800px;
      margin: 0 auto;
    }
  `,Card:a.div`
    background: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    margin-bottom: 12px;
  `,CardHeaderPrincipal:a.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 8px;
    margin-bottom: 10px;

    .tag {
      background: #f1f5f9;
      color: #475569;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      margin-right: 4px;
    }

    .titulo {
      margin: 5px 0;
      font-size: 14px;
      color: #1e293b;
    }

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `,info_date:a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #94a3b8;
  `,TableWrapper:a.div`
    width: 100%;
    overflow-x: auto;
    /* Remove scrollbar visibility mas mantém funcionalidade */
    &::-webkit-scrollbar { display: none; } 
  `,Table:a.table`
    width: 100%;
    border-collapse: collapse;
    table-layout: auto; // Permite que a tabela se ajuste ao conteúdo

    th {
      font-size: 9px;
      text-transform: uppercase;
      color: #64748b;
      padding: 0px 2px;
      text-align: center;
      border-bottom: 2px solid #f1f5f9;
      white-space: nowrap; // Evita quebra de linha no título
    }

    td {
      padding: 1px 2px;
      font-size: 12px;
      text-align: center;
      border-bottom: 1px solid #f8fafc;
    }

    .bold { 
      text-align: left; 
      font-weight: 600; 
      color: #334155;
      min-width: 80px;
    }

    /* Cores solicitadas para os valores */
    .val-portaria { color: #0891b2; font-weight: 600; }
    .val-porto { color: #7c3aed; font-weight: 600; }
    .val-total { color: #16a34a; font-weight: 700; background: #f0fdf4; border-radius: 4px; }
    .val-pendente { color: #dc2626; font-weight: 600; }

    .footer-row {
      background: #f8fafc;
      td {
        border-top: 2px solid #e2e8f0;
        font-weight: 800;
        padding: 10px 2px;
      }
      .total-geral {
        color: #000;
        background: #dae6f1;
      }
    }

    @media (min-width: 768px) {
      th { font-size: 11px; padding: 5px; }
      td { font-size: 14px; padding: 5px; }
    }
  `,Thead:a.thead``,Tbody:a.tbody``,Tr:a.tr``},X={container:a.div`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    height: 100vh;
    left: 0;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color:rgba(0,0,0.2);
    
    `,modal:a.div`
    border-radius: 12px;
    padding: 10px; /* Compacto no mobile */
    margin-bottom: 15px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    position: relative;

    @media (min-width: 768px) {
      padding:0 24px;
      margin-bottom: 20px;
    }
    `},Ae=({children:o,handleInative:t})=>{const i=s=>{s.stopPropagation()};return g.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]),e.jsx(X.container,{onClick:t,children:e.jsx(X.modal,{onClick:s=>i(s),children:o})})},B={container:a.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding:  20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:a.div`
    background-color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
  `,container_int:a.div`
    width: 100%;
    margin-top: 24px;
  `,heander:a.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns:1.4fr 1fr 1fr 1fr 30px; 
    gap: 15px;
    background: #1e40af; /* Azul Royal */
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 600px) {
        display: none; /* Esconde cabeçalho no mobile para usar labels individuais */
    }
  `,form:a.section`
    display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr 30px;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #f1f5f9;
     border-radius: 8px;
    transition: all 0.2s;
    &:hover {
        border-color: #cbd5e1;
        background: #fcfcfc;
    }

    
    /* Estilo para o botão de adicionar (+) dentro da linha */
    button {
      height:30px;
      width: 30px;
      border-radius: 8px;
      padding: 5px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #cfd0d3;
      }
    }
    @media screen and (max-width: 760px) {
            gap: 5px;
            padding: 5px;

    }

  `,selectCampos:a.select`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:focus {
        border-color: #3b82f6;
    }
  `,btnAdd:a.button`
    margin-top: 24px;
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: #16a34a; /* Verde Sucesso */
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: #15803d;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
  `},G=[{id:1,descricao:"Secos"},{id:2,descricao:"Resfriados"},{id:3,descricao:"Congelados"},{id:4,descricao:"Hortifruti"}],Me=({itemMP:o,registroId:t,onClickhTogle:i})=>{const{handleSubmit:m,register:h}=xe({defaultValues:{itens:o.map(x=>({id:Number(x.id),qtdPortoDescarregado:Number(x?.qtdPortoDescarregado),qtdDescargasPendentes:Number(x?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(x?.qtdPortariaDescarregada)}))}}),[f,r]=g.useState([]),j=N(),d=async x=>{if(x.registroId=t,x.usuarioId=j?.id,x.itens=x.itens.map(n=>({id:Number(n?.id),qtdPortoDescarregado:Number(n?.qtdPortoDescarregado),qtdDescargasPendentes:Number(n?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(n?.qtdPortariaDescarregada)})),f.some(n=>!n.TipoBloco||n.qtdPortoDescarregado===""||n.qtdDescargasPendentes===""))return D("Preencha todos os campos corretamente","error");x.save=f.map(n=>({TipoBloco:n?.TipoBloco,qtdPortoDescarregado:Number(n?.qtdPortoDescarregado),qtdDescargasPendentes:Number(n?.qtdDescargasPendentes),qtdPortariaDescarregada:Number(n?.qtdPortariaDescarregada)})),console.log(JSON.stringify(x)),x!=null&&await A.update(x)&&(D("Salvo com sucesso","success"),i())},l=(x,b,n)=>{const S=[...f];S[x]={...S[x],[b]:n},r(S)},v=()=>{y().length!==0&&r(b=>[...b,{TipoBloco:"",qtdDescargasPendentes:0,qtdPortoDescarregado:0,qtdPortariaDescarregada:0}])};function y(x){const b=o.map(n=>n.TipoBloco);return G.filter(n=>b.includes(n)?!1:!f.some((re,ne)=>ne!==x&&re.TipoBloco===n.descricao))}const q=x=>{f.length>0&&r(f.filter((b,n)=>n!==x))},c=G.length,u=o.length,p=f.length,w=u+p;return e.jsxs(B.Card,{children:[e.jsx("h2",{children:"Registro de Movimentação"}),e.jsx(B.container_int,{children:o.map((x,b)=>e.jsxs(B.form,{children:[e.jsx(z,{disabled:!0,label:"Tipo de Bloco",variant:"filled",size:"small",fullWidth:!0,value:x?.TipoBloco}),e.jsx(z,{label:"Qtd. Porto",type:"number",size:"small",fullWidth:!0,...h(`itens.${b}.qtdPortoDescarregado`)}),e.jsx(z,{label:"Qtd. portaria descarregado",type:"number",size:"small",fullWidth:!0,...h(`itens.${b}.qtdPortariaDescarregada`)}),e.jsx(z,{label:"Qtd. Pendentes",type:"number",size:"small",fullWidth:!0,...h(`itens.${b}.qtdDescargasPendentes`)}),e.jsx("div",{style:{width:"40px"}})," ",e.jsx("input",{type:"hidden",...h(`itens.${b}.id`)})]},x.id))}),e.jsxs(B.container_int,{children:[f.map((x,b)=>e.jsxs(B.form,{children:[e.jsxs(O,{fullWidth:!0,size:"small",children:[e.jsx(H,{children:"Selecionar Bloco"}),e.jsx(U,{value:x.TipoBloco,label:"Selecionar Bloco",onChange:n=>l(b,"TipoBloco",n.target.value),children:y(b).map((n,S)=>e.jsx(F,{value:n.descricao,children:n.descricao},S))})]}),e.jsx(z,{label:"Qtd. Porto",type:"number",size:"small",fullWidth:!0,value:x.qtdPortoDescarregado,onChange:n=>l(b,"qtdPortoDescarregado",n.target.value)}),e.jsx(z,{label:"Qtd. Descarregado",type:"number",size:"small",fullWidth:!0,value:x.qtdPortariaDescarregada,onChange:n=>l(b,"qtdPortariaDescarregada",n.target.value)}),e.jsx(z,{label:"Qtd. Pendente",type:"number",size:"small",fullWidth:!0,value:x.qtdDescargasPendentes,onChange:n=>l(b,"qtdDescargasPendentes",n.target.value)}),e.jsx(Q,{color:"error",onClick:()=>q(b),sx:{marginTop:"4px"},children:e.jsx(je,{size:20})})]},b)),w<c&&e.jsx(E,{startIcon:e.jsx(Y,{}),onClick:v,variant:"text",sx:{mt:1,mb:3,color:"#16a34a","&:hover":{bgcolor:"#f0fdf4"},fontWeight:600},children:"Adicionar outro material"})]}),e.jsx(E,{variant:"contained",fullWidth:!0,onClick:m(d),size:"large",endIcon:e.jsx(Z,{}),disabled:!1,sx:{bgcolor:"#2563eb",py:1.5,borderRadius:"10px",boxShadow:"0 4px 14px rgba(37, 99, 235, 0.3)","&:hover":{bgcolor:"#1d4ed8",boxShadow:"none"},textTransform:"none",fontSize:"16px",fontWeight:600},children:"Salvar Alterações"})]})};function $e({hendleClick:o,hendleClickDelete:t}){const[i,s]=g.useState(null),m=!!i,h=d=>{s(d.currentTarget)},f=()=>{s(null)},r=()=>{o(),s(null)},j=()=>{t(),s(null)};return e.jsxs("div",{children:[e.jsx(Q,{id:"demo-positioned-button","aria-controls":m?"demo-positioned-menu":void 0,"aria-haspopup":"true",onClick:h,size:"small",children:e.jsx(se,{})}),e.jsxs(de,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:i,open:m,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e.jsx(F,{onClick:r,children:"Editar"}),e.jsx(F,{onClick:j,children:"Deletar"})]})]})}const ie=({c:o,handleFunction:t})=>{const s=N()?.permissoes;function m(d){const l=new Date(d),v=l.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),y=l.toLocaleDateString("pt-BR");return`${v} ${y}`}const[h,f]=g.useState(!1),r=()=>{f(!h)},j=async()=>{await A.delete(o.id,o.filial)&&(t(),D("Deletado","success"))};return e.jsx(C.Container,{children:e.jsxs(C.Card,{children:[e.jsxs(C.CardHeaderPrincipal,{children:[e.jsxs("div",{className:"info-title",children:[e.jsx("span",{className:"tag",children:"Resumo Portaria"}),e.jsxs("span",{className:"tag",children:["User: ",o?.nomeUsuario?.split(" ")[0]]}),e.jsxs("h4",{className:"titulo",children:[o?.filial," - ",o?.nomeFilial]})]}),e.jsxs(C.info_date,{children:[e.jsxs("span",{children:["📅 ",m(o?.dataAt)]}),s?.includes("DELETE_LOGISTICO")&&e.jsx($e,{hendleClick:r,hendleClickDelete:j})]})]}),e.jsx(C.TableWrapper,{children:e.jsxs(C.Table,{children:[e.jsx(C.Thead,{children:e.jsxs("tr",{children:[e.jsx("th",{style:{textAlign:"left"},children:"Tipo"}),e.jsx("th",{children:"Portaria"}),e.jsx("th",{children:"Porto"}),e.jsx("th",{children:"Total"}),e.jsx("th",{children:"Pendentes"})]})}),e.jsxs(C.Tbody,{children:[o.itens.map((d,l)=>e.jsxs(C.Tr,{children:[e.jsx("td",{className:"bold",children:d?.TipoBloco}),e.jsx("td",{className:"val-portaria",children:d?.qtdPortariaDescarregada??0}),e.jsx("td",{className:"val-porto",children:d?.qtdPortoDescarregado??0}),e.jsx("td",{className:"val-total",children:d?.qtdtTotalCargaConcluida}),e.jsx("td",{className:"val-pendente",children:d?.qtdDescargasPendentes})]},l)),e.jsxs(C.Tr,{className:"footer-row",children:[e.jsx("td",{className:"bold",children:"TOTAL"}),e.jsx("td",{className:"val-portaria",children:o?.resumoTotal?.portariaTotalConsolidada}),e.jsx("td",{className:"val-porto",children:o?.resumoTotal?.portoTotalConsolidado}),e.jsx("td",{className:"val-total total-geral",children:o?.resumoTotal?.volumeTotalConsolidado}),e.jsx("td",{className:"val-pendente",children:o?.resumoTotal?.pendentesTotalConsolidada})]})]})]})}),h&&e.jsx(Ae,{handleInative:r,children:e.jsx(Me,{onClickhTogle:t,registroId:o.id,itemMP:o.itens})})]})})},Ee=R`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`,M={FilterArea:a.div`
    display: flex;
    align-items: center;
    width: 100%; /* Ocupa tudo no mobile */    
    @media (min-width: 768px) {
      width: auto;
     
    }
  `,SelectGroup:a.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  `,RefreshButton:a.button`

  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    color: #2563eb;
    animation: ${({loading:o})=>o?`${Ee} 1s linear infinite`:"none"};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`,Label:a.label`
    font-size: 11px;
    font-weight: 600;
    color: #64748b;
  `,Select:a.select`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #fff;
    width: 100%; /* Full width no mobile */
    font-size: 14px;
    outline: none;

    @media (min-width: 768px) {
      min-width: 250px;
      width: auto;
    }
  `,Container:a.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  `},Ge={AddButton:a.button`
      display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: ${({cor:o})=>o?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"red"};
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px -1px rgba(109, 40, 217, 0.3);
    white-space: nowrap;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 12px -1px rgba(109, 40, 217, 0.4);
      filter: brightness(1.1);
    }

    &:active {
      transform: translateY(0);
    }

    svg {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      width: 100%;
      order: -1; /* No mobile, ele aparece no topo */
    }
  `},We=({onAddClick:o,IconeType:t,tituloBtn:i,def:s})=>{const m=h=>{switch(h){case"sucess":return e.jsx(we,{});case"receb":return e.jsx(fe,{})}};return e.jsxs(Ge.AddButton,{cor:s,onClick:o,children:[m(t),i]})};function Oe({listaFiliais:o,loadingRel:t,carregarDadosLogistico:i,handleClick:s}){const m=ee(),h=()=>{m("/recebimento/novo")};return e.jsx(M.FilterArea,{style:{gap:"15px",flexWrap:"wrap"},children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx(We,{tituloBtn:"Novo Card",onAddClick:h,IconeType:"sucess",def:!0}),e.jsx(M.SelectGroup,{children:e.jsxs(M.Select,{onChange:f=>i(f.target.value),children:[e.jsx("option",{value:"",children:"Selecione uma filial para filtrar..."}),o.map((f,r)=>e.jsxs("option",{value:f?.filial,children:[f?.filial," - ",f?.nome]},r))]})}),e.jsx(M.RefreshButton,{loading:t,disabled:t,onClick:s,title:"Atualizar dados",children:e.jsx(J,{})})]})})}const He=[{icon:e.jsx(Y,{}),name:"Adicionar",router:"/recebimento/novo"},{icon:e.jsx(le,{}),name:"Todas os itens",router:"/recebimento/listaFiliais"}],Ue=()=>{const[o,t]=g.useState([]),[i,s]=g.useState(!1),[m,h]=g.useState([]),f=location.pathname+location.search+location.hash,{filial:r}=oe(),j=N(),d=async c=>{h([]),s(!0);const u=o.flatMap(p=>p.filial);try{const p=await A.lista(c,u);p&&h(p)}catch{D("Erro ao carregar dados logísticos","error")}finally{s(!1)}},l=g.useCallback(async()=>{try{const c=await V.FiliaisUsuario(j?.id);c?.acess&&t(c.acess)}catch{D("Erro ao carregar filiais","error")}},[]);g.useEffect(()=>{sessionStorage.setItem("redirectAfterLogin",f),l()},[l]),g.useEffect(()=>{o.length>0&&d(r)},[o,r]);const[v,y]=g.useState(!1),q=async()=>{y(!0);try{d(),y(!1)}finally{y(!1)}};return e.jsxs(W.Main,{children:[e.jsxs(W.HeaderCard,{children:[e.jsxs(W.TitleSection,{children:[e.jsx("small",{children:"Portaria Recebimento"}),e.jsxs("h2",{children:["Painel Diario  ",r]})]}),e.jsx(Oe,{listaFiliais:o,loadingRel:v,carregarDadosLogistico:c=>d(c),handleClick:q})]}),i&&e.jsx(K,{}),!i&&m.length===0&&e.jsx(te,{}),m.map((c,u)=>e.jsx(ie,{c,handleFunction:d},u)),e.jsx(_.ButtonContainer,{children:e.jsx(ve,{actions:He})})]})},_e=()=>{const t=ue().pathname==="/recebimento/dashboard",[i,s]=g.useState(!1),m=()=>{s(!i)};return e.jsxs(_.container,{children:[t?e.jsx(De,{ativaBtnDrower:!1,subtitulo:"Recebimento",handleBtn:m}):e.jsx(ke,{titulo:"Recebimento de Mercadoria",ativo:!0}),e.jsx(_.Main,{children:e.jsx(me,{})})]})},$={container:a.div`
    background-color: #f8fafc; /* Fundo levemente cinza para destacar o card */
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    font-family: 'Inter', sans-serif;

    @media (max-width: 768px) {
      padding: 20px 5px;
    }
  `,Card:a.div`
    background-color: #fff;
    width: 100%;
    max-width: 900px;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    @media (max-width: 768px) {
      padding: 20px 10px;
    }
  `,container_int:a.div`
    width: 100%;
    margin-top: 24px;
  `,heander:a.div`
    display: grid;
    /* Alinhado com o grid do formulário */
    grid-template-columns:1.4fr 1fr 1fr 1fr 30px; 
    gap: 15px;
    background: #1e40af; /* Azul Royal */
    color: #fff;
    padding: 12px 16px;
    border-radius: 8px 8px 0 0;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    @media (max-width: 600px) {
        display: none; /* Esconde cabeçalho no mobile para usar labels individuais */
    }
  `,form:a.section`
    display: grid;
      grid-template-columns: 1.4fr 1fr 1fr 1fr 30px;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #f1f5f9;
     border-radius: 8px;
    transition: all 0.2s;
    &:hover {
        border-color: #cbd5e1;
        background: #fcfcfc;
    }

    
    /* Estilo para o botão de adicionar (+) dentro da linha */
    button {
      height:30px;
      width: 30px;
      border-radius: 8px;
      padding: 5px;
      border: none;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #cfd0d3;
      }
    }
    @media screen and (max-width: 760px) {
            gap: 5px;
            padding: 5px;

    }

  `,selectCampos:a.select`
    padding: 10px 12px;
    border-radius: 6px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    background-color: #fff;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:focus {
        border-color: #3b82f6;
    }
  `,btnAdd:a.button`
    margin-top: 24px;
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: #16a34a; /* Verde Sucesso */
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s;

    &:hover {
      background: #15803d;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(22, 163, 74, 0.2);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
        background: #94a3b8;
        cursor: not-allowed;
    }
  `},Qe=()=>{const o=N(),[t,i]=g.useState(""),[s,m]=g.useState([]),[h,f]=g.useState(!1),[r,j]=g.useState([{TipoBloco:"",qtdPortariaDescarregada:0,qtdPortoDescarregado:0,qtdDescargasPendentes:0,gmBlocoId:0}]);g.useEffect(()=>{(async()=>{const u=await V.FiliaisUsuario(o?.id);u?.acess&&m(u.acess)})()},[]);const d=()=>{r.length<4&&j([...r,{TipoBloco:"",qtdPortariaDescarregada:0,qtdPortoDescarregado:0,qtdDescargasPendentes:0,gmBlocoId:0}])},l=c=>{r.length>1&&j(r.filter((u,p)=>p!==c))},v=(c,u,p)=>{const w=[...r];w[c]={...w[c],[u]:p},j(w)},y=async()=>{if(console.log(JSON.stringify(r)),!t)return D("Selecione uma filial","error");if(r.some(u=>!u.TipoBloco||u.qtdDescargasPendentes===""||u.qtdPortoDescarregado===""))return D("Preencha todos os campos corretamente","error");f(!0);try{const u={nomeUsuario:o?.nome,filial:t?.filial,nomeFilial:t.nome,usuarioId:o?.id,itens:r};console.log(u);const p=await A.cadastro(u);p?.msg&&(D(p.msg,"success"),j([{TipoBloco:"",qtdDescargasPendentes:0,qtdPortoDescarregado:0,qtdPortariaDescarregada:0,gmBlocoId:0}]),i(""))}finally{f(!1)}},q=c=>{const u=r.filter((p,w)=>w!==c).map(p=>p.gmBlocoId);return G.filter(p=>!u.includes(p.id)||r[c].gmBlocoId===p.id)};return e.jsx($.container,{children:e.jsxs($.Card,{children:[e.jsx("h2",{style:{marginBottom:"20px",color:"#334155"},children:"Registro de Movimentação"}),e.jsxs(O,{fullWidth:!0,variant:"outlined",sx:{mb:3},children:[e.jsx(H,{children:"Selecione a Filial"}),e.jsx(U,{value:t,onChange:c=>i(c.target.value),label:"Selecione a Filial",children:s.map(c=>e.jsxs(F,{value:c,children:[c.filial," - ",c?.nome]},c.id))})]}),e.jsxs($.container_int,{children:[r.map((c,u)=>e.jsxs($.form,{children:[e.jsxs(O,{fullWidth:!0,size:"small",children:[e.jsx(H,{children:"Bloco"}),e.jsx(U,{value:c?.gmBlocoId,label:"Tipo.Logistico",onChange:p=>{const w=Number(p.target.value),x=G.find(n=>n.id===w),b=[...r];b[u]={...b[u],gmBlocoId:w,TipoBloco:x?.descricao||""},j(b)},children:q(u).map((p,w)=>e.jsx(F,{value:p.id,children:p?.descricao},w))})]}),e.jsx(z,{label:"Qtd.pendentes",type:"number",size:"small",value:c.qtdDescargasPendentes,onChange:p=>v(u,"qtdDescargasPendentes",p.target.value)}),e.jsx(z,{label:"Qtd.Porto",type:"number",size:"small",value:c.qtdPortoDescarregado,onChange:p=>v(u,"qtdPortoDescarregado",p.target.value)}),e.jsx(z,{label:"Qtd.descarregado",type:"number",size:"small",value:c.qtdPortariaDescarregada,onChange:p=>v(u,"qtdPortariaDescarregada",p.target.value)}),e.jsx(Q,{color:"error",onClick:()=>l(u),disabled:r.length===1,children:e.jsx(ce,{})})]},u)),r.length<4&&e.jsx(E,{startIcon:e.jsx(Y,{}),onClick:d,sx:{mt:1,mb:3},children:"Adicionar outro Bloco"})]}),e.jsx(E,{variant:"contained",fullWidth:!0,size:"large",onClick:y,endIcon:h?e.jsx(pe,{size:20,color:"inherit"}):e.jsx(Z,{}),disabled:h,sx:{bgcolor:"#5B7FFF","&:hover":{bgcolor:"#4a6cf0"}},children:h?"Enviando...":"Finalizar Registro"})]})})},Ye=R`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,k={Main:a.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: #fcfcfd; /* Fundo quase branco, muito limpo */
    min-height: 100vh;
  `,Header:a.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `,TitleSection:a.div`
    h2 {
      color: #101828;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
    p {
      color: #667085;
      font-size: 14px;
      margin-top: 4px;
    }
  `,FilterGroup:a.div`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  `,Select:a.select`
    border: none;
    font-size: 14px;
    color: #344054;
    outline: none;
    min-width: 200px;
    background: transparent;
  `,Grid:a.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 1000px; /* Centraliza e limita a largura para não esticar demais */
    margin: 0 auto;
    width: 100%;
  `,Card:a.div`
    background: #ffffff;
    border: 1px solid #eaecf0; /* Borda bem fina e clara */
    border-radius: 12px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #f9fafb;
      border-color: #d0d5dd;
      transform: translateY(-2px);
      box-shadow: 0px 4px 6px -2px rgba(16, 24, 40, 0.03);
    }
  `,CardInfo:a.div`
    display: flex;
    align-items: center;
    gap: 16px;

    .icon-wrapper {
      width: 44px;
      height: 44px;
      background: #f4f3ff;
      color: #5925dc;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      
      .tag {
        font-size: 12px;
        font-weight: 600;
        color: #6941c0;
        margin-bottom: 2px;
      }
      
      h3 {
        margin: 0;
        font-size: 16px;
        color: #101828;
        font-weight: 500;
      }
    }
  `,RefreshButton:a.button`
    background: none;
    border: none;
    color: #667085;
    cursor: pointer;
    display: flex;
    padding: 4px;
    transition: color 0.2s;

    &:hover { color: #5925dc; }
    svg {
      ${({loading:o})=>o&&ae`animation: ${Ye} 1s linear infinite;`}
    }
  `},Ve=()=>{const[o,t]=g.useState(!1),[i,s]=g.useState([]),[m,h]=g.useState([]),f=ee(),r=N(),j=g.useCallback(async()=>{try{t(!0);const d=await V.FiliaisUsuario(r?.id);d?.acess&&(s(d.acess),h(d.acess))}finally{t(!1)}},[r?.id]);return g.useEffect(()=>{j()},[j]),e.jsxs(k.Main,{children:[e.jsxs(k.Header,{children:[e.jsxs(k.TitleSection,{children:[e.jsx("h2",{children:"Painel Logístico"}),e.jsx("p",{children:"Unidades disponíveis para recebimento"})]}),e.jsxs(k.FilterGroup,{children:[e.jsxs(k.Select,{onChange:d=>{const l=d.target.value;h(l?i.filter(v=>String(v.filial)===l):i)},children:[e.jsx("option",{value:"",children:"Filtrar unidade..."}),i.map((d,l)=>e.jsx("option",{value:d?.filial,children:d?.nome},l))]}),e.jsx(k.RefreshButton,{loading:o,onClick:j,children:e.jsx(J,{size:20})})]})]}),o?e.jsx(K,{}):e.jsx(k.Grid,{children:m.map((d,l)=>e.jsxs(k.Card,{onClick:()=>f(`/recebimento/detalhes-filial/${d?.filial}`),children:[e.jsxs(k.CardInfo,{children:[e.jsx("div",{className:"icon-wrapper",children:e.jsx(ye,{size:24})}),e.jsxs("div",{className:"text-content",children:[e.jsxs("span",{className:"tag",children:["RESUMO CD - ",d?.filial]}),e.jsx("h3",{children:d?.nomeFilial})]})]}),e.jsx(Ce,{size:24,color:"#D0D5DD"})]},l))})]})},Je=R`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,T={Main:a.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    background-color: #f1f5f9; /* Um cinza bem claro para destacar os cards brancos */
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;

    @media (min-width: 768px) {
      padding: 20px 40px;
    }
  `,HeaderCard:a.div`
    background: #fff;
    padding:5px 15px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column; /* Mobile: um embaixo do outro */
    gap: 15px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      flex-direction: row; /* Desktop: lado a lado */
      justify-content: space-between;
      align-items: center;
      padding: 10px 30px;
    }
  `,TitleSection:a.div`
    small {
      color: #7c3aed; /* Roxo vibrante */
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 1px;
      display: block;
    }
    h2 {
      margin: 4px 0 0 0;
      color: #1e293b;
      font-size: 1.2rem;
    }
  `,FilterArea:a.div`
    display: flex;
    align-items: flex-end; /* Alinha o botão de refresh com o final do input */
    gap: 10px;
    width: 100%;
    
    @media (min-width: 768px) {
      width: auto;
    }
  `,SelectGroup:a.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;

    input {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
      font-size: 14px;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      background-color: #ffffff;
      color: #334155;

      &:focus {
        border-color: #7c3aed;
        box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.1);
      }
    }

    @media (min-width: 768px) {
      min-width: 200px;
    }
  `,Label:a.label`
    font-size: 11px;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
  `,RefreshButton:a.button`
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    padding: 0;

    &:hover:not(:disabled) {
      background: #f8fafc;
      border-color: #cbd5e1;
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }

    svg {
      font-size: 22px;
      color: #475569;
      /* Rotação suave com cubic-bezier para ficar "mais bonita" */
      ${o=>o.loading&&ae`
          animation: ${Je} 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          color: #7c3aed;
        `}
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      background: #f1f5f9;
    }
  `},Ke=()=>{const[o,t]=g.useState(!1),[i,s]=g.useState([]),[m,h]=g.useState(""),{filial:f}=oe(),r=async()=>{t(!0);try{const l=await A.listaGerais(f);l?.recebimentpFilias.content&&s(l.recebimentpFilias.content)}catch{D("Erro ao carregar dados logísticos","error")}finally{t(!1)}};g.useEffect(()=>{r()},[f]);const j=g.useMemo(()=>i.filter(l=>{const v=m.toLowerCase();return l.nomeFilial?.toLowerCase().includes(v)||l.filial?.toString().includes(v)||l.tipoBloco?.toString().includes(v)}),[i,m]),d=async()=>{await r()};return e.jsxs(T.Main,{children:[e.jsxs(T.HeaderCard,{children:[e.jsxs(T.TitleSection,{children:[e.jsx("small",{children:"Controle de Recebimento"}),e.jsxs("h2",{children:["Painel Logístico - ",f||"Geral"]})]}),e.jsxs(T.FilterArea,{children:[e.jsxs(T.SelectGroup,{children:[e.jsx(T.Label,{children:"Filtrar na Lista:"}),e.jsx("input",{type:"text",placeholder:"Buscar filial ou código...",value:m,onChange:l=>h(l.target.value)})]}),e.jsx(T.RefreshButton,{loading:o,disabled:o,onClick:d,children:e.jsx(J,{})})]})]}),o&&e.jsx(K,{}),!o&&j.length===0&&e.jsx(te,{}),!o&&j.map((l,v)=>e.jsx(ie,{c:l,handleFunction:r},l.id||v))]})},no=()=>e.jsxs(ge,{children:[e.jsxs(P,{path:"/",element:e.jsx(_e,{}),children:[e.jsx(P,{index:!0,element:e.jsx(he,{to:"dashboard",replace:!0})}),e.jsx(P,{path:"novo",element:e.jsx(Qe,{})}),e.jsx(P,{path:"dashboard",element:e.jsx(Ue,{})}),e.jsx(P,{path:"listaFiliais",element:e.jsx(Ve,{})}),e.jsx(P,{path:"detalhes-filial/:filial",element:e.jsx(Ke,{})})]}),e.jsx(P,{path:"*",element:e.jsx(ze,{})})]});export{no as default};

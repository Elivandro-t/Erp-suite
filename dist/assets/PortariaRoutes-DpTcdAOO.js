const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/controledeAcesso-BqErkD-J.js","assets/mui-_wqMIBiI.js","assets/react-OvXVS5lI.js","assets/HeaderSecundario-BQepcxUR.js","assets/BotaoVoltar-CtOoKzJN.js","assets/index-DDiw_5kW.js","assets/index-DsXzPhJZ.css","assets/registroPortariaAntigo-BviOCXw5.js","assets/menuConfig-C_SDYVzO.js","assets/NotFund-DKzA1gWG.js","assets/visualizar_registro-AMIu5YBd.js"])))=>i.map(i=>d[i]);
import{c as dt,d as t,a as V,u as de,s as pt,L as pe,b as U,e as Pe,f as xt,g as be,n as Q,h as ht,i as Ke,O as Qe,j as Ze,A as Me,N as re,R as ut,k as _,_ as Ae}from"./index-DDiw_5kW.js";import{j as e,d as K,e as ee,r as s,A as mt,W as ft,f as gt,b as jt,C as Xe,I as D,g as Te,T as ce,h as te,M as bt,i as k,D as wt,k as Ye,L as vt,l as St,P as yt,m as Ve,n as Ct,o as At,p as It,F as Et,q as Rt,s as kt,S as he,t as zt,u as De,a as Pt,v as et,w as fe,x as ke,y as Tt,z as Dt,E as Lt,G as Ft}from"./mui-_wqMIBiI.js";import{M as Le}from"./BotaoVoltar-CtOoKzJN.js";import{l as Ot,P as Fe,a as Oe,b as ge,B as je,D as _t,f as Bt,M as Nt,c as G}from"./menuConfig-C_SDYVzO.js";import Ut from"./NotFund-DKzA1gWG.js";const Mt=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vt=dt("chevron-right",Mt),ue={container:t.div`
    background-color: #f2f2f2;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
  `,container_int:t.div`
    padding: 40px 5px;
    margin-top: 2em;

    min-height: 100vh;

  `,div:t.div`
    position: fixed;
    padding: 30px 10px;
    background-color: #f2f2f2;
    height: 40px;
    margin-top: 10px;
    gap: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

  width: 100%;
  `,busca:t.input`
      width:100%;
      border-radius:5px;
      padding:10px ;
      border: 1px solid #b6aeaeff;
      outline: none;
      @media screen and (min-width: 760px){
         width:60%;
      }
    `},se="http://localhost:8082",Gt=async a=>(await V.get(se+a)).data,$t=async(a,n,i,r,c)=>{const l=new URLSearchParams;return l.append("filial",n),l.append("busca",i||""),l.append("status",c||""),l.append("size",r||""),(await V.get(se+a,{params:Object.fromEntries(l)})).data},qt=async(a,n,i)=>{const r=new FormData;return r.append("file",i),r.append("data",JSON.stringify(n)),(await V.put(se+a,r,{headers:{"Content-Type":"multipart/form-data"}})).data},Wt=async(a,n,i)=>{const r=new FormData;return r.append("file",i),r.append("data",JSON.stringify(n)),(await V.put(se+a,r,{headers:{"Content-Type":"multipart/form-data"}})).data},Ht=async(a,n,i)=>{const r=new URLSearchParams;return r.append("usuario_id",n),r.append("busca",i),(await V.get(se+a,{params:Object.fromEntries(r)})).data},Jt=async a=>(await V.get(se+a)).data,we={consuta_portaria:async a=>await Gt(`/portaria/v1/solicitacao/visualizar/registro?registroId=${a}`),Solicitacoes:async(a,n,i,r)=>(console.log("busca "+n),await $t("/portaria/v1/lista/entradas/pendentes",a,n,i,r)),alterarEntrada:async(a,n)=>await qt("/portaria/v1/aguardando_Entrada",a,n),alterarSaida:async(a,n)=>await Wt("/portaria/v1/aguardando_saida",a,n),solitacaoAutorizador:async(a,n)=>await Ht("/portaria/v1/solicitacao/autorizador",a,n),blocos:async()=>await Jt("/bloco")},I={container:t.div`
    background-color: #f2f2f2;
    padding: 20px 0;
    min-height: 100vh;
  `,area_pedidos:t.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    @media screen and (max-width: 700px) {
     max-width: 700px; 
         padding: 5px;

    }
  `,titulo:t.h1`
    font-size: 22px;
    font-weight: bold;
    font-family:sans-serif;
    margin-bottom: 10px;
    color: var(--cor-titulo);
  `,pedidos:t.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,cardItem:t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,card_item_header:t.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,card_item_center:t.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 20px;
    @media screen and (max-width: 420px) {
      justify-content: space-between;

    }
  `,numeroDoPedido:t.h4`
    font-size: 14px;
    color: #756f6f;
  `,data:t.small`
    font-size: 9px;
    font-family: "inter";
    color: #756f6f;
  `,btnAguadandoPagamento:t.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,AreaStatus:t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* @media screen and (max-width:560px){
          flex-direction: row-reverse;

    } */
  `,Image:t.img`
     width: 80px;
  height: 80px;
  border-radius: 10%;
  /* object-fit: cover;
  border: 2px solid #ddd; */
    object-fit: cover;
    border: 4px solid #fff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 16px;
      object-position: center bottom top;


    @media screen and (min-width: 600px) {
      margin-bottom: 0;
    }
  `,dataPedido:t.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,Areaitem:t.div`
  display: flex;
  flex: 1;
  gap: 1px;
  flex-direction: column;
`,inforLabel:t.div`
  display: flex;
  align-items: center;
  text-align:center;
  word-wrap: break-word;
  gap:2px;

`,loading:t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  
`,buttonNext:t.button`
 color: blue;
 background-color:blue;
 cursor: pointer;
 border: 0;
  background: transparent;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  font-size: 16px;
 &:hover{
  color: #8484f5;
  padding: 2px;

 }
 &:active{
    transform: scale(0.97);
    color: #5555ff;       /* muda a cor quando clicado */
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); /* efeito de pressionado */

 }

`,Span:t.span`
    font-size: 14px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    color:#374151;
    @media screen and (max-width: 560px){
      font-size: 12px;
              letter-spacing: 0.2;

      
    }
  `,Infor:t.small`
    font-size: 13px;
    color: #494545;
        letter-spacing: 0.5;
        margin-top: 2px;
    @media screen and (max-width: 560px){
      font-size: 11px;
              letter-spacing: 0.2;

      
    }

  `,semItens:t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #555;
    height: 60vh;
    font-size: 16px;
    gap: 10px;
    opacity: 0.8;
  `,iconSemItens:t(Le)`
    font-size: 60px;
    color: #999;
  `,btn:t.div`
  display: flex;
  justify-content:flex-end;
   right: 1;
   @media screen and (max-width:560px){
    flex: 0;
    padding: 5px;
    
   }
  `,sentinela:t.div`
    width: 100%;
    height: 100px; /* Altura generosa para garantir detecção */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background: transparent;
  `,loadingFooter:t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-weight: 500;
  `};function Kt(){return e.jsxs(K,{sx:{mb:4},children:[e.jsx(ee,{variant:"text",sx:{width:200,height:20,mb:1,ml:1}}),e.jsxs(K,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,background:"#fff",borderRadius:"12px",boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:[e.jsx(ee,{variant:"rectangular",width:80,height:80,sx:{borderRadius:"6px"}}),e.jsxs(K,{sx:{flex:1,ml:2},children:[e.jsx(ee,{variant:"text",width:160,height:22}),e.jsx(ee,{variant:"text",width:260,height:22}),e.jsx(ee,{variant:"text",width:200,height:22}),e.jsx(ee,{variant:"text",width:180,height:22})]}),e.jsx(ee,{variant:"rounded",width:160,height:32})]})]})}const tt=({lista:a,hendleDetalhesPedidos:n,hendleBusca:i,visibleCount:r,loading:c})=>{const l=s.useRef(null);s.useEffect(()=>{const x={root:null,rootMargin:"0px 0px 100px 0px",threshold:.1},S=new IntersectionObserver(m=>{const[f]=m;f.isIntersecting&&!c&&a.length<r&&i()},x);return l.current&&S.observe(l.current),()=>{l.current&&S.unobserve(l.current)}},[c,a.length,r,i]);const g=x=>({AGUARDANDO_ENTRADA:"info",AGUARDANDO_SAIDA:"warning",SAIDA_LIBERADA:"success"})[x]||"error",j=x=>new Date(x).toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs(I.area_pedidos,{children:[e.jsx(I.pedidos,{children:a.length===0&&c?Array.from({length:4}).map((x,S)=>e.jsx(Kt,{},S)):a.map(x=>e.jsxs("div",{children:[e.jsx(I.dataPedido,{children:j(x?.dataCriacao)}),e.jsxs(I.cardItem,{children:[x?.prioridadeAtrasoAtivo&&e.jsx(mt,{icon:e.jsx(ft,{sx:{fontSize:"1rem"}}),severity:"warning",sx:{borderRadius:"8px",mb:1,py:0,fontSize:"0.7rem",border:"1px solid #ffe58f"},children:x.prioridadeAviso||x.prioridadeAtraso}),e.jsxs(I.card_item_header,{children:[e.jsxs(I.numeroDoPedido,{children:[e.jsx("strong",{children:"N: "}),x?.protocolo]}),e.jsxs(I.AreaStatus,{children:[e.jsx(gt,{sx:{height:22,fontSize:"10px",fontWeight:700,textTransform:"uppercase",borderRadius:"6px"},color:g(x?.status),label:x?.status.replace("_"," "),variant:"outlined"}),x?.entrada?.dataEntrada&&e.jsxs(I.data,{children:[e.jsx("strong",{children:"Entrada: "}),j(x?.entrada?.dataEntrada)]})]})]}),e.jsxs(I.card_item_center,{children:[e.jsx(I.Image,{src:x?.visitante?.imagem}),e.jsxs(I.Areaitem,{children:[e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Placa: "}),e.jsx(I.Infor,{children:x?.placaVeiculo})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Nome: "}),e.jsx(I.Infor,{children:x?.nomeCompleto?.trim().toUpperCase().split(" ")[0]})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Tipo de Pessoa: "}),e.jsx(I.Infor,{children:x.tipPessoa.toUpperCase()})]}),e.jsxs(I.inforLabel,{children:[e.jsx(I.Span,{children:"Acesso: "}),e.jsx(I.Infor,{children:x?.visitante?.recorrencia?.nome})]})]}),e.jsx(jt,{onClick:()=>n(x?.id),variant:"outlined",sx:{minWidth:"40px",width:"40px",height:"40px",borderRadius:"10px",borderColor:"#e2e8f0",color:"#64748b",backgroundColor:"#fff","&:hover":{borderColor:"#94a3b8",backgroundColor:"#f8fafc",color:"#0f172a"},"& .lucide":{width:18}},children:e.jsx(Vt,{})})]})]})]},x.id))}),e.jsx(I.sentinela,{ref:l,children:c&&a.length>0&&e.jsxs(I.loadingFooter,{children:[e.jsx(Xe,{size:20,thickness:5,sx:{color:"#9ca3af"}}),e.jsx("span",{children:"Carregando mais registros..."})]})})]})},Qt=()=>{const a=pt(),[n,i]=s.useState([]),r=de(),[c,l]=s.useState(!1),[g,j]=s.useState(""),x=async()=>{if(a!=null){const m=await we.solitacaoAutorizador(a,g);m?.content!=null&&(i(m?.content),l(!1))}};s.useEffect(()=>{g.trim()===""&&x()},[a,g]);const S=m=>{l(!0),setTimeout(()=>{r(`/portaria/controle/detalhes-registro?order=${m}`,{replace:!1,state:{refresh:Date.now()}}),l(!1)},1e3)};return e.jsxs(ue.container,{children:[e.jsxs(ue.div,{children:[e.jsx(ue.busca,{placeholder:"Buscar por placa, visitante ou protocolo...",type:"search",onChange:m=>j(m.target.value)}),e.jsx(D,{onClick:x,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Te,{})})]}),e.jsxs(ue.container_int,{children:[e.jsx(tt,{lista:n,hendleDetalhesPedidos:S,hendleBusca:function(){throw new Error("Function not implemented.")},visibleCount:0,loading:c}),c&&e.jsx(pe,{})]})]})},Zt={container:t.div`
    `},Xt=[{name:"Minha Conta",icon:e.jsx(St,{fontSize:"small"})},{name:"Portaria Pendentes",permissions:["REGISTRAR_SAIDA"],icon:e.jsx(yt,{fontSize:"small"})},{name:"Meus Registros",permissions:["VISUALIZAR_REGISTRO"],icon:e.jsx(Ve,{fontSize:"small"})},{name:"Registros Gerais",permissions:["GERENCIAR_REGISTROS"],icon:e.jsx(Ve,{fontSize:"small"})},{name:"Controle De Registros",permissions:["GERENCIAR_REGISTROS"],icon:e.jsx(Ct,{fontSize:"small"})},{name:"Criar Registro",permissions:["CRIAR_REGISTRO"],icon:e.jsx(At,{fontSize:"small"})},{name:"Sair",icon:e.jsx(It,{fontSize:"small"})}],Yt=()=>{const a=U(),n=s.useContext(Pe),[i,r]=s.useState(!1),[c,l]=s.useState(null),[g,j]=s.useState([]),x=de(),S=b=>l(b.currentTarget),m=()=>l(null),f=b=>{if(m(),b==="Sair"){xt.logout(),n?.logout(),window.location.href="/verify";return}const A={"Meus Registros":"/portaria/controle/meus-registros","Minha Conta":"/required/profile","Registros Gerais":"/portaria/active/gerais","Portaria Pendentes":"/portaria/active/pendentes","Controle De Registros":"/portaria/configuracao","Criar Registro":"/portaria/controle/registro-portaria-cd"};A[b]&&(r(!0),setTimeout(()=>{x(A[b]),r(!1)},800))};return s.useEffect(()=>{const A=U()?.permissoes||[],y=Xt.filter(E=>!E.permissions||E.name==="Sair"||E.name==="Minha Conta"?!0:E.permissions.some(L=>A.includes(L)));j(y)},[n?.user]),e.jsxs(Zt.container,{children:[e.jsxs(K,{sx:{flexGrow:0},children:[e.jsx(ce,{title:"Menu do Usuário",children:e.jsx(D,{onClick:S,sx:{p:"2px",border:"2px solid #e2e8f0"},children:e.jsx(te,{src:n?.usuario?.avatar||"/static/images/avatar/2.jpg",alt:a?.nome,sx:{width:38,height:38}})})}),e.jsxs(bt,{sx:{mt:"auto"},anchorEl:c,open:!!c,onClose:m,PaperProps:{elevation:5,sx:{minWidth:240,borderRadius:"12px",padding:"8px","& .MuiMenuItem-root":{borderRadius:"8px",margin:"2px 0",transition:"0.2s"}}},children:[e.jsxs(K,{sx:{px:2,py:1.5},children:[e.jsx(k,{variant:"subtitle2",sx:{fontWeight:700},children:a?.nome||"Usuário"}),e.jsx(k,{variant:"caption",color:"text.secondary",children:"Sistema de Portaria"})]}),e.jsx(wt,{sx:{my:1}}),g.map(b=>e.jsxs(Ye,{onClick:()=>f(b.name),children:[e.jsx(vt,{sx:{color:b.name==="Sair"?"#d32f2f":"#6366f1"},children:b.icon}),e.jsx(k,{sx:{fontSize:"0.9rem",fontWeight:500,color:b.name==="Sair"?"#d32f2f":"inherit"},children:b.name})]},b.name))]})]}),i&&e.jsx(pe,{})]})},H={areaHeader:t.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    z-index: 1000;
    top: 0;
    width: 100%;
    background: var(--header-background, #1a1a1a);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  `,container:t.header`
    display: flex;
    flex-wrap: wrap; /* Permite que a busca "caia" para a linha de baixo no mobile */
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px;
    gap: 15px;

    @media (min-width: 768px) {
      flex-wrap: nowrap; /* Trava tudo em uma linha só no desktop */
      padding: 10px 40px;
      height: 75px;
    }
  `,areaLogo:t.div`
    display: flex;
    gap: 12px;
    align-items: center;
    order: 1; /* Primeiro item */
  `,logo:t.img`
    height: 32px;
    object-fit: contain;
    cursor: pointer;
    @media (min-width: 768px) { height: 42px; }
  `,SelectFilial:t.select`
    background: rgba(161, 114, 114, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    max-width: 70px;

    option { background: #222; }

    @media (min-width: 768px) { max-width: 150px; }
  `,BadgeFilial:t.span`
    font-weight: 700;
    font-size: 12px;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.15);
  `,wrapperBusca:t.div`
    order: 3; /* No mobile, vai para baixo de tudo */
    width: 100%;
    
    @media (min-width: 768px) {
      order: 2; /* No desktop, fica no meio */
      flex: 1;
      max-width: 500px;
    }
  `,busca:t.input`
    width: 100%;
    height: 45px; /* Maior no mobile para facilitar o toque */
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    font-size: 16px; /* Evita zoom automático chato no iPhone */
    outline: none;
    transition: all 0.2s ease;

    &::placeholder { color: rgba(255, 255, 255, 0.5); }

    &:focus {
      background: #fff;
      color: #000;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
    }

    @media (min-width: 768px) {
      height: 40px;
      font-size: 14px;
    }
  `,perfil:t.div`
    display: flex;
    align-items: center;
    gap: 12px;
    order: 2; /* No mobile, fica ao lado da logo */

    @media (min-width: 768px) {
      order: 3; /* No desktop, vai para o final */
      padding-left: 15px;
      border-left: 1px solid rgba(255, 255, 255, 0.1);
    }
  `,nomeUsuario:t.div`
    display: none; /* Esconde texto longo no mobile */
    @media (min-width: 1024px) {
      display: block;
      text-align: right;
      color: white;
      font-size: 14px;
      strong { display: block; font-size: 10px; opacity: 0.6; text-transform: uppercase; }
    }
  `},ea=({ativoBusca:a,filial:n})=>{const{setBusca:i,setFilial:r}=s.useContext(Pe),c=U(),l=de(),[g,j]=s.useState(localStorage.getItem("@App:filial")||n||""),[x,S]=s.useState([]),m=c?.permissoes?.includes("GERENCIAR_USUARIOS"),f=()=>{l("/")},b=y=>{const E=y.target.value;j(E),r(E),localStorage.setItem("@App:filial",E)},A=s.useCallback(async()=>{try{const y=await be.FiliaisUsuario(c?.id);y?.acess&&S(y?.acess)}catch{Q("Erro ao carregar filiais","error")}},[]);return s.useEffect(()=>{A()},[]),e.jsx(H.areaHeader,{children:e.jsxs(H.container,{children:[e.jsxs(H.areaLogo,{children:[e.jsx(H.logo,{src:Ot,onClick:f}),a&&(m?e.jsxs(H.SelectFilial,{value:g,onChange:b,children:[e.jsx("option",{value:"",children:"CD Principal"}),x.map(y=>e.jsx("option",{value:y.filial,children:y.filial},y.id))]}):e.jsxs(H.BadgeFilial,{onClick:f,style:{cursor:"pointer"},children:["CD - ",g||n]}))]}),a&&e.jsx(H.wrapperBusca,{children:e.jsx(H.busca,{placeholder:"Buscar placa, visitante...",type:"search",onChange:y=>i(y.target.value)})}),ht()&&e.jsxs(H.perfil,{children:[c?.nome&&e.jsxs(H.nomeUsuario,{children:[e.jsx("strong",{children:"Operador"}),c.nome.split(" ")[0]]}),e.jsx(Yt,{})]})]})})},Ie={container:t.main`
    position: relative;
    `,Container_int:t.main`
      @media screen and (max-width: 560px) {
        padding: 0;
      }
     `,PlaceholderContainer:t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 10em;
  text-align: center;
  color: #333;
  /* padding: 20px; */
  border-radius: 12px;

  .emoji {
    font-size: 64px;
    margin-bottom: 20px;
  }

  .title {
    font-size: 28px;
    margin-bottom: 8px;
    color: #1a237e;
  }

  .subtitle {
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 12px;
    color: #3949ab;
  }

  .description {
    font-size: 16px;
    max-width: 500px;
    color: #555;
  }
`},Ge=()=>{const a=U(),n=location.pathname==="/portaria/active/pendentes",i=Ke();return s.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs(Ie.container,{children:[e.jsx(ea,{filial:a?.filial,ativoBusca:i&&n}),e.jsx(Ie.Container_int,{children:i?e.jsx(Qe,{}):e.jsxs(Ie.PlaceholderContainer,{children:[e.jsx("div",{className:"emoji",children:"🛡️"}),e.jsx("h2",{className:"title",children:"Bem-vindo à Portaria!"}),e.jsx("p",{className:"description",children:"Use o menu à esquerda para navegar entre as opções, visualizar registros, e gerenciar usuários."})]})})]})},M={container:t.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 40px;
        background-color: #f8fafc;
        width: 100%;
        box-sizing: border-box;

        @media (max-width: 768px) {
            padding: 16px;
            gap: 15px;
        }
    `,titulo:t.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        letter-spacing: -0.025em;
        margin: 0;
    `,FormSub:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        background: #ffffff;
        padding: 20px 0;
        border-radius: 12px;
    `,CamposInput:t.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 12px;
        background: #f1f5f9;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        & > * {
            @media (max-width: 480px) {
                flex: 1 1 100%;
            }
        }
    `,Chip:t.div`
        display: inline-flex;
        align-items: center;
        padding: 4px 10px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        background-color: ${({color:a})=>a+"15"}; 
        color: ${({color:a})=>a};
        border: 1px solid ${({color:a})=>a+"30"};
        white-space: nowrap;
    `,TableContainer:t.div`
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: #fff;

        /* Inverte o container para o scroll ir para o topo */
        transform: rotateX(180deg); 
        
        /* Personalização da barra para mobile/web */
        &::-webkit-scrollbar {
            height: 8px;
        }
        &::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
        }
    `,Table:t.table`
        width: 100%;
        border-collapse: collapse;
        font-family: "Inter", sans-serif;
        min-width: 800px; 

        /* Inverte o conteúdo da tabela de volta ao normal */
        transform: rotateX(180deg); 

        thead {
            background-color: #f8fafc;
        }

        th {
            padding: 14px 16px;
            font-size: 0.7rem;
            font-weight: 700;
            color: #64748b;
            text-transform: uppercase;
            border-bottom: 2px solid #e2e8f0;
            text-align: left;
        }

        td {
            padding: 12px 16px;
            font-size: 0.85rem;
            color: #334155;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
            white-space: nowrap; 
        }

        tbody tr:hover {
            background-color: #f8fafc;
        }
    `,loadingRow:t.tr`
        td {
            padding: 40px 0;
            text-align: center;
            border-bottom: none;
        }
    `,loadingContainer:t.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #64748b;
    `,trBTN:t.div`
        display: flex;
        justify-content: flex-end;
        gap: 4px;
    `,visitante:t.div`
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border-bottom: 1px solid #e2e8f0;
        h5 { margin: 0; color: #1e293b; font-size: 1.1rem; }
    `,imgemVisitante:t.img`
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #6366f1;
    `,imagemArea:t.div`
        display: flex;
        gap: 20px;
        padding: 20px;
        overflow-y: auto;
        max-height: 500px;
        @media (max-width: 768px) {
            flex-direction: column;
            max-height: 70vh;
        }
    `,divArea:t.div`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: #f8fafc;
        padding: 15px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        position: relative;
    `,tituloLabel:t.label`
        font-size: 0.875rem;
        font-weight: 600;
        color: #475569;
    `,imgem:t.img`
        width: 100%;
        height: 220px;
        object-fit: cover;
        border-radius: 8px;
        @media (max-width: 768px) {
            height: auto;
        }
    `,btnDownload:t.div`
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
    `,erro:t.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
    `,semItens:t.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: #94a3b8;
    `,iconSemItens:t(Le)`
        font-size: 64px;
        color: #cbd5e1;
    `,Options:t.option``,Select:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,label:t.label`
        font-size: 0.9rem;
        font-weight: 500;
        color: #475569;
        margin-bottom: 4px;
    `,Campos:t.input`
        width: 100%;
        height: 38px;
        border-radius: 8px;
        border: 1px solid ${({hasError:a})=>a?"#ef4444":"#e2e8f0"};
        padding: 8px 12px;
        box-sizing: border-box;
        &:focus {
            outline: none;
            border-color: #6366f1;
        }
    `},at="http://localhost:8082",ta=async(a,n,i,r,c)=>{const l={sort:"status,asc"};return n&&(l.filial=n),r!=null&&(l.ativo=r),i&&(l.busca=i),c!=null&&(l.page=c),l.size=100,(await V.get(at+a,{params:l})).data},aa=async(a,n,i)=>{const r=new FormData;return i!=null&&r.append("file",i),r.append("data",JSON.stringify(n)),(await V.post(at+a,r,{headers:{"Content-Type":"multipart/form-data"}})).data},_e={findAll:async(a,n,i,r)=>await ta("/portaria/v1/findAll",a,n,i,r),RegistroFactory:async(a,n)=>await aa("/portaria/v1/factory",a,n)},$e={container:t.div`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 0;
      left: 0;
      height: 100vh;
      position: fixed;
      z-index: 9999;
      background-color: rgba(0,0,0,0.5);
    `,container_left:t.section`
   display: flex;
    background-color: #F2F2F2;
    padding: 20px;
    border-radius: 10px;
    flex-direction: column;
     @media screen  and (min-width: 760px){
                  box-shadow: 0 8px 24px rgba(21,101,192,0.08);

                
              }
    `},ot=({children:a,cancelar:n})=>{const i=r=>{r?.stopPropagation()};return e.jsx($e.container,{onClick:n,children:e.jsx($e.container_left,{onClick:i,children:a})})};function qe({value:a,onChange:n,list:i,titulo:r}){const c=l=>{n(l.target.value)};return e.jsx("div",{children:e.jsxs(Et,{sx:{m:0,minWidth:120},children:[e.jsx(Rt,{id:"demo-simple-select-standard-label",sx:{fontSize:13,top:-10},children:r}),e.jsx(kt,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:a,onChange:c,sx:{height:30,fontSize:13,".MuiSelect-select":{paddingTop:4,paddingBottom:4}},children:i.map((l,g)=>e.jsx(Ye,{value:l.value!==void 0?l.value:l.filial,children:l?.nome},g))})]})})}const oa=[{nome:"Aberto",value:!0},{nome:"Fechado",value:!1}],We=()=>{const[a,n]=s.useState([]),[i,r]=s.useState(!1),[c,l]=s.useState(""),g=de(),[j,x]=s.useState(""),[S,m]=s.useState(""),[f,b]=s.useState(!0),A=U(),[y,E]=s.useState(!1),[L,N]=s.useState(!1),[F,R]=s.useState(null),[C,w]=s.useState(A?.filial),[T,W]=s.useState(0),[z,u]=s.useState(),O=async p=>{N(!0);const q=await _e.findAll(C,j,F,p);q&&setTimeout(()=>{N(!1),n(q.content),W(q?.totalPages)},1e3)};s.useEffect(()=>{j.trim()===""&&O()},[j]);const[Z,P]=s.useState([]),h=async()=>{const p=await be.FiliaisUsuario(A?.id);p?.acess&&P(p.acess)};s.useEffect(()=>{h()},[]);const B=p=>{m(`Deseja realmente deletar o item ${p.id}`),r(!0),l(p.id)},ae=async()=>{await ge.deletarPortaria(c,A?.id),m(`${c} Deletado com sucesso`),b(!1),await O(),r(!1)},ne=p=>{E(!0),u(p)},oe=(p,q)=>{const xe=q-1;O(xe)},$=async(p,q)=>{const ye=await(await fetch(p)).blob(),X=window.URL.createObjectURL(ye),Y=document.createElement("a");Y.href=X,Y.download=q,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),window.URL.revokeObjectURL(X)},ve=p=>{switch(p){case"AGUARDANDO_ENTRADA":return"#3b82f6";case"AGUARDANDO_SAIDA":return"#eab308";case"SAIDA_LIBERADA":return"#22c55e";default:return"#ef4444"}},Se=p=>{N(!0),setTimeout(()=>{g(`/portaria/controle/detalhes-registro?order=${p}`,{replace:!1,state:{refresh:Date.now()}})},2e3)};return e.jsxs(M.container,{children:[e.jsx(he,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:3},children:e.jsx(k,{variant:"h4",sx:{fontWeight:700,color:"#1e293b"},children:"Histórico Portaria"})}),e.jsx(zt,{elevation:0,sx:{p:2,borderRadius:"16px",border:"1px solid #e2e8f0"},children:e.jsxs(M.FormSub,{children:[e.jsxs(K,{sx:{display:"flex",gap:2,alignItems:"center",flexWrap:"wrap",bgcolor:"#f8fafc",p:2,borderRadius:"12px"},children:[e.jsx(De,{variant:"outlined",size:"small",placeholder:"Pesquisar por nome ou placa...",value:j,onChange:p=>x(p.target.value),sx:{bgcolor:"white",minWidth:250}}),e.jsx(qe,{value:F,onChange:R,titulo:"Status",list:oa}),e.jsx(qe,{value:C,onChange:w,titulo:"Filial",list:Z}),e.jsx(ce,{title:"Pesquisar",children:e.jsx(D,{onClick:()=>O(),sx:{bgcolor:"#6366f1",color:"white","&:hover":{bgcolor:"#4f46e5"}},children:e.jsx(Te,{})})}),e.jsx(K,{sx:{flexGrow:1}}),e.jsx(Fe,{totalPage:T,handleNextPage:oe})]}),e.jsx(M.TableContainer,{children:e.jsxs(M.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Visitante"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Tipo / Placa"}),e.jsx("th",{children:"Ocupação Liberada / Tipo de Acesso"}),e.jsx("th",{children:"Local"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Entrada"}),e.jsx("th",{children:"Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saida"}),e.jsx("th",{style:{textAlign:"right"},children:"Ações"})]})}),e.jsx("tbody",{children:L?e.jsx(M.loadingRow,{children:e.jsx("td",{colSpan:11,children:e.jsxs(M.loadingContainer,{children:[e.jsx(Xe,{size:28}),e.jsx(k,{variant:"body2",children:"Carregando registros..."})]})})}):a.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsxs(M.semItens,{children:[e.jsx(M.iconSemItens,{}),e.jsx(k,{variant:"h6",color:"textSecondary",children:"Nenhum registro encontrado"}),e.jsx(k,{variant:"body2",color:"textSecondary",children:"Tente ajustar seus filtros de busca."})]})})}):a.map((p,q)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs(he,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(te,{sx:{width:40,height:40,border:"2px solid #e2e8f0"},src:p?.visitante?.imagem||"/static/images/avatar/2.jpg"}),e.jsxs(K,{children:[e.jsx(k,{variant:"body2",sx:{fontWeight:600},children:p?.nomeCompleto||"---"}),e.jsx(k,{variant:"caption",color:"textSecondary",children:p?.filialSocitado})]})]})}),e.jsx("td",{children:e.jsxs(k,{variant:"caption",sx:{fontFamily:"monospace",fontWeight:700},children:["#",p?.protocolo||"PENDENTE"]})}),e.jsxs("td",{children:[e.jsx(k,{variant:"body2",children:p?.visitante?.tipoPessoa||"Visitante"}),e.jsx(k,{variant:"caption",sx:{bgcolor:"#f1f5f9",px:.5,borderRadius:1},children:p?.placaVeiculo||"Sem Veículo"})]}),e.jsxs("td",{children:[e.jsx(k,{variant:"body2",children:p?.ocupacaoLiberada||"Visitante"}),e.jsx(k,{variant:"caption",sx:{bgcolor:"#f1f5f9",px:.5,borderRadius:1},children:p?.visitante?.recorrencia?.nome||"Sem Recorrencia"})]}),e.jsx("td",{children:p?.bloco}),e.jsx("td",{children:e.jsx(M.Chip,{color:ve(p?.status),children:p?.status.replace("_"," ")})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",children:p?.entrada?.dataEntrada?new Date(p.entrada.dataEntrada).toLocaleString():"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",children:p?.saida?.dataSaida?new Date(p.saida.dataSaida).toLocaleString():"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",sx:{fontWeight:500},children:p?.entrada?.nomeFiscal||"---"})}),e.jsx("td",{children:e.jsx(k,{variant:"caption",sx:{fontWeight:500},children:p?.saida?.nomeFiscal||"---"})}),e.jsx("td",{children:e.jsxs(M.trBTN,{children:[e.jsx(ce,{title:"Visualizar Detalhes",children:e.jsx(D,{size:"small",onClick:()=>Se(p.id),children:e.jsx(Pt,{fontSize:"small"})})}),p?.entrada?.imagem&&e.jsx(ce,{title:"Ver Fotos",children:e.jsx(D,{size:"small",onClick:()=>ne(p),color:"primary",children:e.jsx(et,{fontSize:"small"})})}),e.jsx(ce,{title:"Excluir",children:e.jsx(D,{size:"small",onClick:()=>B(p),color:"error",children:e.jsx(fe,{fontSize:"small"})})})]})})]},q))})]})})]})}),y&&e.jsx(ot,{cancelar:()=>E(!1),children:e.jsxs(K,{sx:{p:1},children:[e.jsxs(he,{direction:"row",spacing:2,alignItems:"center",sx:{mb:3},children:[e.jsx(te,{src:z?.visitante?.imagem,sx:{width:60,height:60}}),e.jsxs(k,{variant:"h6",children:["Evidências: ",z?.visitante.nomeCompleto]})]}),e.jsx(M.imagemArea,{children:["entrada","saida"].map(p=>z?.[p]?.imagem&&e.jsxs(M.divArea,{children:[e.jsxs(he,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:1},children:[e.jsx(k,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:p}),e.jsx(D,{size:"small",onClick:()=>$(z?.[p]?.imagem,`Foto_${p}`),children:e.jsx(ke,{fontSize:"small",color:"primary"})})]}),e.jsx(M.imgem,{src:z?.[p]?.imagem,alt:`Imagem ${p}`})]},p))})]})}),i&&e.jsx(Oe,{handleCancel:()=>r(!1),handleConfirm:ae,message:S,ativoBtn:f})]})},o={container_principal:t.div`
    padding: 15px 10px;
    display: flex;
    flex-direction: column; // Mobile first: empilha
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 100vh;

    @media (min-width: 768px) {
      padding: 20px;
      flex-direction: row; // Desktop: alinha
    }
  `,container:t.div`
    padding: 10px 5px;
    width: 100%;
    max-width: 850px;

    @media (min-width: 768px) {
      padding: 20px;
    }
  `,area_pedidos:t.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    padding: 10px 15px; // Mobile: menos padding
    width: 100%;

    @media (min-width: 768px) {
      padding: 10px 56px;
      max-width: 700px;
    }
  `,titulo:t.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: var(--cor-titulo);
    text-align: center;

    @media (min-width: 768px) {
      font-size: 24px;
      text-align: left;
    }
  `,pedidos:t.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,FormSub:t.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,label:t.label`
    font-size: 0.8rem; // Melhor legibilidade no mobile
    font-weight: 500;
    color: var(--cor-texto-campos);
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;
    margin-bottom: 6px;
    display: inline-block;

    @media (min-width: 768px) {
       font-size: 0.85rem;    
    }
  `,CamposInput:t.div`
    width: 100%;
    position: relative;
    margin: 5px 0;
  `,Select:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
    margin: 5px 0;
  `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
    width: 100%;
    height: 45px; // Maior no mobile para facilitar o toque
    border-radius: 8px;
    padding: 0 12px;
    background-color: #FFF;
    font-size: 16px; // Evita zoom no iOS
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#d6d6d6"};
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${({hasError:a})=>a?"#ff4d4f":"#007BFF"};
        box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.1);
    }

    @media (min-width: 768px) {
      height: 38px;
      font-size: 14px;
    }
  `,labelCheck:t.label`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 8px 0;
    cursor: pointer;
    font-size: 14px;
  `,checkbox:t.input`
    height: 18px;
    width: 18px;
    cursor: pointer;
  `,SelectItens:t.select`
    width: 100%;
    height: 45px;
    background-color: #FFF;
    border-radius: 8px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#d6d6d6"};
    
    @media (min-width: 768px) {
      height: 38px;
      font-size: 14px;
    }
  `,TextArea:t.textarea`
    min-height: 100px;
    resize: vertical;
    width: 100%;
    padding: 12px;
    background-color: #FFF;
    border-radius: 8px;
    font-size: 16px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#d6d6d6"};

    @media (min-width: 768px) {
      font-size: 14px;
    }
  `,Options:t.option`
    padding: 10px;
  `,Erros:t.div`
    color: #ff4d4f;
    font-size: 12px;
    margin-top: 4px;
    font-weight: 500;
  `,BtnLogin:t.button`
    margin: 10px 0;
    width: 100%;
    height: 48px;
    background-color: #007BFF;
    border-radius: 8px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:active {
        transform: scale(0.98);
    }

    &:hover {
        background-color: #0056b3;
    }

    @media (min-width: 768px) {
      height: 40px;
      font-size: 14px;
    }
  `,leftArea:t.div`
    width: 100%;
    padding: 5px 0;
    display: flex;
    flex-direction: column; // Mobile: empilha
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row; // Desktop: lado a lado
      gap: 10px;
    }
  `,btnDivider:t.div`
    display: flex;
    flex-direction: column; // Mobile: botões um em cima do outro
    width: 100%;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row; // Desktop: lado a lado
      align-items: center;
    }
  `,CardCentro:t.div`
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 10px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    display: flex;
    flex-direction: column; // Mobile first

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
      padding: 20px;
      margin-bottom: 20px;
    }
  `,StatusContainer:t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
  `,AreaItemJust:t.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3px;
  `,AreaItemJustCenter:t.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 5px;
    gap: 5px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: auto;
    }
  `,AreaItemJustRigth:t.div`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 100%;
    gap: 5px;

    @media (min-width: 660px) {
      flex-direction: row;
      align-items: center;
      width: 32%;
      margin-left: 50px;
    }
  `,semItens:t.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #555;
    height: 50vh;
    font-size: 16px;
    gap: 10px;
    opacity: 0.8;
  `,iconSemItens:t(Le)`
    font-size: 60px;
    color: #999;
  `,StatusItem:t.div`
    flex: 1;
    text-align: center;
    color: ${a=>a.active?"#fff":"#999"};
    background: ${a=>a.active?"#4caf50":"#e0e0e0"};
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
    font-size: 12px;
    font-weight: 600;
  `,Button:t.button`
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 15px;
    font-weight: 600;

    &:active {
      transform: scale(0.97);
    }
  `,ItemImage:t.img`
    width: 100%; // Mobile: maior destaque
    max-width: 120px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 12px;
    margin: 0 auto 15px auto;

    @media (min-width: 560px) {
      width: 100px;
      height: 100px;
      margin-right: 15px;
      margin-bottom: 0;
    }
  `,ItemDetails:t.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px 0;
    flex: 1;
  `,SummaryRow:t.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,heanderPedido:t.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    border-bottom: 1px solid #f0f0f0;
  `,tituloPedido:t.h4`
    font-size: 14px;
    color: #1e88e5;
    margin: 0;
  `,p:t.p`
    font-weight: 600;
    font-size: 14px;
    margin: 4px 0;
  `,status:t.div`
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--cor-texto-titulo);
    font-size: 13px;
  `,Image:t.img`
    width: 100%;
    height: 180px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center top;

    @media (min-width: 560px) {
      width: 150px;
      height: 150px;
    }
  `,description:t.div`
    width: 100%;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.4;
    color: #666;
  `,Label:t.span`
    font-size: 0.75rem;
    font-weight: bold;
    color: #3b004f;
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;

    @media (min-width: 560px) {
      font-size: 0.8rem;
    }
  `,AreaBuscaPlaca:t.div`
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    padding: 20px;
    width: 95%;
    max-width: 500px;
    font-size: 16px;
    border-radius: 15px;
    color: #134c72;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    gap: 15px;

    @media (min-width: 600px){
      margin: 5em auto;
      padding: 30px 20px;
      width: auto;
    }
  `,busca:t.div`
    display: flex;
    width: 100%;
    border-radius: 8px;
    padding: 5px;
    transition: 0.2s ease;
    align-items: center;
    background: #f8f9fa;
    border: 1px solid #e9ecef;
  `,LabelSubtitulo:t.span`
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--cor-texto-campos);
    word-wrap: break-word;
    font-size: 0.7rem;

    @media (min-width: 560px) {
      font-size: 0.75rem;
    }
  `,edit:t.div`
    margin: 0;
  `},Be="http://localhost:8082",ia=async(a,n,i)=>{const r=new URLSearchParams;return n!=null&&r.append("visitanteId",n),i!=null&&i.trim()!==""&&r.append("nome",i),(await V.get(Be+a,{params:Object.fromEntries(r)})).data},sa=async a=>{const n=new URLSearchParams;return n.append("size",1e3),(await V.get(Be+a,{params:Object.fromEntries(n)})).data},na=async(a,n,i,r)=>{try{const c=new URLSearchParams;return c.append("visitanteId",n),c.append("usuarioId",i),c.append("type",r),(await V.delete(Be+a,{params:Object.fromEntries(c)})).data}catch(c){throw c}},Ne={visitante:async(a,n)=>await ia("/visitante/placa",a,n),FiltroVisitante:async()=>await sa("/visitante/filtro"),deletarVisitante:async(a,n,i)=>await na("/visitante/delete/registro",a,n,i)},it="http://localhost:8082",ra=async a=>(await V.get(it+a)).data,la=async a=>(await V.get(it+a)).data,ze={lista:async()=>await ra("/portaria/tipo_pessoa/lista"),recorrecia:async()=>await la("/recorrencia")},le=t.span`
  color: red;
  `,ca=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],da=({visitante:a,tipo:n})=>{const{register:i,handleSubmit:r,formState:{errors:c},reset:l,watch:g}=Ze({defaultValues:{globalAtivo:"false"}}),[j,x]=s.useState([]),S=U(),m=S?.permissoes||[],[f,b]=s.useState([]),A=m.includes("GERENCIAR_USUARIOS"),y=g("tipoAcesso"),[E,L]=s.useState(!1),N=async u=>{try{L(!0);const O=U();if(u.descricao||delete u.descricao,u.criadorId=O?.id,y?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete u.dataAcesso,u.typeMethod="VISITANTE",u.visitanteId=a?.id,y==null&&(u.tipoAcesso=a.categoriaAcesso),!u.filialSolicitado){Q("Selecione a filial da Solicitação","error");return}const P=await _e.RegistroFactory(u);P&&(L(!1),Q(P.msg,"success"),l())}finally{L(!1)}},F=()=>{n(),l()},R=(u,O)=>{u.key},C=async()=>{const u=await ze.recorrecia();u.recorrencia&&x(u.recorrencia)},w=async()=>{const u=await we.blocos();u.blocos&&b(u?.blocos)};s.useEffect(()=>{C(),w()},[]);const[T,W]=s.useState([]),z=s.useCallback(async()=>{try{const u=await be.FiliaisUsuario(S?.id);u?.acess&&W(u.acess)}catch{Q("Erro ao carregar filiais","error")}},[]);return s.useEffect(()=>{z()},[]),e.jsx(e.Fragment,{children:e.jsx(o.container,{children:e.jsxs(o.area_pedidos,{children:[e.jsxs(o.CardCentro,{children:[e.jsx(o.Image,{src:a?.imagem}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Nome Completo:"}),e.jsx(o.LabelSubtitulo,{children:a?.nomeCompleto})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Tipo de Pessoa:"}),e.jsx(o.LabelSubtitulo,{children:a?.tipoPessoa})]})]}),e.jsxs(o.ItemDetails,{children:[e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"Categoria de Acesso:"}),e.jsx(o.LabelSubtitulo,{children:a?.categoriaAcesso})]}),e.jsxs(o.AreaItemJust,{children:[e.jsx(o.Label,{children:"NumeroTelefone:"}),e.jsx(o.LabelSubtitulo,{children:a?.numeroTelefone})]})]})]}),e.jsxs(o.pedidos,{children:[e.jsx(o.FormSub,{children:e.jsxs(o.Select,{children:[e.jsx(o.leftArea,{children:e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Filial Destino",e.jsx(le,{children:"*"})]}),e.jsxs(o.SelectItens,{...i("filialSolicitado",{required:"Selecione a filial de Destino"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),T.flatMap(u=>e.jsx(o.Options,{value:u?.filial,children:u?.filial+"-"+u?.nome.toUpperCase()}))]}),c.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:c?.bloco?.message})})]})}),e.jsx(o.leftArea,{children:e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(le,{children:"*"})]}),e.jsxs(o.SelectItens,{...i("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),f.flatMap(u=>e.jsx(o.Options,{value:u?.nome.toUpperCase(),children:u?.nome.toUpperCase()}))]}),c.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:c?.bloco?.message})})]})}),e.jsxs(o.leftArea,{children:[A&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(le,{children:"*"})]}),e.jsxs(o.SelectItens,{...i("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),j.map(u=>e.jsx(o.Options,{value:u?.nome.toLowerCase(),children:u?.nome}))]}),c.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.tipoAcesso.message})})]}),"                                    ",A&&y?.toUpperCase()==="RECORRENTE"&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...i("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...i("globalAtivo")}),e.jsx("small",{children:"Não"})]})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(le,{children:"*"})]}),e.jsxs(o.SelectItens,{...i("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),ca.flatMap(u=>e.jsx(o.Options,{value:u.nome,children:u.nome},u.id))]}),c.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.ocupacaoLiberada.message})})]})]}),y?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(le,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!c.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...i("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:u=>R(u)}),c.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:c.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS"}),e.jsx(o.TextArea,{...i("descricao")})]})]})}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:E,onClick:r(N),children:"Enviar Pedido"}),e.jsx(je,{click:F,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]})})})},pa=({setValue:a,value:n,onSelectData:i,handleBusca:r})=>{const[c,l]=s.useState([]),[g,j]=s.useState("");s.useEffect(()=>{(async()=>{const f=await Ne.FiltroVisitante();f?.content&&l(f.content)})()},[]);const x=m=>[...m].sort(()=>Math.random()-.5).slice(0,3),S=s.useMemo(()=>x(c),[c]);return e.jsx(Tt,{freeSolo:!0,id:"country-select-demo",sx:{width:{xs:"100%",sm:400,md:500,lg:560}},options:n?c:S,inputValue:g||n||"",onInputChange:(m,f,b)=>{b=="input"&&(a(f),j(""),i(null))},onChange:(m,f)=>{if(typeof f=="object"&&f){j(f.nomeCompleto),i({id:f.id});return}a(f||""),i(null)},getOptionLabel:m=>typeof m=="string"?m:m.nomeCompleto,renderOption:(m,f)=>e.jsxs(K,{component:"li",...m,children:[e.jsx("img",{loading:"lazy",width:"20",src:f.imagem,alt:"",style:{marginRight:8}}),f.nomeCompleto]}),renderInput:m=>e.jsxs("div",{style:{display:"flex"},children:[e.jsx(De,{style:{border:0},...m,onKeyDown:f=>{f.key==="Enter"&&(f.preventDefault(),r())},label:"Busque um Visitante ou Digite um nome para cadastrar",autoComplete:"new-password"}),e.jsx("button",{style:{width:50},onClick:r,children:"🔍"})]})})},me={FilterArea:t.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
    padding: 10px 0;

    @media (min-width: 768px) {
      width: auto;
      margin-bottom: 0;
    }
  `,SelectGroup:t.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  `,Label:t.label`
    font-size: 0.85rem;
    font-weight: 600;
    color: #444;
    font-family: "Inter", sans-serif;
  `,Select:t.select`
    width: 100%;
    height: 48px; /* Altura confortável para mobile */
    padding: 0 12px;
    border-radius: 8px;
    border: 1.5px solid #e1e1e1;
    background: #fafafa;
    font-size: 16px; /* Evita zoom chato no iPhone */
    color: #333;
    outline: none;
    transition: all 0.2s ease;
    cursor: pointer;

    &:focus {
      border-color: #007BFF;
      background: #fff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
    }

    @media (min-width: 768px) {
      height: 42px;
      font-size: 14px;
      min-width: 280px;
    }
  `,Container:t.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 15px;
  `};function xa({listaFiliais:a,carregarDadosLogistico:n,filialUsuario:i}){return e.jsx(me.FilterArea,{children:e.jsxs(me.SelectGroup,{children:[e.jsx(me.Label,{children:"Portaria Filial"}),e.jsxs(me.Select,{onChange:r=>n(r.target.value),children:[a.some(r=>r.filial==i)?e.jsx("option",{value:i,children:a.find(r=>r.filial==i)?.nome||i}):e.jsx("option",{value:"",children:"Selecione uma Filial"}),a.map((r,c)=>e.jsxs("option",{value:r?.filial,children:[r?.filial," - ",r?.nome]},c))]})]})})}const J=t.span`
  color: red;
  `,ha=[{id:1,nome:"Somente Motorista",codigo:"PRES"},{id:2,nome:"Motorista e Passageiros",codigo:"DIR"}],He=()=>{const{register:a,handleSubmit:n,formState:{errors:i},reset:r,watch:c,setValue:l}=Ze({defaultValues:{globalAtivo:"false",filialSolicitado:""}}),[g,j]=s.useState(null),[x,S]=s.useState(),[m,f]=s.useState(null),[b,A]=s.useState(0),[y,E]=s.useState([]),[L,N]=s.useState([]),[F,R]=s.useState([]),[C,w]=s.useState("BUSCA"),[T,W]=s.useState(null),z=U(),[u,O]=s.useState(!1),Z=z?.permissoes||[],[P,h]=s.useState([]),[B,ae]=s.useState([]),ne=Z.includes("GERENCIAR_USUARIOS"),oe=async()=>{const d=await Bt.lista();d?.filial&&R(d?.filial)},$=c("tipoAcesso"),ve=d=>{f(d)},[Se,p]=s.useState(!1),q=async d=>{try{p(!0);const Ce=U();if(d.descricao||delete d.descricao,m!=null){if(d.criadorId=Ce?.id,$?.toUpperCase()==="RECORRENTE TEMPORARIO"||delete d.dataAcesso,d.typeMethod="NAO_VISITANTE",!d.filialSolicitado){Q("Selecione a filial da Solicitação","error");return}const Ue=await _e.RegistroFactory(d,m);Ue&&(p(!1),Q(Ue.msg,"success"),r(),A(ct=>ct+1))}else p(!1),Q("Selecione uma imagem","error")}finally{p(!1)}},xe=()=>{A(d=>d+1),w("BUSCA"),O(!1),r()},ye=s.useRef(null),X=(d,Ce)=>{d.key==="Enter"&&Ce?.current?.focus()},Y=async()=>{const d=await ze.lista();d?.tipoPessoa&&E(d?.tipoPessoa)},st=async()=>{try{if(O(!0),!T&&!g){w("BUSCA"),O(!1);return}const d=await Ne.visitante(g?.id,T);d?(S(d),setTimeout(()=>{w("SLIDER"),O(!1)},2e3)):setTimeout(()=>{O(!1),l("nomeCompleto",T),w("CADASTRO")},2e3)}finally{setTimeout(()=>{O(!1)},2e3)}},nt=async()=>{const d=await ze.recorrecia();d.recorrencia&&N(d.recorrencia)},rt=async()=>{const d=await we.blocos();d.blocos&&h(d?.blocos)};s.useEffect(()=>{Y(),nt(),oe(),rt()},[]);const lt=s.useCallback(async()=>{try{const d=await be.FiliaisUsuario(z?.id);d?.acess&&ae(d.acess)}catch{Q("Erro ao carregar filiais","error")}},[]);return s.useEffect(()=>{lt()},[]),s.useEffect(()=>{z?.filial&&B.length>0&&l("filialSolicitado",String(z.filial))},[z,B]),e.jsx(s.Fragment,{children:e.jsxs(o.container_principal,{children:[C==="BUSCA"&&e.jsxs(o.AreaBuscaPlaca,{style:{display:"flex"},children:[e.jsx(Me,{link:!0,titulo:"info",msg:"Cadastro de visitante!"}),e.jsx(o.busca,{children:e.jsx(pa,{handleBusca:st,value:T,setValue:W,onSelectData:j})}),T==""&&e.jsx(Me,{titulo:"success",msg:"Informe a placa do carro do visitante para continuar!"})]}),C==="SLIDER"&&e.jsx(da,{visitante:{id:x.id,nomeCompleto:x?.nomeCompleto,imagem:x?.imagem,tipoPessoa:x?.tipoPessoa,categoriaAcesso:x?.recorrencia?.nome,placaVeiculo:x?.placaVeiculo,numeroTelefone:x?.numeroTelefone},tipo:()=>w("BUSCA")}),C==="CADASTRO"&&e.jsxs(o.container,{children:[e.jsx(o.titulo,{children:"Novo Pedido de Acesso"}),e.jsxs(o.pedidos,{children:[e.jsxs(o.FormSub,{children:[e.jsxs(o.CamposInput,{children:[e.jsx(xa,{filialUsuario:z?.filial,listaFiliais:B,carregarDadosLogistico:d=>{l("filialSolicitado",d)}}),e.jsxs(o.label,{children:["Placa ",e.jsx(J,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!i.placaVeiculo,type:"text",autoComplete:"current-password",placeholder:"Placa do Veiculo",...a("placaVeiculo",{required:"Placa E obrigatorio",pattern:{value:/^([^0-9][^0-9][^0-9][0-9][A-Za-z0-9][0-9][0-9])/,message:"Formato de placa inválido. Ex: ABC1234 ou ABC1D23"}}),onKeyDown:d=>{X(d,ye)}}),e.jsx(o.Erros,{children:i.placaVeiculo&&e.jsx("p",{children:i.placaVeiculo.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Nome ",e.jsx(J,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!i.nomeCompleto,placeholder:"Nome Completo",type:"text",autoComplete:"current-password",...a("nomeCompleto",{required:"Nome e obrigatória",minLength:{value:10,message:"Mínimo 10 caracteres"}}),onKeyDown:d=>X(d)}),e.jsx(o.Erros,{children:i.nomeCompleto&&e.jsx("p",{children:i.nomeCompleto.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Numero de Telefone ",e.jsx(J,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!i.nomeCompleto,placeholder:"(99) 99999-9999",type:"tel",autoComplete:"current-password",...a("numeroTelefone",{required:"O telefone é obrigatório.",pattern:{value:/^(\+?55\s?)?(\(?\d{2}\)?\s?)?(9?\d{4}-?\d{4})$/,message:"Formato de telefone inválido. Ex: (98) 9809-9999 ou 98980999977"}}),onKeyDown:d=>X(d)}),e.jsx(o.Erros,{children:i.numeroTelefone&&e.jsx("p",{children:i.numeroTelefone.message})})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Filial Visita",e.jsx(J,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("filial",{required:"Selecione uma filial"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),F.flatMap(d=>e.jsxs(o.Options,{value:d?.numeroFilial,children:[d?.numeroFilial," - ",d?.nome]},d?.id))]}),i.filial&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.filial.message})})]}),ne&&e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"Global?"}),e.jsxs(o.labelCheck,{style:{display:"flex"},children:[e.jsx(o.checkbox,{type:"radio",value:"true",...a("globalAtivo")}),e.jsx("small",{children:"Sim"})]}),e.jsxs(o.labelCheck,{children:[e.jsx(o.checkbox,{type:"radio",value:"false",...a("globalAtivo")}),e.jsx("small",{children:"Não"})]})]})]}),e.jsxs(o.Select,{children:[e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Tipo de Pessoa ",e.jsx(J,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("tipPessoa",{required:"Selecione o tipo de Pessoa"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),y.flatMap(d=>e.jsx(o.Options,{value:d?.nome,children:d?.nome}))]}),i.tipPessoa&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.tipPessoa.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Bloco",e.jsx(J,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("bloco",{required:"Selecione o bloco"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),P.flatMap(d=>e.jsx(o.Options,{value:d?.nome.toUpperCase(),children:d?.nome.toUpperCase()}))]}),i.bloco&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.bloco.message})})]})]}),e.jsxs(o.leftArea,{children:[e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Recorrência do Acesso ",e.jsx(J,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("tipoAcesso",{required:"Selecione o Tipo de acesso"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),L.map(d=>e.jsx(o.Options,{value:d?.nome.toLowerCase(),children:d?.nome}))]}),i.tipoAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.tipoAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Ocupação Liberada ",e.jsx(J,{children:"*"})]}),e.jsxs(o.SelectItens,{...a("ocupacaoLiberada",{required:"Selecione uma ocupaçao"}),children:[e.jsx(o.Options,{value:"",children:"Selecione"}),ha.flatMap(d=>e.jsx(o.Options,{value:d.nome,children:d.nome},d.id))]}),i.ocupacaoLiberada&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.ocupacaoLiberada.message})})]})]}),$?.toUpperCase()==="RECORRENTE TEMPORARIO"&&e.jsxs(o.CamposInput,{children:[e.jsxs(o.label,{children:["Data ",e.jsx(J,{children:"*"})]}),e.jsx(o.Campos,{hasError:!!i.dataAcesso,placeholder:"data",type:"date",autoComplete:"current-password",...a("dataAcesso",{required:"A data é obrigatória para acesso recorrente temporário"}),onKeyDown:d=>X(d)}),i.dataAcesso&&e.jsx(o.Erros,{children:e.jsx("p",{children:i.dataAcesso.message})})]}),e.jsxs(o.CamposInput,{children:[e.jsx(o.label,{children:"OBS "}),e.jsx(o.TextArea,{...a("descricao")})]})]}),e.jsxs(o.label,{children:["IMG visitante",e.jsx(J,{children:"*"})]}),e.jsx(_t,{onFileSelect:ve,titulo:"Clique ou arraste outra imagem para substituir",resetSignal:b,permission:$?.toUpperCase()}),m&&e.jsxs("p",{children:["Arquivo selecionado: ",m.name]})]}),e.jsxs(o.btnDivider,{children:[e.jsx(o.BtnLogin,{disabled:Se,onClick:n(q),children:"Enviar Pedido"}),e.jsx(je,{click:xe,nome_btn:"red",isvalid:!0,children:"Limpar"})]})]})]}),u&&e.jsx(pe,{})]})})},ua=({permissoes:a})=>{switch(a){case"FISCAL":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});case"AUTORIZADOR":return e.jsx(re,{to:"/portaria/active",replace:!0});case"ADMIN":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});case"GERENTE_PREVENCAO":return e.jsx(re,{to:"/portaria/active/pendentes",replace:!0});default:return e.jsx(re,{to:"/portaria",replace:!0})}},Je={container:t.div`
    background-color: #f2f2f2;
    padding: 80px 2px;
    min-height: 100vh;
  `,container_int:t.div`
      background-color: #f2f2f2;

  display: flex;
  gap: 20px;
  width: 200px;
     position: fixed;
    top: 70px; /* altura do header */
    right:6.2%;
    z-index: 999;
    font-size: 20px;
    font-weight: bold;
    background: #FFF;
    border-radius: 5px;
    padding: 10px 20px;
    @media screen and (min-width:900px) {
          right:1.5%;

    }

  `};function ma(){const a=U(),[n,i]=s.useState(20),[r,c]=s.useState(0),l=s.useContext(Pe),[g,j]=s.useState([]),[x,S]=s.useState(!1),[m,f]=s.useState(""),b=async w=>{if(x)return;const T=localStorage.getItem("@App:filial"),W=T&&T!=="undefined"?T:a?.filial;if(!W){console.warn("Filial inválida, busca cancelada");return}S(!0);const z=w??n;try{const u=await we.Solicitacoes(W,l?.busca,z,m);u.content&&(j(u.content),c(u.totalElements))}finally{S(!1)}},A=s.useRef(null),y=()=>{if(!x&&g.length<r){const w=n+5;i(w),b(w)}};s.useEffect(()=>{A.current&&(!l?.busca||l.busca.trim()==="")&&f("aguardando entrada"),A.current=l?.busca??null,j([]),i(20),b(20)},[a?.filial,m,l?.busca,l?.filial]);const E=de(),[L,N]=s.useState(!1),F=w=>{N(!0),setTimeout(()=>{E(`/portaria/controle/detalhes-registro?order=${w}`)},500)},R=()=>{f("aguardando entrada")},C=()=>{j([]),f("aguardando saida"),i(10)};return e.jsxs(Je.container,{children:[e.jsxs(Je.container_int,{children:[e.jsx(je,{titulo:"Entrada",click:R,isvalid:m==="aguardando entrada"}),e.jsx(je,{titulo:"Saida",click:C,isvalid:m=="aguardando saida",children:" "})]}),e.jsx(tt,{lista:g,hendleDetalhesPedidos:F,hendleBusca:y,visibleCount:r,loading:x}),L&&e.jsx(pe,{})]})}const ie={container:t.div`
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 24px 56px;
        background-color: #f8fafc;
        width: 100%;

        @media (max-width: 768px) {
            padding: 15px;
        }
    `,FormSub:t.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: #ffffff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    `,paginator:t.div`
        width: 100%;
        display: flex;
        justify-content: space-between; // Busca na esquerda, Paginador na direita
        align-items: center;
        flex-wrap: wrap; // Quebra linha em telas pequenas (mobile)
        gap: 15px;
        margin-bottom: 10px;
    `,InputWrapper:t.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1; // Faz a busca ocupar o espaço disponível
        max-width: 400px; // Limita o tamanho para não ficar gigante
    `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
        width: 100%; // Ocupa 100% do Wrapper
        height: 40px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid ${({hasError:a})=>a?"#ef4444":"#e2e8f0"};
        padding: 0 16px;
        font-size: 0.875rem;
        transition: all 0.2s ease;

        &:focus {
            outline: none;
            border-color: #6366f1;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        &::placeholder {
            color: #94a3b8;
        }
    `,Erros:t.span`
        color: #ef4444;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 4px;
    `,titulo:t.h1`
        font-size: 1.5rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 10px;
    `},Ee={TableContainer:t.div`
        width: 100%;
        overflow-x: auto;
        margin-top: 15px;
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      `,Table:t.table`
        width: 100%;
        border-collapse: collapse;
        background-color: #fff;
        font-family: "Inter", sans-serif;
    
        th, td {
          padding: 10px 15px;
          text-align: left;
          border-bottom: 1px solid #ddd;
          font-size: 0.8rem;
        }
    
        th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #333;
        }
    
        tr:hover {
          background-color: #f1f5ff;
          transition: background-color 0.2s ease-in-out;
        }
    
        tr:last-child td {
          border-bottom: none;
        }
      `,trBTN:t.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `},fa=({lista:a,handleDelete:n,handleBloqueio:i})=>{const c=U()?.permissoes;return e.jsx(Ee.TableContainer,{children:e.jsxs(Ee.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Acesso"}),e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Nome"}),e.jsx("th",{children:"Telefone"}),e.jsx("th",{children:"Data Criação"}),e.jsx("th",{children:"Tipo de Acesso"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:a.flatMap((l,g)=>e.jsxs("tr",{children:[e.jsx("td",{children:l.ativo?"Permitido":"Bloqueado"}),e.jsx("td",{children:l?.imagem?e.jsx(te,{sx:{width:40,height:40,objectFit:"contain"},alt:l?.nomeCompleto,src:l?.imagem}):e.jsx(te,{sx:{width:40,height:40,objectFit:"contain"},alt:l?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsx("td",{children:l?.nomeCompleto}),e.jsx("td",{children:l?.numeroTelefone}),e.jsx("td",{children:new Date(l?.dataCriacao).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}),e.jsx("td",{children:l?.recorrencia?.nome}),e.jsx("td",{children:l?.ocupacao}),e.jsx("td",{children:e.jsx(Ee.trBTN,{children:c?.includes("DELETE_GLOBAL")?e.jsxs(e.Fragment,{children:[l.ativo?e.jsx(D,{"aria-label":"LockIcon",onClick:()=>i(l.id,"BLOQUEIO"),sx:{color:"green","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(Dt,{})}):e.jsx(D,{"aria-label":"LockOpenIcon",onClick:()=>i(l.id,"DESBLOQUEIO"),sx:{color:"red","&:hover":{backgroundColor:"#e0e0e0"}},children:e.jsx(Lt,{})}),e.jsx(D,{"aria-label":"deletar",onClick:()=>n(l?.id),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(fe,{})})]}):e.jsx(D,{disabled:!0,children:e.jsx(fe,{})})})})]},g))})]})})},ga=()=>{const[a,n]=s.useState([]),[i,r]=s.useState(""),[c,l]=s.useState(0),[g,j]=s.useState(""),[x,S]=s.useState(""),[m,f]=s.useState(""),b=U(),A=async C=>{const w=await ge.listaVisistante(i,C);w&&(n(w.content),l(w.tatalPages))};s.useEffect(()=>{i.trim()===""&&A()},[i]);const y=(C,w)=>{switch(F(!0),w){case"BLOQUEIO":f("BLOQUEIO");break;case"DESBLOQUEIO":f("DESBLOQUEIO");break}S(`Deseja realmente fazer ${w} o item de ID ${C}`),j(C)},E=C=>{f("DELETE"),j(C),S(`Deseja realmente deletar o item de ID ${C}`),F(!0)},L=async()=>{const C=await Ne.deletarVisitante(g,b?.id,m);Q(C?.msg,"success"),F(!1),await A(),F(!1)},[N,F]=s.useState(!1),R=(C,w)=>{const T=w-1;A(T)};return e.jsx(e.Fragment,{children:e.jsxs(ie.container,{children:[e.jsx(ie.titulo,{children:"Lista de Visitantes"}),e.jsxs(ie.FormSub,{children:[e.jsxs(ie.paginator,{children:[e.jsx(ie.InputWrapper,{children:e.jsx(ie.Campos,{placeholder:"🔍 Buscar visitante por nome ou documento...",value:i,onChange:C=>r(C.target.value),onKeyDown:C=>C.key==="Enter"&&A()})}),e.jsx(Fe,{totalPage:c,handleNextPage:R})]}),a.length===0?e.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#64748b"},children:"Nenhum visitante encontrado."}):e.jsx(fa,{lista:a,handleDelete:E,handleBloqueio:y})]}),N&&e.jsx(Oe,{handleCancel:()=>F(!1),handleConfirm:L,message:x,ativoBtn:N})]})})},Re={container:t.main`
    position: relative;
   height: 100vh;
    `,Container_int:t.main`
      padding:0 26px;
      @media screen and (max-width: 560px) {
        padding: 0;
      }


    
  `,container_int:t.div`
  width: 100%;
     height: 100vh;

  `,placeholder:t.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    color: #ccc;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
      color: #007bff;
    }

    p {
      font-size: 16px;
      color: #000;
    }
  `},ja=()=>{const a=Ke();return s.useEffect(()=>{window.scrollTo(0,0)},[a]),e.jsxs(Re.container,{children:[e.jsx(Nt,{}),e.jsx(Re.container_int,{children:a?e.jsx(Qe,{}):e.jsxs(Re.placeholder,{children:[e.jsx("h2",{children:"Bem-vindo às Configurações ⚙️"}),e.jsx("p",{children:"Selecione uma opção no menu para começar."})]})})]})},v={container:t.div`
    min-height: 70vh;
   display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px 56px;
    height: 100vh;
    width: 100%;

   @media screen {
    padding: 10px 10px;
   }
  

    
  `,Chip:t.div`
    padding: 5px;
    border-radius: 5px;
    color:${({color:a})=>a||"blue"} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,titulo:t.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 5px;
    color: var(--cor-titulo);
  `,FormSub:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    `,label:t.label`
    font-size: 0.95rem;        // tamanho equilibrado
    font-weight: 500;          // levemente forte, mas não pesado
    color: var(--cor-texto-campos);            // tom claro suave (ótimo em fundos escuros)
    font-family: "Inter", sans-serif;
    letter-spacing: 0.3px;     // pequeno espaçamento entre letras
    margin-bottom: 6px;        // dá um respiro entre label e input
    display: inline-block;
    `,CamposInput:t.div`
    display: flex;
    position: relative;
    gap: 10px;
     margin: 5px 10px;
    `,Select:t.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px; 
     margin: 5px 0;
    `,Campos:t.input.withConfig({shouldForwardProp:a=>a!=="hasError"})`
    width: 100%;
    height: 38px;
    border:1px solid #d6d6d6;
    background-color:#FFF;
    border-radius: 5px;
    border: 1px solid ${({hasError:a})=>a?"#ff4d4f":"#ccc"};
    &:focus {
        outline: none;
        border-color: ${({hasError:a})=>a?"#ff4d4f":"#007BFF"};
    }
    padding:5px;


    `,Options:t.option``,Erros:t.div`
    position: absolute;
    color:#ff4d4f;
     color: #ff4d4f;
      font-size: 12px;
      margin: 0px 10px;
     
    
    `,TableContainer:t.div`
    width: 100%;
    overflow-x: auto;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  `,Table:t.table`
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-family: "Inter", sans-serif;  
  
    th, td {
      padding: 10px 13px;
      text-align: left;
      border-bottom: 1px solid #ddd;
      font-size: 0.7rem;
      margin: 0;
    }

    th {
      background-color: #f8f9fa;
      font-weight: 600;
      color: #333;
    }

    tr{
      width: 100%;
    }
    tr:hover {
      background-color: #f1f5ff;
      transition: background-color 0.2s ease-in-out;
      
    }

    tr:last-child td {
      border-bottom: none;
    }
    td{
            cursor: pointer;

    }
  `,trBTN:t.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  `,erro:t.div`
    padding: 10px;
    
  `,imagemArea:t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 480px;
  `,tituloLabel:t.label`
  font-size: 16px;

  `,imgemVisitante:t.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
  `,imgem:t.img`
    width: 280px;
    height: 200px;
    object-fit: cover;
  `,divArea:t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
    
  `,btnDownload:t.div`
   position: absolute;
   align-items: center;
   padding: 10px;
   right: 0;
   top: 20px;
    
  `,visitante:t.div`
    display: flex;
    align-items: center;
    gap: 10px;
     margin: 5px 10px;
    `},ba=()=>{const[a,n]=s.useState([]),[i,r]=s.useState(!1),[c,l]=s.useState(""),[g,j]=s.useState(""),[x,S]=s.useState(""),[m,f]=s.useState(!0),b=U(),[A,y]=s.useState(!1),[E,L]=s.useState(!1),[N,F]=s.useState(0),[R,C]=s.useState(),w=async h=>{L(!0);const B=await ge.listHistory(g,h);B&&setTimeout(()=>{L(!1),n(B.content),F(B?.totalPages)},1e3)};s.useEffect(()=>{g.trim()===""&&w()},[g]);const T=h=>{S(`Deseja realmente deletar o item ${h.id}`),r(!0),l(h.id)},W=async()=>{await ge.deletar(c,b?.id),S(`${c} Deletado com sucesso`),f(!1),await w(),r(!1)},z=b?.permissoes,u=h=>{y(!0),C(h)},O=(h,B)=>{const ae=B-1;w(ae)},Z=async(h,B)=>{const ne=await(await fetch(h)).blob(),oe=window.URL.createObjectURL(ne),$=document.createElement("a");$.href=oe,$.download=B,document.body.appendChild($),$.click(),document.body.removeChild($),window.URL.revokeObjectURL(oe)},P=h=>{switch(h){case"AGUARDANDO_ENTRADA":return"blue";case"AGUARDANDO_SAIDA":return"#787018";case"SAIDA_LIBERADA":return"green";default:return"red"}};return e.jsx(e.Fragment,{children:e.jsxs(v.container,{children:[e.jsx(v.titulo,{children:"Histórico Portaria"}),e.jsxs(v.FormSub,{children:[e.jsxs(v.CamposInput,{children:[e.jsx(De,{variant:"outlined",size:"small",placeholder:"Buscar...",value:g,onChange:h=>j(h.target.value)}),e.jsx(D,{onClick:w,sx:{backgroundColor:"#1976d2",color:"#fff","&:hover":{backgroundColor:"#1565c0"}},children:e.jsx(Te,{})}),e.jsx(Fe,{totalPage:N,handleNextPage:O})]}),e.jsx(v.TableContainer,{children:e.jsxs(v.Table,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Avatar"}),e.jsx("th",{children:"Protocolo"}),e.jsx("th",{children:"Nome do Visitante"}),e.jsx("th",{children:"Ocupação"}),e.jsx("th",{children:"Placa"}),e.jsx("th",{children:"Bloco"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Data Entrada"}),e.jsx("th",{children:"Data Saída"}),e.jsx("th",{children:"Fiscal Entrada"}),e.jsx("th",{children:"Fiscal Saída"}),e.jsx("th",{children:"Criador"}),e.jsx("th",{})," "]})}),e.jsxs("tbody",{children:[a.length==0&&e.jsx(v.erro,{children:"Sem dados"}),a.flatMap((h,B)=>e.jsxs("tr",{children:[e.jsx("td",{children:h?.visitante?.imagem?e.jsx(te,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:h?.visitante?.imagem}):e.jsx(te,{sx:{width:35,height:35,objectFit:"contain"},alt:h?.visitante?.nomeCompleto,src:"/static/images/avatar/2.jpg"})}),e.jsxs("td",{children:["#",h?.protocolo||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})]}),e.jsx("td",{children:h?.nomeCompleto||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.visitante?.ocupacao||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.placaVeiculo||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.bloco||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.status.replace("_"," ")||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataEntrada?new Date(h.dataEntrada).toLocaleString("pt-BR"):e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.dataSaida?new Date(h.dataSaida).toLocaleString("pt-BR"):e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaEntrada||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.nomeFiscaSaida||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:h?.criador?.nome||e.jsx(v.Chip,{color:P(h?.status),children:"Aguardando processamento"})}),e.jsx("td",{children:e.jsxs(v.trBTN,{children:[h?.imagemEntrada?e.jsx(D,{onClick:()=>u(h),children:e.jsx(et,{})}):e.jsx(D,{disabled:!0,children:e.jsx(Ft,{})}),z?.includes("DELETE_GLOBAL")&&e.jsx(D,{"aria-label":"deletar",onClick:()=>T(h),sx:{color:"black","&:hover":{backgroundColor:"#f0f0f0"}},children:e.jsx(fe,{})})]})})]},B))]})]})})]}),i&&e.jsx(Oe,{handleCancel:()=>r(!1),handleConfirm:W,message:x,ativoBtn:m}),A&&e.jsxs(ot,{cancelar:()=>y(!1),children:[e.jsxs(v.visitante,{children:[e.jsx(v.imgemVisitante,{src:R?.visitante?.imagem}),e.jsxs("h5",{children:["Visitante: ",R?.nomeCompleto]})]}),e.jsxs(v.imagemArea,{children:[R?.imagemEntrada&&e.jsxs(v.divArea,{children:[e.jsxs(v.tituloLabel,{children:["Entrada: ",new Date(R?.dataEntrada).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})]}),e.jsx(v.btnDownload,{children:e.jsx(D,{onClick:()=>Z(R?.imagemEntrada,"ImagemEntrada"),children:e.jsx(ke,{sx:{color:"#75affa"}})})}),e.jsx(v.imgem,{src:R?.imagemEntrada,alt:"Imagem entrada"})]}),R?.imagemSaida&&e.jsxs(v.divArea,{children:[e.jsxs(v.tituloLabel,{children:["Saida ",new Date(R?.dataSaida).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})," "]}),e.jsx(v.btnDownload,{children:e.jsx(D,{onClick:()=>Z(R?.imagemSaida,"ImagemSaida"),children:e.jsx(ke,{sx:{color:"#75affa"}})})}),e.jsx(v.imgem,{src:R?.imagemSaida,alt:"Imagem saida"})]})]})]}),E&&e.jsx(pe,{})]})})};function wa(){const a=U();function n(l,g){return s.lazy(()=>Promise.all([l(),new Promise(j=>setTimeout(j,g))]).then(([j])=>j))}const i=n(()=>Ae(()=>import("./controledeAcesso-BqErkD-J.js"),__vite__mapDeps([0,1,2,3,4,5,6])),500),r=n(()=>Ae(()=>import("./registroPortariaAntigo-BviOCXw5.js"),__vite__mapDeps([7,1,2,5,6,8,4,9])),500),c=n(()=>Ae(()=>import("./visualizar_registro-AMIu5YBd.js"),__vite__mapDeps([10,1,2,5,6,4,8,9])),500);return e.jsxs(ut,{children:[e.jsx(_,{index:!0,element:e.jsx(ua,{permissoes:a?.perfil})}),e.jsxs(_,{path:"/active",element:e.jsx(G,{children:e.jsx(Ge,{},Date.now())}),children:[e.jsx(_,{path:"pendentes",element:e.jsx(G,{allowedPermissions:["REGISTRAR_ENTRADA"],children:e.jsx(ma,{},Date.now())})}),e.jsx(_,{path:"gerais",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(We,{},Date.now())})})]}),e.jsxs(_,{path:"/configuracao",element:e.jsx(ja,{}),children:[e.jsx(_,{path:"visitantes",element:e.jsx(G,{allowedPermissions:["GERENCIAR_USUARIOS"],children:e.jsx(ga,{},Date.now())})}),e.jsx(_,{path:"historico",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(ba,{},Date.now())})}),e.jsx(_,{path:"geral",element:e.jsx(G,{allowedPermissions:["GERENCIAR_REGISTROS"],children:e.jsx(We,{},Date.now())})}),e.jsx(_,{path:"novo",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(He,{},Date.now())})})]}),e.jsx(_,{path:"/teste",element:e.jsx(Ge,{},Date.now())}),e.jsxs(_,{path:"/controle",element:e.jsx(G,{children:e.jsx(i,{},Date.now())}),children:[e.jsx(_,{path:"registro-portaria-cd",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(He,{},Date.now())})}),e.jsx(_,{path:"registro",element:e.jsx(G,{allowedPermissions:["CRIAR_REGISTRO"],children:e.jsx(r,{},Date.now())})}),e.jsx(_,{path:"meus-registros",element:e.jsx(G,{allowedPermissions:["VISUALIZAR_REGISTRO"],children:e.jsx(Qt,{},Date.now())})}),e.jsx(_,{path:"detalhes-registro",element:e.jsx(G,{allowedPermissions:["REGISTRAR_SAIDA","REGISTRAR_ENTRADA","VISUALIZAR_REGISTRO"],children:e.jsx(c,{},Date.now())})})]}),e.jsx(_,{path:"*",element:e.jsx(Ut,{})})]})}const Ea=Object.freeze(Object.defineProperty({__proto__:null,default:wa},Symbol.toStringTag,{value:"Module"}));export{Ea as P,o as T,we as c,ze as s};

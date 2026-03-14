const menuConfig = [
  {
    label: "Configurações",
    permission:"ALTERAR_CONFIGURACOES",
    items: [
      { label: "Perfis", to: "/required/perfil", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Permissões", to: "/required/access", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Logs", to: "/required/logs", permission: "LISTA_GERAL" },
      { label: "Outros", to: "/required/outros", permission: "ALTERAR_CONFIGURACOES" }
    ]
  },
  {
    label: "Portaria",
    permission:"ALTERAR_CONFIGURACOES",
    items: [
      { label: "Solicitar Entrada", to: "/required/novo", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Registro Gerais", to: "/required/geral", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Entradas Pendentes", to: "/required/logs", permission: "LISTA_GERAL" },
    ]
  },
  {
    label: "Visitante",
    permission:"ALTERAR_CONFIGURACOES",
    items: [
      { label: "Cadastro", to: "/required/perfil", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Visitantes", to: "/required/permissoes", permission: "ALTERAR_CONFIGURACOES" },
      { label: "Historico", to: "/required/historico", permission: "LISTA_GERAL" },
    ]
  },
  {
    label: "Usuario",
    permission:"GERENCIAR_USUARIOS",
    items: [
      { label: "Cadastro", to: "/required/cadastro/usuario", permission: "CADASTRO_USUARIO" },
      { label: "Usuarios Cadastrados", to: "/required/usuarios/lista", permission: "GERENCIAR_USUARIOS" },
      { label: "Resetar Senha", to: "/required/reset", permission: "EDITAR_USUARIO" }
    ]
  }
];

export default menuConfig;

export const resolvers = {
  Query: {
    contatos: async (obj, args, context, info) =>
      await context.usuarioCadastroService.contatos(), // lista todos os contatos
  },
  Mutation: {
    criarContato: async (_, { data }, context) =>
      await context.usuarioCadastroService.criarContato(data),
    atualizarContato: async (_, { id, data }, { usuarioCadastroService }) =>
      await usuarioCadastroService.atualizarContato(id, data),
    deletarContato: async (_, { filtro }, { usuarioCadastroService }) =>
      await usuarioCadastroService.deletarContato(filtro),
  },
};

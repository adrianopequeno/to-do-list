import usuarioCadastroService from "../../../services/usuarioCadastroService.js";

export const resolvers = {
  Query: {
    contatos: async () => usuarioCadastroService.contatos(), // lista todos os contatos
  },
  Mutation: {
    criarContato: async (_, { data }) =>
      await usuarioCadastroService.criarContato(data),
    atualizarContato: async (_, { id, data }) =>
      await usuarioCadastroService.atualizarContato(id, data),
    deletarContato: async (_, { filtro }) =>
      await usuarioCadastroService.deletarContato(filtro),
  },
};

import db from "../db/index.js";

class UsuarioCadastroService {
  contatos = async () => await db("contatos");

  criarContato = async (data) => {
    return await (
      await db("contatos").insert(data).returning("*")
    )[0];
  };

  atualizarContato = async (id, data) => {
    return await (
      await db("contatos").where({ id }).update(data).returning("*")
    )[0];
  };

  deletarContato = async (filtro) => {
    if (filtro.id) {
      return await db("contatos").where({ id: filtro.id }).delete();
    }
    if (filtro.email) {
      return await db("contatos").where({ email: filtro.email }).delete();
    }

    throw new Error("Favor passar um parametro!!!");
  };
}

export default new UsuarioCadastroService();

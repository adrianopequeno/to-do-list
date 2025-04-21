export function up(knex) {
  return knex.schema.createTable("contatos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("email").notNull().unique();
    table.string("telefone").notNull();
  });
}

export function down(knex) {
  return knex.schema.dropTable("contatos");
}

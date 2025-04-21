import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./src/graphql/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(url));

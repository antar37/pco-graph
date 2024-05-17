import { readFileSync } from "fs";
import gql from "graphql-tag";
import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "./resolvers";
const typeDefs = gql(readFileSync("schema.graphql", "utf8"));

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: "/graphql",
  logging: true,
  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export {
  handleRequest as GET,
  handleRequest as OPTIONS,
  handleRequest as POST,
};


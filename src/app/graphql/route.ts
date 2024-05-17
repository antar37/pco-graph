import { readFileSync } from "fs";
import gql from "graphql-tag";
import { createSchema, createYoga } from "graphql-yoga";
import { join } from "path";
import { resolvers } from "./resolvers";

let handler = null;
try {
  const typeDefs = gql(
    readFileSync(
      join(process.cwd(), "src/app/graphql", "schema.graphql"),
      "utf8"
    )
  );

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
  handler = handleRequest;
} catch (error) {
  console.error("Error reading schema.graphql:", error);
}

export { handler as GET, handler as OPTIONS, handler as POST };


import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { NextRequest } from 'next/server';
import { resolvers } from './resolversTemplate';
import typeDefs from './typeDefs';
// req has the type NextRequest


export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, { context: async req => ({ req }) });

export async function GET(request: any) {
  return handler(request);
}

export async function POST(request: any) {
  return handler(request);
}
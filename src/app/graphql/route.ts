import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { makeExecutableSchema } from '@graphql-tools/schema'
import { NextRequest } from 'next/server';
import typeDefs from './typeDefs'
import resolvers from './resolvers'
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
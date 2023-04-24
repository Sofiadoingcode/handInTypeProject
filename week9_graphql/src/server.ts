import { ApolloServer } from '@apollo/server';
import http from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';
import express from 'express';
import cors from 'cors';
import body_parser_pkg from 'body-parser';
const { json } = body_parser_pkg;

import { people } from './data'
import Mutation from './resolvers/Mutation';
import Query from './resolvers/Query';

interface MyContext {
    people: typeof people;
};

const resolvers = {
    Mutation, 
    Query,
};

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use('/graphql', 
cors<cors.CorsRequest>(),
json(),
expressMiddleware(server, {
  context: async() => ({
    people
})},
)
);


await new Promise<void>((resolve) => httpServer.listen({ port: 4001 }, resolve));
console.log(`🚀 GraphQL Server ready at http://localhost:4001/graphql`);
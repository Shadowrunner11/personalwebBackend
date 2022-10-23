"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.module = void 0;
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;
const resolvers = {
    Query: {
        hello: () => 'world',
    },
};
const app = (0, express_1.default)();
exports.module = app;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers,
});
server
    .start()
    .then(() => {
    server.applyMiddleware({ app });
});
app.get('/', (_, res) => {
    res.send('Hello World!');
});

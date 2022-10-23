const express = require('express');
const { ApolloServer } = require('apollo-server-express');

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

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .start()
  .then(()=>{
    server.applyMiddleware({ app });
  });


app.get('/', (_, res) => {
  res.send('Hello World!')
})

module.exports = app;




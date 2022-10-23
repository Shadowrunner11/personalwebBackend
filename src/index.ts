import express from 'express';
import { ApolloServer } from 'apollo-server-express';

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


export  {app as module}





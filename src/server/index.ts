import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from '../controllers/graphql/resolvers/Proyects';
import typeDefs from '../graphql/types/Proyect';

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


export default app




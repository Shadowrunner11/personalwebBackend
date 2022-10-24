import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import resolvers from '../controllers/graphql/resolvers/Proyects';
import typeDefs from '../graphql/types/Proyect';
import upload from "express-fileupload";
import drive from '../data/deta/drives';
import Proyect from '../controllers/graphql/actuators/Proyect';


const app = express();
app.use(upload())
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.get('/blobs', async(_, res)=>{
  const response = await Proyect.getPhotos()
  res.json({response})
})

app.get('/list',async (_, res)=>{
  const response = await drive.list()
  res.json(response)
})

server
  .start()
  .then(()=>{
    server.applyMiddleware({ app });
  });


app.get('/', (_, res) => {
  res.send('Hello World!')
})


export default app




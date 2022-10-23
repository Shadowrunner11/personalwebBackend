import { ApolloError } from "apollo-server-express"
import ProyectActuator from "../actuators/Proyect"

const resolvers = {
  Query:{
    getProyects: ()=> ProyectActuator.getProyects()
      .catch(err=>{ throw new ApolloError(err)}),
  },
  Mutation:{
    createProyect: (_,args)=> ProyectActuator.createProyect(args)
      .catch(err=>{ throw new ApolloError(err)})
  }
}

export default resolvers
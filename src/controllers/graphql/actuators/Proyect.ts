import { ArrayType, ObjectType } from "deta/dist/types/types/basic"
import { dbProyects } from "../../../data/deta/detabase"

class Proyect{
  static async getProyects(){
    try {
      const {items} = await dbProyects.fetch()
      return items.map(({input, key})=>({id: key, ...(input as ObjectType)}))      
    } catch (error) {
      console.log("🚀 ~ file: Proyect.ts ~ line 10 ~ Proyect ~ getProyects ~ error", error)
      throw error
    }
  }

  static async createProyect(proyect: string | number | boolean | ArrayType | ObjectType){
    try {
      const {input, key: id} = await dbProyects.put(proyect)
      if(!input)
        throw new Error('No data')
      return {id, ...(input as ObjectType)}
      
    } catch (error) {
    }
      
  }
}

export default Proyect
import Base from "deta/dist/types/base"
import { ArrayType, ObjectType } from "deta/dist/types/types/basic"
import { dbPhotos, dbProyects } from "../../../data/deta/detabase"

class Proyect{
  static async getProyects(){
    try {
     return this.getGeneric(dbProyects)   
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

  static async getGeneric(db: Base){
    const {items} = await db.fetch()
    console.log("🚀 ~ file: Proyect.ts ~ line 29 ~ Proyect ~ getGeneric ~ items", items)
    return items.map((data)=>({id: data.key, ...(data as ObjectType)}))
  }

  static async getPhotos(){
    try {
      const data  = await this.getGeneric(dbPhotos)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
  }
}

export default Proyect
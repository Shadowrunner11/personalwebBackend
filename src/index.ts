import app  from "./server";
import { buildEnviroment, enviroment, server } from "./config";

export = app

if(buildEnviroment !== enviroment.Prod)
  app.listen(server.port, server.host,()=>{
    console.log(`Listening on port http://${server.host}:${server.port}`)
  })

  

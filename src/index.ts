import express from "express"
import { config } from "dotenv"
import dbConnect from "./Connections/mongoConnection"
import routes from './routes/route'
config()

const app = express()
app.use(express.json())
app.use('/',routes)

const Server = ()=>{
    try {
        dbConnect(process.env.connectionUrl!).then(()=>{
            app.listen(process.env.Port,()=>{
                console.log('server is running') 
            })
        })
    } catch (error) {
        console.log(error);
        
    }
}
Server()

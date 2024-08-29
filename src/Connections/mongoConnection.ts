import { error, log } from "console";
import { connect } from "mongoose"

const dbConnect = async (url: string)=>{
    try {
        await connect(url).then(()=>{
            console.log("database connected"); 
        }).catch((error)=>{
            console.log(error);
            
        })
    } catch (error) {
        console.log(error);
        
    }
}

export default dbConnect
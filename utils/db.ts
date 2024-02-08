import mongoose from "mongoose";


let isConnected:boolean=false;

async function connectToDB(){
    if(isConnected){
        console.log('DB Already Connected')
        return;
    }
    try {
        await  mongoose.connect(process.env.DB_URI,{
            dbName:'test'
        })
        console.log('connected successfully');
        isConnected=true;
        return true;
    } catch (error) {
        console.log(error)
    }
 
}

export default connectToDB
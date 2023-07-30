import mongoose, { connect } from "mongoose";
let isConnected = false; // track the connection state
export const connectToDb = async () =>{
     mongoose.set('strictQuery', true);
     if(isConnected){
        console.log("we are connected with the database");
        return;
     }
     try {
        await mongoose,connect(process.env.MONGODB_URI,{
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected= true;
        console.log('MongoDb connected');
     } catch (error) {
        console.log('error occurred connecting to MongoDb', error);
     }
}
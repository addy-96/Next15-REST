import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI ;

const connect = async () => {
    const connectionstate = mongoose.connection.readyState;

    if(connectionstate===1){
        console.log('Db already connected');
        return;
    }

    if(connectionstate===2){
        console.log('db connecting.....');
        return;
    }

    try{
        mongoose.connect(MONGODB_URI!, {
            dbName: 'next14restapii',
            bufferCommands: true
        });
        console.log('db connected after trying!');
    }catch (err : any){
        console.log(err);
        throw new Error(err);
    }
}
export default connect;
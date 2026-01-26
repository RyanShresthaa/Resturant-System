import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
      dbName: "Resturant"  
    }).then(()=>{
        console.log("Connected Successfully");
    }).catch((err)=>{
        console.log(`Some error while connecting to database! ${err}`);
        console.log(err);
    });
}

export default dbConnection;
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
const app = express();
import 'dotenv/config'


connectDB();

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error)=> {
//             console.error("Error: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT)
//     } catch (error) {
//         console.error("ERROR: ",error);
//         throw Error;
//     }
// })()
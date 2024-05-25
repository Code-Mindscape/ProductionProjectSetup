import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/index.js";
import {app} from "./app.js";
import 'dotenv/config'


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })

})














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
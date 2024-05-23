import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();

(async ()=>{
    try {
        mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error)=> {
            console.error("Error: ", error)
            throw error
        })
        app.listen(process.env.PORT)
    } catch (error) {
        console.error("ERROR: ",error);
        throw Error;
    }
})()
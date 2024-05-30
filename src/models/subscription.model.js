import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type: mongoose.Types.ObjectId, //user itself
        ref: "User"
    }, 
    channel:{
        type: mongoose.Types.ObjectId, //channel itself
        ref: "User"
    },
    
},{timestamps: true})

export const Subscription = mongoose.model("Subscription", subscriptionSchema);

import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    email:{type:String,required:true},
    password: {type:String, required: true},

},{timestamps:true})
export const User = models.User ||model('User',ModelSchema)
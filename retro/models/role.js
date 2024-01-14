import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    role:{type:String,required:true},
    email:{type:String,required:true},


})
export const Role = models.Role ||model('Role',ModelSchema)
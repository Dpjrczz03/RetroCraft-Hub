import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    chatid:{type:String, required: true},
    message:{type: String},
    email:{type:String,required:true},


})
export const Chat = models.Chat ||model('Chat',ModelSchema)
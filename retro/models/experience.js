import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    project:{type:String, required: true},
    position: {type:String, required:true},
    duration: {type: String,required:true},
    email:{type:String,required:true},

})
export const Experience = models.Experience ||model('Experience',ModelSchema)
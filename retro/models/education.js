import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    degree:{type:String, required: true},
    college: {type:String, required:true},
    completed: {type: Number,required:true},
    email:{type:String,required:true},

})
export const Education = models.Education ||model('Education',ModelSchema)
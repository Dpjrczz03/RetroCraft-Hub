import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    name:{type: String,required: true},
    age: {type: Number},
    gender: {type: String},
    phone: {type: Number},
    nationality: {type: String},
    email:{type:String,required:true},

})
export const Personalinfo = models.Personalinfo ||model('Personalinfo',ModelSchema)
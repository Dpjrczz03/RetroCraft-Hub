import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    // company: {type: String, unique:true, required: true},
    designation:  {type: String, required:true},
    phone: {type: Number, unique:true, required: true},
    address: {type: String, required: true},
    user: {type:String,required:true,unique:true}
})
export const Admin = models.Admin ||model('Admin',ModelSchema)
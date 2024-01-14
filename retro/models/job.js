import mongoose, {model, Schema,models} from "mongoose";

const ModelSchema = new Schema({
    jobtitle: {type: String, required: true},
    company: {type: String, unique:true, required: true},
    stipend:  {type: Number, required: true},
    opening: {type: Number, required: true},
    location: {type: String, required: true},
    admin: {type:mongoose.Types.ObjectId, ref:'Admin'},
    user: {type:String,required:true,unique:true}
})
export const Job = models.Job ||model('Job',ModelSchema)
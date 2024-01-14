import {mongooseConnect} from "../../../lib/mongoose";
import {Personalinfo} from '../../../models/personalinfo';

export default async function handle(req, res) {
    const method = req.method
    await mongooseConnect()
    if (method === 'POST') {
        const  {name, age, gender, phone, nationality,email} = req.body
        const personalinfo = await Personalinfo.create({
             name, age, gender, phone, nationality,email
        })
        res.json(personalinfo)
    }
    if(method === 'GET'){
        res.json( await Personalinfo.find())
    }
}
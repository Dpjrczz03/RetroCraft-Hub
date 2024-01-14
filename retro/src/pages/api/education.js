import {mongooseConnect} from "../../../lib/mongoose";
import {Education} from "../../../models/education";
import {Job} from "../../../models/job";

export default async function handle(req, res) {
    const method = req.method
    await mongooseConnect()
    if (method === 'POST') {
        const  {degree, college, completed,email} = req.body
        const educationinfo = await Education.create({
             degree, college, completed,email
        })
        res.json(educationinfo)
    }
    if(method === 'GET'){
        res.json( await Education.find())
    }
}
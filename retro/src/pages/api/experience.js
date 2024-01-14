import {mongooseConnect} from "../../../lib/mongoose";
import {Experience} from "../../../models/experience";
import {Education} from "../../../models/education";

export default async function handle(req, res) {
    const method = req.method
    await mongooseConnect()
    if (method === 'POST') {
        const  {project,position,duration,email} = req.body
        const experienceinfo = await Experience.create({
             project,position,duration,email
        })
        res.json(experienceinfo)
    }
    if(method === 'GET'){
        res.json( await Experience.find())
    }
}
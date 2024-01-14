import {mongooseConnect} from "../../../lib/mongoose";
import {Role} from '../../../models/role';

export default async function handle(req, res) {
    const method = req.method
    await mongooseConnect()
    if (method === 'POST') {
        const role = req.body.role
        const email = req.body.email
        const roleinfo = await Role.create({
            role, email
        })
        res.json(roleinfo)
    }
    if(method === 'GET'){
        res.json( await Role.find())
    }
}
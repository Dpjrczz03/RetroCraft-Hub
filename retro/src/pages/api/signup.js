import mongoose from "mongoose";
import {mongooseConnect} from "../../../lib/mongoose";
import {User} from "../../../models/user";
import bcrypt from 'bcryptjs'


export default async function handle(req,res){

    const method =req.method
    await mongooseConnect()
    if(method === 'POST'){
        const {email,password} = req.body
        const hashedpass = await bcrypt.hash(password,10)
        const userinfo = await User.create({
             email,password:hashedpass
        })
        res.json(userinfo)
    }
    if(method === 'GET'){
        res.json( await User.find())
    }
}
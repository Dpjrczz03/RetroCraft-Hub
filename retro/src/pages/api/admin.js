import mongoose from "mongoose";
// import clientPromise from "../../../lib/mongodb";
import {mongooseConnect} from "../../../lib/mongoose";
import {Admin} from "../../../models/admin";


export default async function handle(req,res){

    const method =req.method
    await mongooseConnect()
    if(method === 'POST'){
        const {designation, phone, address, user} = req.body
        const admininfo = await Admin.create({
             designation, phone, address , user
        })
        res.json(admininfo)
    }
}
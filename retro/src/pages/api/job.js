import mongoose from "mongoose";
// import clientPromise from "../../../lib/mongodb";
import {mongooseConnect} from "../../../lib/mongoose";
import {Job} from "../../../models/job";

export default async function handle(req,res){
    const method =req.method
    await mongooseConnect()
    if(method === 'POST'){
        const {jobtitle,company,  stipend, opening, location,user} = req.body
        const jobinfo = await Job.create({
            jobtitle,company,  stipend, opening, location,user
        })
        res.json(jobinfo)
    }
    if(method === 'GET'){
        res.json( await Job.find())
    }
}
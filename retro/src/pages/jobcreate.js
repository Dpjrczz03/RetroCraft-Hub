'use client';
import React, {useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {useSession} from "next-auth/react";
import Nav from "@/components/nav";
function Jobcreate(props) {
    const {data: session} = useSession()
    const [jobtitle, setJobtitle]=useState('')
    const [company, setCompany] = useState('')
    const [stipend, setStipend]=useState('')
    const [opening, setOpening]=useState('')
    const [location, setLocation]=useState('')
    const [jobCreated, setJobCreated]=useState(false)
    const router = useRouter()
    const handlesubmit=async (e)=>{
        e.preventDefault()
        const user= session?.user?.email
        const data = {jobtitle, company, stipend, opening, location,user}
        await axios.post('api/job',data)
        setJobCreated(true)
    }
     if (session === null){
       router.push('/loginpage')
  }
    if (jobCreated){
        router.push('/admindashboard')
    }
    return (
        <>
            <Nav/>
        <div>
            <form onSubmit={handlesubmit}>
                <div className="flex items-center justify-center">
                    <div
                        className="p-8  mt-10 inputarea">
                        <div className="containeradmin flex-col gap-10 flex ">
                            <div className="flex flex-col items-center gap-2">
                                <label>Job Title: </label>
                                <input className="p-1" type="text" placeholder="Enter job title" value={jobtitle}
                                       onChange={(e) => {
                                           setJobtitle(e.target.value)
                                       }}/>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <label>Company: </label>
                                <input className="p-1" type="text" placeholder="Enter your company name" value={company}
                                       onChange={(e) => {
                                           setCompany(e.target.value)
                                       }}/>
                            </div>

                            <div className="flex flex-col items-center gap-2 ">
                                <label>Stipend: </label>
                                <input className="p-1" type="number" placeholder="Enter stipend for the job"
                                       value={stipend}
                                       onChange={(e) => {
                                           setStipend(e.target.value)
                                       }}/>
                            </div>
                            <div className="flex flex-col items-center gap-2 ">
                                <label>No. of Openings </label>
                                <input className="p-1" type="number" placeholder="Enter number of openings" value={opening}
                                       onChange={(e) => {
                                           setOpening(e.target.value)
                                       }}/>
                            </div>
                            <div className="flex flex-col items-center gap-2 ">
                                <label>Location: </label>
                                <textarea className="p-1" placeholder="Enter work location" value={location}
                                          onChange={(e) => {
                                              setLocation(e.target.value)
                                          }}/>
                            </div>

                            <button className="text-center text-xl submitbtn py-1 mt-5" type="submit">Add Job</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
            </>
    );
}

export default Jobcreate;
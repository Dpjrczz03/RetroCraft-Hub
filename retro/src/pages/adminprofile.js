
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {redirect} from "next/navigation";
import Link from "next/link";
import Nav from "@/components/nav";

function Adminprofile(props) {
    const {data: session} = useSession()

    const [designation, setDesignation] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [goToDashboard, setGoToDashboard]=useState(false)
    const router = useRouter()

    if (session === null){
       router.push('/loginpage')
  }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const user = session.user.email
        const data = { designation, phone, address,user}
        await axios.post('/api/admin', data)
        setGoToDashboard(true)
    }
    if (goToDashboard){
        router.push('/admindashboard')
    }


    return (
        <>
        <Nav/>
        <div>
            <div className="flex items-center justify-center mt-10 text-3xl">
                Admin Profile
            </div>
            <form onSubmit={handlesubmit}>
                <div className="flex items-center justify-center">
                    <div
                        className="p-8  mt-10 inputarea">
                        <div className="containeradmin flex-col gap-10 flex ">

                            <div className="flex flex-col items-center gap-2 ">
                                <label>Designation: </label>
                                <input className=" admininput p-1" type="text" placeholder="Enter your designation"
                                       value={designation}
                                       onChange={(e) => {
                                           setDesignation(e.target.value)
                                       }}/>
                            </div>
                            <div className="flex flex-col items-center gap-2 ">
                                <label>Phone Number: </label>
                                <input className="admininput p-1" type="number" placeholder="Enter your phone number" value={phone}
                                       onChange={(e) => {
                                           setPhone(e.target.value)
                                       }}/>
                            </div>
                            <div className="flex flex-col items-center gap-2 ">
                                <label>Office Address: </label>
                                <textarea className=" admininput p-1" placeholder="Enter your office address" value={address}
                                          onChange={(e) => {
                                              setAddress(e.target.value)
                                          }}/>
                            </div>

                            <button className="text-center submitbtn py-1" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
            </>

    );
}

export default Adminprofile;
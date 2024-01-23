import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {useSession} from "next-auth/react";
import Chatnav from "@/components/chatnav";

function Chat(props) {
    const {data: session} = useSession()
    const[activenav, setActivenav]=useState("")
    const personclick = (e, userid) => {

        router.push(`/chat/${cuser._id}--${userid}`)
    }

    const router = useRouter()
    useEffect(()=>{
        if (router.pathname==='/chat'){
            setActivenav("chat")
        }
    },[router])
    useEffect(()=>{
        if(session === null){
            router.push('/loginpage')
        }
    },[session])
    const [cuser, setcuser] = useState(null)
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get('../api/personalinfo').then((data) => {
            setUserdata((data.data).filter(item => item.email !== session?.user?.email))
            setcuser((data.data).find(item => item.email === session?.user?.email))
        })
    }, [session])
    return (
        <>

        <div className="chatmaincontainer relative">
            <div className="absolute top-0 left-0"><Chatnav activenav = {activenav}/></div>
       <div className="leftchat w-[22%]">
                    <div className="text-[32px] font-bold">
                        Chats
                    </div>
                    <div>
                        <div className="dashsearchfield">
                            <input className="w-full rounded-full p-[16px] dashsearch" type="text"
                                   placeholder="Search in chats..."/>
                            <div className="searchbtndash">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_148_180)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M26.76 25.27L32.49 31L31 32.49L25.27 26.76C24.2 27.53 22.91 28 21.5 28C17.91 28 15 25.09 15 21.5C15 17.91 17.91 15 21.5 15C25.09 15 28 17.91 28 21.5C28 22.91 27.53 24.2 26.76 25.27ZM21.5 17C19.01 17 17 19.01 17 21.5C17 23.99 19.01 26 21.5 26C23.99 26 26 23.99 26 21.5C26 19.01 23.99 17 21.5 17Z"
                                              fill="#49454F"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_148_180">
                                            <rect x="4" y="4" width="40" height="40" rx="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="text-[16px] font-semibold pl-[10px] mt-[15px] flex flex-col items-start gap-[20px] overflow-auto ">
                        {userdata.map((ud) => ((<div className="chatlist" onClick={(e) => personclick(e, ud._id)}>

                            <div className="cursor-pointer">{ud.name}</div>


                        </div>)))}

                    </div>
                </div>
        <div className="w-[43%]">

        </div>
        <div className="rightchat w-[22%]"></div>
    </div>
            </>);
}

export default Chat;
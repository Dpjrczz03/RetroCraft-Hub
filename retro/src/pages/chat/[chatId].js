import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {useSession} from "next-auth/react";
// import {pusherClient} from "../../../lib/pusher";
import Pusher from "pusher-js";
import {useRef} from "react";
import Chatnav from "@/components/chatnav";

function ChatId(props) {
    const {data: session} = useSession()
    const personclick = (e, userid) => {

        router.push(`/chat/${cuser._id}--${userid}`)
    }
    const router = useRouter()
    const [cuser, setcuser] = useState(null)
    const [userdata, setUserdata] = useState([])
    useEffect(() => {
        axios.get('../api/personalinfo').then((data) => {
            setUserdata((data.data).filter(item => item.email !== session?.user?.email))
            setcuser((data.data).find(item => item.email === session?.user?.email))
        })
    }, [session])
    const [chatdata, setChatdata] = useState([])
    const [pdata, setPdata] = useState([])
    const [filterroomdata, setfilterroomdata] = useState([])
    const [user1, setuser1] = useState(null)
    const [user2, setuser2] = useState(null)

    const chatid = router.query.chatId
    const [x, setx] = useState(0)
    const [chatloading, setchatloading] = useState(false)
    var ouserid = undefined
    if (router.query.chatId) {
        ouserid = (router.query.chatId).split("--")[1]
    }

    const scrollDownref = useRef(null)

    function chatHrefConstructor(meow) {
        if (meow) {
            const sortedIds = [meow.split('--')[0], meow.split('--')[1]].sort()
            return `${sortedIds[0]}--${sortedIds[1]}`
        }
    }

    const email = session?.user?.email

    function toPusherKey(key) {
        return key.replace(/:/g, '__')
    }

    // const scrollbottom = () => {
    //     setchatloading(true)
    //     var objDiv = document.getElementById("chatbox");
    //     objDiv.scrollTop = objDiv.scrollHeight;
    //     setchatloading(false)
    // }
    var cd = [];
    const [message, setmessage] = useState("")
    useEffect(()=>{
        if(!session){
            router.push('/loginpage')
        }
    },[session])

    useEffect(() => {
        const pusher = new Pusher(
            "1fd80f1f7c0178fdc228",
            {
                cluster: 'ap2',
                debug: true,
            }
        )

        const channel = pusher.subscribe(toPusherKey(`chat:${chatHrefConstructor(chatid)}`));
        channel.bind("chat-event", function (data) {
            setfilterroomdata((prevState) => [
                ...prevState,
                {chatid: data.chatid, message: data.message, email: data.email},
            ]);
        });

        return () => {
            pusher.unsubscribe(toPusherKey(`chat:${chatHrefConstructor(chatid)}`));
        };
    }, [chatid])
    const scrollToBottom = () => {
        scrollDownref?.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {

        axios.get('../api/chat').then((data) => {

            // console.log("chala hai ye bhen ka loda")

            setChatdata(data.data)

            // if (x <2) {
            //     scrollbottom()
            //     setx(x + 1)
            // }

            if (router.query.chatId) {
                setfilterroomdata((data.data).filter((item) =>
                    ((((router.query.chatId).split('--')[0] === (item.chatid).split('--')[0]) || ((router.query.chatId).split('--')[0] === (item.chatid).split('--')[1])) && ((((router.query.chatId).split('--')[1] === (item.chatid).split('--')[0]) || ((router.query.chatId).split('--')[1] === (item.chatid).split('--')[1]))))
                ))
            }
        })

    }, [router.query.chatId, x])

    useEffect(() => {
        scrollToBottom()
    }, [filterroomdata])
    useEffect(() => {

        axios.get('../api/personalinfo').then((data) => {
            setPdata(data.data)
            cd = data.data
            setuser1(cd.find((item) => (
                item.email === session?.user?.email
            )))

            if (ouserid) {
                // console.log("meoedfaf")
                setuser2(cd.find((i) => (i._id === ouserid)))

            }


        })


    }, [chatid, user1, user2, filterroomdata, chatdata])

    const handlechatsubmit = async (e) => {
        e.preventDefault()
        const email = session?.user?.email
        const messagedata = {chatid, message, email}
        if (message !== "") {
            await axios.post('../api/chat', messagedata)
            // fetchdata()
            scrollToBottom()

            setmessage("")
        }


    }
    return (
        <>
            <div className="absolute left-0 top-0">
                <Chatnav/>
            </div>
            <div className="chatmaincontainer">
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
                    <div className="text-[16px] font-medium pl-[10px] mt-[15px] flex flex-col items-start gap-[20px] overflow-auto ">
                        {userdata.map((ud) => ((<div className="chatlist" onClick={(e) => personclick(e, ud._id)}>

                            <div className="cursor-pointer">{ud.name}</div>


                        </div>)))}

                    </div>
                </div>
                <div className="mainchatbox w-[43%] relative">
                    <>


                        <div className="w-full flex flex-col justify-center gap-[10px]">

                            <div className="chattitle text-[20px] font-semibold flex items-center pl-[25px]">
                                <div>{user2?.name}</div>
                            </div>
                            <div id="chatbox"
                                 className="w-[100%] h-[80vh] overflow-auto chatbox flex flex-col gap-2 pt-[10px]">
                                {chatloading ? (<></>) : (

                                    <>

                                        {filterroomdata.map((msg) => (session?.user?.email === msg.email) ? (
                                            <div className="w-full px-[20px]">
                                                <div className="flex flex-col items-end justify-between w-full">
                                                    {/*<div>*/}
                                                    {/*    <div className="text-black text-[12px]">{user1?.name}</div>*/}
                                                    {/*</div>*/}
                                                    <div className="flex flex-row-reverse w-full">
                                                        <div
                                                            className="px-[8px] py-[4px] bg-[#0452D8] text-white text-[16px] rounded-[5px] max-w-[50%]">
                                                            <p className="messagepara">{msg.message}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        ) : (
                                            <>
                                                <>
                                                    <div className="w-full px-[20px]">
                                                        <div
                                                            className="flex flex-col items-start justify-between w-full">
                                                            {/*<div>*/}
                                                            {/*    <div className="text-black text-[12px]">{user2?.name}</div>*/}
                                                            {/*</div>*/}
                                                            <div className="flex w-full">
                                                                <div
                                                                    className="px-[8px] py-[4px] bg-[rgba(0,0,0,0.7)] text-white text-[16px] rounded-[5px] max-w-[50%]">
                                                                    <p className="messagepara">{msg.message}</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            </>

                                        ))}
                                        {filterroomdata.map((msg) => (session?.user?.email === msg.email) ? (
                                            <></>
                                        ) : (
                                            <></>
                                        ))}


                                    </>


                                )}
                                <div ref={scrollDownref}></div>

                            </div>

                            <form onSubmit={handlechatsubmit} className="flex gap-2 justify-center">
                                <div className="dashsearchfield">
                                    <input
                                        className="w-[30vw] min-w-[220px] rounded-full px-[16px] py-[8px] dashsearch chatsend"
                                        type="text"
                                        placeholder="Send Message..." value={message}
                                        onChange={(e) => setmessage(e.target.value)}/>
                                    <button className="sendbtndash" type="submit">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect width="32" height="32" rx="16" fill="#3370F5"/>
                                            <path d="M9 25V18.25L16.5789 16L9 13.75V7L27 16L9 25Z" fill="white"/>
                                        </svg>


                                    </button>
                                </div>
                            </form>
                        </div>

                    </>
                </div>
                <div className="rightchat w-[22%]"></div>
            </div>
        </>
    );
}

export default ChatId;
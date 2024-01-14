
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
function Chat(props) {
    const personclick =(e,userid)=>{
        console.log(userid)
    }
    const router = useRouter()
    const {chatId} = router.query
    const [userdata, setUserdata]=useState([])
    useEffect(()=>{
        axios.get('../api/personalinfo').then((data)=>{
            setUserdata(data.data)
        })
    },[])
    return (
        <div className="chatmaincontainer">
            <div className="leftchat">
                {userdata.map((ud)=>(<div className="chatlist" onClick={(e)=>personclick(e,ud._id)}>

                        {ud.name}


                    </div>
                ))}


            </div>
            <div className="rightchat"> fdasf</div>
        </div>
    );
}

export default Chat;
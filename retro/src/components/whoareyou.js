import React from 'react';
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";

function Whoareyou(props) {
    const {data: session} = useSession()
    const [role, setRole] = useState("")
    const router = useRouter()
    if (session === null) {
        router.push('/loginpage')
    }
    const handlenextbtn1 = () => {
        const element = document.getElementById("pinfo");
        element.scrollIntoView({ behavior: 'smooth'});

    }

    return (<>

            <div className="help">
                Having troubles? <span className="helpspan">Get help</span>
            </div>
            <div className="whoareyoubox flex flex-col ">
                <div className=" flex flex-col">
                    <div className="whotitle">Who are you?</div>
                    <div className="selectiontext"> Select if you are a producer looking for some professionals or if
                        you are a crew member looking
                        for a job.
                    </div>
                    <div className="imgbox flex items-center justify-between gap-6 mt-6">
                        <div
                            className={(role === 'producer') ? "whoimageboxselect flex flex-col items-center justify-center cursor-pointer" : "whoimageboxdull flex flex-col items-center justify-center cursor-pointer"}
                            onClick={() => {
                                setRole("producer")
                            }}>
                            <div className="whoimage">
                                <Image className={role === "producer" ? "crewimage" : "crewimage imggray"}
                                       src="/Frame 35.png" width={500}
                                       height={500}/>
                            </div>
                            <div className={(role === 'producer') ? "whonameselect" : "whonamedull"}>
                                Producer
                            </div>
                        </div>
                        <div
                            className={(role === "crew") ? "whoimageboxselect cursor-pointer flex flex-col items-center" : "whoimageboxdull flex flex-col items-center cursor-pointer"}
                            onClick={() => {
                                setRole("crew")
                            }}>
                            <div className="whoimage">
                                <Image className={(role === "crew") ? "crewimage" : "crewimage imggray"}
                                       src="/Layer_1.png" width={500}
                                       height={500}/>
                            </div>
                            <div className={(role === 'crew') ? "whonameselect" : "whonamedull"}>
                                Crew Member
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex w-full items-center justify-end pr-40">
                    {(role === "") ? (<button disabled className="whobtndis px-14 py-2">
                        Next
                    </button>) : (<button className="whobtn px-14 py-2" onClick={handlenextbtn1}>
                        Next
                    </button>)}

                </div>

            </div>


        </>

    );
}

export default Whoareyou;
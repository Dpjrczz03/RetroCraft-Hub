import React, {useState} from 'react';
import {set} from "mongoose";

function Personalinfo(props) {
    const [focushai1,setFocushai1]=useState(false)
    const [focushai2,setFocushai2]=useState(false)
    const [focushai3,setFocushai3]=useState(false)
    const [focushai4,setFocushai4]=useState(false)
    const [focushai5,setFocushai5]=useState(false)
    const [focushai6,setFocushai6]=useState(false)
    const handleprevbtn2 = () => {
        const element = document.getElementById("whoyou");
        element.scrollIntoView({ behavior: 'smooth'});

    }
    const handlenextbtn2 = () => {
        const element = document.getElementById("profinfo");
        element.scrollIntoView({ behavior: 'smooth'});

    }
    const handleinputfocus1=()=>{
        setFocushai1(true)
    }
    const handleinputfocus2=()=>{
        setFocushai2(true)
    }
    const handleinputfocus3=()=>{
        setFocushai3(true)
    }
    const handleinputfocus4=()=>{
        setFocushai4(true)
    }
    const handleinputfocus5=()=>{
        setFocushai5(true)
    }
    const handleinputfocus6=()=>{
        setFocushai6(true)
    }
    return (
       <>
           <div className="help">
               Having troubles? <span className="helpspan">Get help</span>
           </div>
           <div className="personalcontainer flex flex-col items-start justify-start gap-20">
               <div className="personalbox flex flex-col justify-center ">
                   <div className="flex flex-col mb-5">
                       <div className="personaltitle">
                           Personal Info
                       </div>
                       <div className="personaldesc">
                           Fill out your personal information so that we can get to know you better.
                       </div>
                   </div>
                   <div className="flex flex-wrap gap-5 inputcontainer">
                       <div className="flex flex-col leftinputs">
                           <div className="pinputarea flex flex-col">
                               <div className={focushai1?"labelpifocus":"labelpi"}>First Name</div>
                               <input type="text" className="piinput" onFocus={handleinputfocus1} onBlur={()=>setFocushai1(false)}/>
                           </div>
                           <div className="flex gap-5 agerow justify-between">
                               <div className="chotuinputage pinputarea flex flex-col">
                                   <div className={focushai2?"labelpifocus":"labelpi"}>Age</div>
                                   <input type="number" className="piinput age" onFocus={handleinputfocus2} onBlur={()=>setFocushai2(false)}/>
                               </div>
                               <div className="chotuinputgend pinputarea flex flex-col">
                                   <div className={focushai3?"labelpifocus":"labelpi"}>Gender</div>
                                   <select className="piinput gender" onFocus={handleinputfocus3} onBlur={()=>setFocushai3(false)}>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                       <option value="others">Others</option>
                                   </select>
                               </div>
                           </div>

                           <div className="pinputarea flex flex-col">
                               <div className={focushai4?"labelpifocus":"labelpi"}>Nationality</div>
                               <input type="text" className="piinput" onFocus={handleinputfocus4} onBlur={()=>setFocushai4(false)}/>
                           </div>
                           <div className="pinputarea flex flex-col">
                               <div className="labelpi">Profile Photo</div>
                               <label htmlFor="profilepic" className=" pfpi flex items-center justify-between">
                                   <div>Upload Photo</div>
                                   <div>
                                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                           <path
                                               d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16H11ZM6 20C5.45 20 4.97933 19.8043 4.588 19.413C4.19667 19.0217 4.00067 18.5507 4 18V15H6V18H18V15H20V18C20 18.55 19.8043 19.021 19.413 19.413C19.0217 19.805 18.5507 20.0007 18 20H6Z"
                                               fill="black" fill-opacity="0.6"/>
                                       </svg>
                                   </div>
                               </label>
                               <input type="file" id="profilepic" className="piinput pfpinput"/>
                           </div>
                       </div>
                       <div className="flex flex-col  rightinputs">
                           <div className="pinputarea flex flex-col">
                               <div className={focushai5?"labelpifocus":"labelpi"}>Last Name</div>
                               <input type="text" className="piinput" onFocus={handleinputfocus5} onBlur={()=>setFocushai5(false)}/>
                           </div>
                           <div className="pinputarea flex flex-col">
                               <div className={focushai6?"labelpifocus":"labelpi"}>Phone Number</div>
                               <input type="number" className="piinput" onFocus={handleinputfocus6} onBlur={()=>setFocushai6(false)}/>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="flex items-center justify-between w-full pr-40 gap-7">
                   <div className="prevbtndis">
                       <button className="prevbtndis px-12 py-1.5" onClick={handleprevbtn2}>
                           Previous
                       </button>

                   </div>
                   <div className="whobtn">
                       <button className="whobtn px-14 py-2" onClick={handlenextbtn2}>
                           Next
                       </button>

                   </div>
               </div>
           </div>
       </>
    );
}

export default Personalinfo;
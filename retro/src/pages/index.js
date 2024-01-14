import Image from 'next/image'
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import Sidebar from "@/components/sidebar";
import React, {useEffect, useState} from "react";
import axios from "axios";
// import {Job} from "../../models/job.js";

export default function Home() {
    const [userdata, setUserdata]=useState([])
    const  [experiences,setExperiences]=useState([])
    const [educations, setEducations] = useState([])
    const [project, setProject] = useState("")
    const [position, setPosition] = useState("")
    const [duration, setDuration] = useState("")
    const [degree, setDegree] = useState("")
    const [college, setCollege] = useState("")
    const [completed, setCompleted] = useState("")
    const [phone, setPhone] = useState("")
    const [nationality, setNationality] = useState(null)
    const [gender, setGender] = useState("Male")
    const [age, setAge] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [showedu, setShowedu] = useState(false)
    const [showcerti, setShowcerti] = useState(false)
    const [fadeclass, setFadeclass] = useState("")
    const [fadeclasscerti, setFadeclasscerti] = useState("")
    const [fadeclassexp, setFadeclassexp] = useState("")
    const [showexp, setShowexp] = useState(false)


    useEffect(() => {
        fetchuserdata()
        fetcheducations()
        fetchexperiences()

    }, [])

    const fetchuserdata=()=>{
        axios.get('/api/role').then((data) => {
            setUserdata(data.data)
            // console.log(data.data)
        })
    }

    const fetcheducations = () => {
        axios.get('/api/education').then((data) => {
            setEducations(data.data)
        })

    }
    const fetchexperiences = () => {
        axios.get('/api/experience').then((data) => {
            setExperiences(data.data)
        })
    }
    const handleprevbtn3 = () => {
        if (c === 2) {
            const element = document.getElementById("pinfo");
            element.scrollIntoView({behavior: 'smooth'});

            setC(1)
        }
        if (c === 3) {
            setC(2)
        }

    }
    const handleskipbtn = () => {
        if (c === 2) {
            setC(3)
        }
    }
    const toggleedu = () => {
        if (showedu) {
            setShowedu(false)
        } else {
            setShowedu(true)
            setShowcerti(false)
            setShowexp(false)
        }
        setFadeclass("fade")
    }
    const togglecerti = () => {
        setFadeclasscerti("fade")
        if (showcerti) {
            setShowcerti(false)
        } else {
            setShowcerti(true)
            setShowedu(false)
            setShowexp(false)
        }
    }
    const toggleexp = () => {
        setFadeclassexp("fade")
        if (showexp) {
            setShowexp(false)
        } else {
            setShowexp(true)
            setShowedu(false)
            setShowcerti(false)
        }
    }
    const [role, setRole] = useState("")

    const handlenextbtn1 = async () => {
        // const personalemail = session?.user?.email
        // const roledata = {role,personalemail}
        // await axios.post('/api/role',roledata)


        const element = document.getElementById("pinfo");
        element.scrollIntoView({behavior: 'smooth'});
        if (c === 0) {
            setC(1)
        }

    }

    const [focushai1, setFocushai1] = useState(false)
    const [focushai2, setFocushai2] = useState(false)
    const [focushai3, setFocushai3] = useState(false)
    const [focushai4, setFocushai4] = useState(false)
    const [focushai5, setFocushai5] = useState(false)
    const [focushai6, setFocushai6] = useState(false)
    const handleprevbtn2 = () => {
        const element = document.getElementById("whoyou");
        element.scrollIntoView({behavior: 'smooth'});
        if (c === 1) {
            setC(0)
        }

    }
    const handlenextbtn2 = async () => {
        // const name = firstname.concat(" ".concat(lastname))
        // // console.log(name)
        // const email = session?.user?.email
        // const personaldata = {name, age, gender, phone, nationality,email}
        // await axios.post('/api/personalinfo',personaldata)
        const element = document.getElementById("profinfo");
        element.scrollIntoView({behavior: 'smooth'});
        if (c === 1) {
            setC(2)
        }


    }
    const handleinputfocus1 = () => {
        setFocushai1(true)
    }
    const handleinputfocus2 = () => {
        setFocushai2(true)
    }
    const handleinputfocus3 = () => {
        setFocushai3(true)
    }
    const handleinputfocus4 = () => {
        setFocushai4(true)
    }
    const handleinputfocus5 = () => {
        setFocushai5(true)
    }
    const handleinputfocus6 = () => {
        setFocushai6(true)
    }
    const {data: session} = useSession()
    const router = useRouter()
    if (session === null) {
        router.push('/loginpage')
    }
    const [c, setC] = useState(0)
    const handleeduclick = async () => {
        const email = session?.user?.email
        const edudata = {degree, college, completed, email}
        await axios.post('/api/education', edudata)
        setDegree("")
        setCollege("")
        setCompleted("")
        setShowedu(false)
        fetcheducations()
    }
    const handleexpclick = async () => {
        const email = session?.user?.email
        const expdata = {project, position, duration, email}
        await axios.post('/api/experience', expdata)
        setProject("")
        setPosition("")
        setDuration("")
        setShowexp(false)
        fetchexperiences()
    }
    // setTimeout(()=>{
    //     if(c<1){
    //         setC(c+1)
    //     }
    //     else{
    //         setC(0)
    //     }
    // },1000)
    // console.log(firstname,lastname,phone,age, gender, nationality,role)


    const handlemainbtn = async ()=>{
        if (c === 2) {
            setC(3)
        }
        const name = firstname.concat(" ".concat(lastname))
        const email = session?.user?.email
        const roledata = {role,email}
        const personaldata = {name, age, gender, phone, nationality,email}
        await axios.post('/api/personalinfo',personaldata)
        await axios.post('/api/role',roledata)
        router.push('/admindashboard')



    }
    userdata.map((userd)=>{
        const f = session?.user?.email
            if(userd.email===f){
            router.push('/admindashboard')
        }


    })
    // console.log(User.find())
    // console.log(session?.user?.email)




    return (
        <div className="flex bg-white h-screen w-screen onboardingscreen">

            <div>
                <Sidebar c={c}/>
                <div className="pfp absolute right-3 top-2 ">
                    {(session?.user?.image) ? (<img onClick={() => signOut()} className="rounded-full cursor-pointer"
                                                    src={session?.user?.image}/>) : (<></>)}
                </div>
            </div>
            <div className="sidepage w-full">


                <div id="whoyou"><>

                    {/*<div className="help">*/}
                    {/*    Having troubles? <span className="helpspan">Get help</span>*/}
                    {/*</div>*/}
                    <div className="whoareyoubox flex flex-col ">
                        <div className=" flex flex-col">
                            <div className="whotitle">Who are you?</div>
                            <div className="selectiontext"> Select if you are a producer looking for some professionals
                                or if
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
                </div>


                <div id="pinfo"><>
                    {/*<div className="help">*/}
                    {/*    Having troubles? <span className="helpspan">Get help</span>*/}
                    {/*</div>*/}
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
                                        <div className={focushai1 ? "labelpifocus" : "labelpi"}>First Name</div>
                                        <input type="text" value={firstname}
                                               onChange={(e) => setFirstname(e.target.value)} className="piinput"
                                               onFocus={handleinputfocus1} onBlur={() => setFocushai1(false)}/>
                                    </div>
                                    <div className="flex gap-5 agerow justify-between">
                                        <div className="chotuinputage pinputarea flex flex-col">
                                            <div className={focushai2 ? "labelpifocus" : "labelpi"}>Age</div>
                                            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
                                                   className="piinput age" onFocus={handleinputfocus2}
                                                   onBlur={() => setFocushai2(false)}/>
                                        </div>
                                        <div className="chotuinputgend pinputarea flex flex-col">
                                            <div className={focushai3 ? "labelpifocus" : "labelpi"}>Gender</div>
                                            <select value={gender} onChange={(e) => setGender(e.target.value)}
                                                    className="piinput gender" onFocus={handleinputfocus3}
                                                    onBlur={() => setFocushai3(false)}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="pinputarea flex flex-col">
                                        <div className={focushai4 ? "labelpifocus" : "labelpi"}>Nationality</div>
                                        <input value={nationality} onChange={(e) => setNationality(e.target.value)}
                                               type="text" className="piinput" onFocus={handleinputfocus4}
                                               onBlur={() => setFocushai4(false)}/>
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
                                        <div className={focushai5 ? "labelpifocus" : "labelpi"}>Last Name</div>
                                        <input value={lastname} onChange={(e) => setLastname(e.target.value)}
                                               type="text" className="piinput" onFocus={handleinputfocus5}
                                               onBlur={() => setFocushai5(false)}/>
                                    </div>
                                    <div className="pinputarea flex flex-col">
                                        <div className={focushai6 ? "labelpifocus" : "labelpi"}>Phone Number</div>
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number"
                                               className="piinput" onFocus={handleinputfocus6}
                                               onBlur={() => setFocushai6(false)}/>
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
                                {(firstname === "") ? (<button disabled className="whobtndis px-14 py-2">
                                    Next
                                </button>) : (<button className="whobtn px-14 py-2" onClick={handlenextbtn2}>
                                    Next
                                </button>)}

                            </div>
                        </div>
                    </div>
                </>
                </div>


                <div id="profinfo"><>
                    <div className="help">
                        Having troubles? <span className="helpspan">Get help</span>
                    </div>

                    <div className="profbox flex flex-col">
                        <div className=" flex flex-col profboxcontainer ">
                            <div className="whotitle">Professional Info</div>
                            <div className="selectiontext1"> Fill out your professional information so that we can get
                                to know
                                you better.
                            </div>
                            <div
                                className="flex flex-col items-start gap-5 mt-10 overflow-auto badadibba scrollcontainer">
                                <div className="flex flex-col w-full ">
                                    <div className="add flex items-center gap-3">
                                        <div>Add Education</div>
                                        <div className="cursor-pointer" onClick={toggleedu}>
                                            {showedu ? (<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.40703 11.9475L15.3808 5.67784C15.4805 5.57322 15.5361 5.43424 15.5361 5.28971C15.5361 5.14518 15.4805 5.0062 15.3808 4.90159L15.374 4.89484C15.3257 4.84395 15.2675 4.80342 15.203 4.77573C15.1385 4.74804 15.069 4.73376 14.9988 4.73376C14.9286 4.73376 14.8592 4.74804 14.7947 4.77573C14.7302 4.80342 14.672 4.84395 14.6237 4.89484L8.99865 10.7988L3.3759 4.89484C3.32756 4.84395 3.26936 4.80342 3.20486 4.77573C3.14037 4.74804 3.07091 4.73376 3.00071 4.73376C2.93052 4.73376 2.86106 4.74804 2.79656 4.77573C2.73206 4.80342 2.67387 4.84395 2.62553 4.89484L2.61878 4.90159C2.51905 5.0062 2.46342 5.14518 2.46342 5.28971C2.46342 5.43424 2.51905 5.57322 2.61878 5.67784L8.59253 11.9475C8.64506 12.0026 8.70824 12.0465 8.77825 12.0765C8.84825 12.1065 8.92362 12.1219 8.99978 12.1219C9.07593 12.1219 9.1513 12.1065 9.2213 12.0765C9.29131 12.0465 9.35449 12.0026 9.40703 11.9475Z"
                                                    fill="black"/>
                                            </svg>) : (
                                                <svg className="plus" width="24" height="24" viewBox="0 0 24 24"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 13V12H11V6H12V12H18V13H12V19H11V13H5Z" fill="black"
                                                          fill-opacity="0.6"/>
                                                </svg>)}
                                        </div>
                                    </div>
                                    {showedu ? (<div className={fadeclass}>
                                        <div className="flex flex-wrap justify-between gap-2 items-center topinputrow">
                                            <div className="piinputarea flex flex-col items-start">
                                                <div className="labelpi">Degree/Class</div>
                                                <input value={degree} onChange={(e) => setDegree(e.target.value)}
                                                       type="text" className="piinput profinput"/>
                                            </div>
                                            <div className="piinputarea1 flex flex-col items-start">
                                                <div className="labelpi">College/School</div>
                                                <input value={college} onChange={(e) => setCollege(e.target.value)}
                                                       type="text" className="piinput profinput"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between bottominputrow items-center">
                                            <div className="piinputarea ">
                                                <div className="labelpi">Completed in</div>
                                                <input value={completed} onChange={(e) => setCompleted(e.target.value)}
                                                       type="number" className="piinput profinput1"/>
                                            </div>
                                            <div className="mt-8">
                                                {((degree) && degree !== "") && (college && (college !== "")) && (completed && (completed !== "")) ? (
                                                    <button className="whobtn px-14 py-2" onClick={handleeduclick}>
                                                        Add
                                                    </button>) : (<button className="whobtndis px-14 py-2">
                                                    Add
                                                </button>)}

                                            </div>
                                        </div>
                                    </div>) : (<></>)}
                                    <div className="readcontainer flex flex-col items-start justify-center gap-4">
                                        {educations.map(edu => ((edu.email===session?.user?.email)?(<div className="flex flex-col items-start justify-center eduitem">
                                                <div className="degree">{edu.degree}</div>
                                                <div>{edu.college}</div>
                                                <div>{edu.completed}</div>
                                            </div>):(<></>)))}

                                    </div>
                                </div>
                                <div className="flex flex-col w-full ">
                                    <div className="add flex items-center gap-3">
                                        <div>Add Experience</div>
                                        <div onClick={toggleexp}>
                                            {showexp ? (<svg className="cursor-pointer" width="18" height="18"
                                                             viewBox="0 0 18 18" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.40703 11.9475L15.3808 5.67784C15.4805 5.57322 15.5361 5.43424 15.5361 5.28971C15.5361 5.14518 15.4805 5.0062 15.3808 4.90159L15.374 4.89484C15.3257 4.84395 15.2675 4.80342 15.203 4.77573C15.1385 4.74804 15.069 4.73376 14.9988 4.73376C14.9286 4.73376 14.8592 4.74804 14.7947 4.77573C14.7302 4.80342 14.672 4.84395 14.6237 4.89484L8.99865 10.7988L3.3759 4.89484C3.32756 4.84395 3.26936 4.80342 3.20486 4.77573C3.14037 4.74804 3.07091 4.73376 3.00071 4.73376C2.93052 4.73376 2.86106 4.74804 2.79656 4.77573C2.73206 4.80342 2.67387 4.84395 2.62553 4.89484L2.61878 4.90159C2.51905 5.0062 2.46342 5.14518 2.46342 5.28971C2.46342 5.43424 2.51905 5.57322 2.61878 5.67784L8.59253 11.9475C8.64506 12.0026 8.70824 12.0465 8.77825 12.0765C8.84825 12.1065 8.92362 12.1219 8.99978 12.1219C9.07593 12.1219 9.1513 12.1065 9.2213 12.0765C9.29131 12.0465 9.35449 12.0026 9.40703 11.9475Z"
                                                    fill="black"/>
                                            </svg>) : (
                                                <svg className="plus cursor-pointer" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 13V12H11V6H12V12H18V13H12V19H11V13H5Z" fill="black"
                                                          fill-opacity="0.6"/>
                                                </svg>)}

                                        </div>

                                    </div>
                                    {showexp ? (<div className={fadeclassexp}>
                                        <div className="flex flex-wrap justify-between gap-2 items-center topinputrow">
                                            <div className="piinputarea flex flex-col items-start">
                                                <div className="labelpi">Project Name</div>
                                                <input value={project} onChange={(e) => setProject(e.target.value)}
                                                       type="text" className="piinput profinput"/>
                                            </div>
                                            <div className="piinputarea1 flex flex-col items-start">
                                                <div className="labelpi">Position</div>
                                                <input value={position} onChange={(e) => setPosition(e.target.value)}
                                                       type="text" className="piinput profinput"/>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between bottominputrow items-center">
                                            <div className="piinputarea ">
                                                <div className="labelpi">Duration</div>
                                                <input value={duration} onChange={(e) => setDuration(e.target.value)}
                                                       type="text" className="piinput profinput1"/>
                                            </div>
                                            <div className="mt-8">
                                                {((position) && position !== "") && (project && (project !== "")) && (duration && (duration !== "")) ? (
                                                    <button className="whobtn px-14 py-2" onClick={handleexpclick}>
                                                        Add
                                                    </button>) : (<button className="whobtndis px-14 py-2">
                                                    Add
                                                </button>)}
                                            </div>
                                        </div>
                                    </div>) : (<></>)}
                                    <div className="readcontainer flex flex-col items-start justify-center gap-4">
                                        {experiences.map(exp => ((exp.email===session?.user?.email)?(<div className="flex flex-col items-start justify-center eduitem">
                                                <div className="degree">{exp.project}</div>
                                                <div>{exp.position}</div>
                                                <div>{exp.duration}</div>
                                            </div>):(<></>)))}



                                    </div>

                                </div>
                                <div className="flex flex-col">
                                    <div className="add flex items-center gap-3">
                                        <div>Add Certification</div>
                                        <div onClick={togglecerti}>
                                            {showcerti ? (<svg className="cursor-pointer" width="18" height="18"
                                                               viewBox="0 0 18 18" fill="none"
                                                               xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M9.40703 11.9475L15.3808 5.67784C15.4805 5.57322 15.5361 5.43424 15.5361 5.28971C15.5361 5.14518 15.4805 5.0062 15.3808 4.90159L15.374 4.89484C15.3257 4.84395 15.2675 4.80342 15.203 4.77573C15.1385 4.74804 15.069 4.73376 14.9988 4.73376C14.9286 4.73376 14.8592 4.74804 14.7947 4.77573C14.7302 4.80342 14.672 4.84395 14.6237 4.89484L8.99865 10.7988L3.3759 4.89484C3.32756 4.84395 3.26936 4.80342 3.20486 4.77573C3.14037 4.74804 3.07091 4.73376 3.00071 4.73376C2.93052 4.73376 2.86106 4.74804 2.79656 4.77573C2.73206 4.80342 2.67387 4.84395 2.62553 4.89484L2.61878 4.90159C2.51905 5.0062 2.46342 5.14518 2.46342 5.28971C2.46342 5.43424 2.51905 5.57322 2.61878 5.67784L8.59253 11.9475C8.64506 12.0026 8.70824 12.0465 8.77825 12.0765C8.84825 12.1065 8.92362 12.1219 8.99978 12.1219C9.07593 12.1219 9.1513 12.1065 9.2213 12.0765C9.29131 12.0465 9.35449 12.0026 9.40703 11.9475Z"
                                                    fill="black"/>
                                            </svg>) : (
                                                <svg className="plus cursor-pointer" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 13V12H11V6H12V12H18V13H12V19H11V13H5Z" fill="black"
                                                          fill-opacity="0.6"/>
                                                </svg>)}

                                        </div>


                                    </div>
                                    <div>
                                        {showcerti ? (<div className={fadeclasscerti}>
                                            <div className="pinputarea flex flex-col mt-4">
                                                {/*<div className="labelpi">Certification</div>*/}
                                                <label htmlFor="profilepic"
                                                       className=" pfpi flex items-center justify-between gap-5">
                                                    <div>Upload Certificate</div>
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
                                        </div>) : (<></>)}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-full pr-40 gap-7 btnsection">
                            <div className="prevbtndis">
                                <button className="prevbtndis px-12 py-1.5" onClick={handleprevbtn3}>
                                    Previous
                                </button>

                            </div>
                            <div className="whobtn">
                                {((educations.length===0)&&(experiences.length===0))?(<button className="whobtn px-14 py-2" onClick={handleskipbtn}>
                                    Do it later
                                </button>):(<button className="whobtn px-14 py-2" onClick={handlemainbtn}>
                                    Done
                                </button>)}


                            </div>
                        </div>
                    </div>
                </>
                </div>
            </div>

        </div>
    )
}

import React, {useState} from 'react';

function Professionalinfo(props) {
    const [showedu, setShowedu] = useState(false)
    const [showcerti, setShowcerti] = useState(false)
    const [fadeclass, setFadeclass] = useState("")
    const [fadeclasscerti, setFadeclasscerti] = useState("")
    const [fadeclassexp, setFadeclassexp] = useState("")
    const [showexp,setShowexp]=useState(false)
    const handleprevbtn3 = () => {
        const element = document.getElementById("pinfo");
        element.scrollIntoView({behavior: 'smooth'});

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
    const toggleexp = ()=>{
        setFadeclassexp("fade")
        if(showexp){
            setShowexp(false)
        }
        else{
            setShowexp(true)
            setShowedu(false)
            setShowcerti(false)
        }
    }
    return (<>
        <div className="help">
            Having troubles? <span className="helpspan">Get help</span>
        </div>

        <div className="profbox flex flex-col">
            <div className=" flex flex-col profboxcontainer ">
                <div className="whotitle">Professional Info</div>
                <div className="selectiontext1"> Fill out your professional information so that we can get to know
                    you better.
                </div>
                <div className="flex flex-col items-start gap-5 mt-10 overflow-auto badadibba scrollcontainer">
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
                                    <svg className="plus" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
                                    <input type="text" className="piinput profinput"/>
                                </div>
                                <div className="piinputarea1 flex flex-col items-start">
                                    <div className="labelpi">College/School</div>
                                    <input type="text" className="piinput profinput"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bottominputrow items-center">
                                <div className="piinputarea ">
                                    <div className="labelpi">Completed in</div>
                                    <input type="text" className="piinput profinput1"/>
                                </div>
                                <div className="mt-8">
                                    <button className="whobtndis px-14 py-2">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>) : (<></>)}

                    </div>
                    <div className="flex flex-col w-full ">
                        <div className="add flex items-center gap-3">
                            <div>Add Experience</div>
                            <div onClick={toggleexp}>
                                {showexp ? (<svg className="cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.40703 11.9475L15.3808 5.67784C15.4805 5.57322 15.5361 5.43424 15.5361 5.28971C15.5361 5.14518 15.4805 5.0062 15.3808 4.90159L15.374 4.89484C15.3257 4.84395 15.2675 4.80342 15.203 4.77573C15.1385 4.74804 15.069 4.73376 14.9988 4.73376C14.9286 4.73376 14.8592 4.74804 14.7947 4.77573C14.7302 4.80342 14.672 4.84395 14.6237 4.89484L8.99865 10.7988L3.3759 4.89484C3.32756 4.84395 3.26936 4.80342 3.20486 4.77573C3.14037 4.74804 3.07091 4.73376 3.00071 4.73376C2.93052 4.73376 2.86106 4.74804 2.79656 4.77573C2.73206 4.80342 2.67387 4.84395 2.62553 4.89484L2.61878 4.90159C2.51905 5.0062 2.46342 5.14518 2.46342 5.28971C2.46342 5.43424 2.51905 5.57322 2.61878 5.67784L8.59253 11.9475C8.64506 12.0026 8.70824 12.0465 8.77825 12.0765C8.84825 12.1065 8.92362 12.1219 8.99978 12.1219C9.07593 12.1219 9.1513 12.1065 9.2213 12.0765C9.29131 12.0465 9.35449 12.0026 9.40703 11.9475Z"
                                        fill="black"/>
                                </svg>) : (
                                    <svg className="plus cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 13V12H11V6H12V12H18V13H12V19H11V13H5Z" fill="black"
                                              fill-opacity="0.6"/>
                                    </svg>)}

                            </div>

                        </div>
                        {showexp?(<div className={fadeclassexp}>
                            <div className="flex flex-wrap justify-between gap-2 items-center topinputrow">
                                <div className="piinputarea flex flex-col items-start">
                                    <div className="labelpi">Project Name</div>
                                    <input type="text" className="piinput profinput"/>
                                </div>
                                <div className="piinputarea1 flex flex-col items-start">
                                    <div className="labelpi">Position</div>
                                    <input type="text" className="piinput profinput"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bottominputrow items-center">
                                <div className="piinputarea ">
                                    <div className="labelpi">Duration</div>
                                    <input type="text" className="piinput profinput1"/>
                                </div>
                                <div className="mt-8">
                                    <button className="whobtndis px-14 py-2">
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>):(<></>)}

                    </div>
                    <div className="flex flex-col">
                        <div className="add flex items-center gap-3">
                            <div>Add Certification</div>
                            <div onClick={togglecerti} >
                                {showcerti ? (<svg className="cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.40703 11.9475L15.3808 5.67784C15.4805 5.57322 15.5361 5.43424 15.5361 5.28971C15.5361 5.14518 15.4805 5.0062 15.3808 4.90159L15.374 4.89484C15.3257 4.84395 15.2675 4.80342 15.203 4.77573C15.1385 4.74804 15.069 4.73376 14.9988 4.73376C14.9286 4.73376 14.8592 4.74804 14.7947 4.77573C14.7302 4.80342 14.672 4.84395 14.6237 4.89484L8.99865 10.7988L3.3759 4.89484C3.32756 4.84395 3.26936 4.80342 3.20486 4.77573C3.14037 4.74804 3.07091 4.73376 3.00071 4.73376C2.93052 4.73376 2.86106 4.74804 2.79656 4.77573C2.73206 4.80342 2.67387 4.84395 2.62553 4.89484L2.61878 4.90159C2.51905 5.0062 2.46342 5.14518 2.46342 5.28971C2.46342 5.43424 2.51905 5.57322 2.61878 5.67784L8.59253 11.9475C8.64506 12.0026 8.70824 12.0465 8.77825 12.0765C8.84825 12.1065 8.92362 12.1219 8.99978 12.1219C9.07593 12.1219 9.1513 12.1065 9.2213 12.0765C9.29131 12.0465 9.35449 12.0026 9.40703 11.9475Z"
                                        fill="black"/>
                                </svg>) : (
                                    <svg className="plus cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
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
                    <button className="whobtn px-14 py-2">
                        Do it later
                    </button>

                </div>
            </div>
        </div>
    </>);
}

export default Professionalinfo;
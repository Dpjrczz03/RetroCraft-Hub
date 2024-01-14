'use client'
import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {useSession} from "next-auth/react";
import Nav from "@/components/nav";
import Dashboardnav from "@/components/dashboardnav";
import Whoareyou from "@/components/whoareyou";
import Personalinfo from "../components/personalinfo";
import {redirect} from "next/navigation";
import Statusitem from "@/components/statusitem";
import Jobcard from "@/components/jobcard";
import Bigcard from "@/components/bigcard";
import Image from "next/image";

function Admindashboard(props) {
    const [noti, setnoti] = useState(8)
    const[x,setx]=useState(0)
    if (noti > 9) {
        setnoti("9+")
    }
    const {data: session} = useSession()
    const router = useRouter()
    const [roledata, setRoledata] = useState([])
    const [jobdata, setjobdata]=useState([])
    const [currname, setcurrname]=useState(null)
    const [currrole, setcurrrole]=useState(null)

    if (session === null) {
        router.push('/loginpage')

    }

    const createjob = () => {
        router.push('/jobcreate')
    }
    useEffect(() => {
        axios.get('api/role').then((data) => {
            setRoledata(data.data)

        })
        axios.get('api/personalinfo').then((data) => {
            setjobdata(data.data)

        })



    }, [])
   //  const getroledata=()=>{
   //      // console.log("function called")
   //      for(var j=0;j<roledata.length;j++){
   //          console.log(roledata[j].email)
   //          setx(x+1)
   //          if (roledata[j].email === session?.user?.email){
   //              setcurrrole(roledata[j].name)
   //
   //              console.log(roledata[j].name)
   //              break;
   //          }
   //      }
   //  }
   //
   //
   // const getjobdata=()=>{
   //      for(var i=0;i<jobdata.length;i++){
   //          // console.log(jobdata[i].user)
   //          setx(x+1)
   //          if (jobdata[i].email === session?.user?.email){
   //              setcurrname(jobdata[i].name)
   //              console.log(jobdata[i].name)
   //              break;
   //          }
   //      }
   //  }
   //
   //  if(x<5) {
   //      getjobdata()
   //      getroledata()
   //  }
    return (
        // <>
        //     <Nav/>
        //     <div className="flex flex-col items-center gap-10">
        //     <div className="flex justify-center items-center">
        //         this is admin dashboard
        //     </div>
        //     <div className="p-3 bg-gray-400 jobbtn" onClick={createjob}>
        //         Add a job
        //     </div>
        //     <div className="flex gap-5 items-center justify-center">
        //         {jobs.map(job =>((job.user===(session?.user?.email))?(
        //             <div className="flex flex-col ">
        //                 <div className="font-bold text-xl">{job.jobtitle}</div>
        //                 <div>{job.company?job.company:null}</div>
        //                 <div>Stipend: Rs.{job.stipend}/month</div>
        //                 <div>{job.location}</div>
        //                 <div>Openings: {job.opening}</div>
        //             </div>
        //         ):(<></>)))}
        //     </div>
        // </div>
        //     </>


        <div className="admindashboard h-screen w-screen flex">
            <Dashboardnav/>
            <div className="dashpage w-full gap-10 pl-[38px] pr-[20px] flex flex-col overflow-auto pb-[100px]">
                <div className="dashnav flex  pt-[20px]  gap-2 justify-between items-center w-full">
                    <div className={"text-[40px] font-bold"}>Welcome, Dhruv👋</div>
                    <div className="dashsearchfield">
                        <input className="w-[25vw] min-w-[220px] rounded-full p-[16px] dashsearch" type="text"
                               placeholder="Search for crew members..."/>
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
                    <div className="flex items-center justify-between rightsidedash">
                        <div className="noti relative ">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="15.5" stroke="#0452D8"/>
                                <path
                                    d="M16 26C17.1 26 18 25.1 18 24H14C14 24.5304 14.2107 25.0391 14.5858 25.4142C14.9609 25.7893 15.4696 26 16 26ZM22 20V15C22 11.93 20.36 9.36 17.5 8.68V8C17.5 7.17 16.83 6.5 16 6.5C15.17 6.5 14.5 7.17 14.5 8V8.68C11.63 9.36 10 11.92 10 15V20L8 22V23H24V22L22 20Z"
                                    fill="#0452D8"/>
                            </svg>

                            <div
                                className="absolute top-[-7px] right-[-5px] bg-[#FAFAFA] px-[4px] py-[1.2px] rounded-full notiback text-[12px] font-semibold">
                                {noti}
                            </div>
                        </div>
                        <div className="personalinfodash">
                            <div className="flex items-center justify-between gap-[10px]">
                                {(session?.user?.image)?(<img className="rounded-full dashimg " src={session?.user?.image}/>):(<Image className="rounded-full dashimg"
                                               src="/image 11.png" width={50}
                                               height={50}/>)}

                                <div className="flex flex-col items-start justify-center">
                                    <div className="font-semibold namedash">
                                        Dhruv Pankaj
                                    </div>
                                    <div className="titledash">
                                        Producer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="statusbar pr-[64px] flex items-center justify-between">
                    <div className="statusitem">
                        <div
                            className="bg-[#4E36E2] flex items-center justify-between rounded-[20px] gap-[2vw] px-[24px]">
                            <div className="">
                                <svg width="46" height="47" viewBox="0 0 46 47" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="1" width="45" height="45" rx="8.5" stroke="white"/>
                                    <path
                                        d="M40.8025 38.6984L38.1991 41.3017C37.8556 41.6431 37.391 41.8348 36.9066 41.8348C36.4223 41.8348 35.9576 41.6431 35.6141 41.3017L13.8341 19.5584C13.238 19.7311 12.6214 19.8236 12.0008 19.8334C10.8335 19.8325 9.68331 19.5531 8.64578 19.0182C7.60826 18.4833 6.7134 17.7085 6.03562 16.7582C5.35783 15.8078 4.91669 14.7094 4.74888 13.5543C4.58107 12.3991 4.69144 11.2206 5.0708 10.1167L9.72747 14.7734L10.6991 13.8017L13.3025 11.1984L14.2741 10.2267L9.61747 5.57002C10.7214 5.19065 11.8999 5.08029 13.0551 5.2481C14.2102 5.41591 15.3086 5.85705 16.259 6.53483C17.2093 7.21262 17.9841 8.10748 18.519 9.145C19.0538 10.1825 19.3333 11.3327 19.3341 12.5C19.3243 13.1206 19.2319 13.7372 19.0591 14.3334L40.8025 36.1134C41.1439 36.4569 41.3356 36.9215 41.3356 37.4059C41.3356 37.8902 41.1439 38.3549 40.8025 38.6984ZM5.19914 36.1134C4.85768 36.4569 4.66602 36.9215 4.66602 37.4059C4.66602 37.8902 4.85768 38.3549 5.19914 38.6984L7.80247 41.3017C8.14597 41.6431 8.61063 41.8348 9.09497 41.8348C9.57931 41.8348 10.044 41.6431 10.3875 41.3017L20.4158 31.2917L15.2275 26.1034M37.6675 5.16669L30.3341 8.83335V12.5L26.3558 16.4784L30.0225 20.145L34.0008 16.1667H37.6675L41.3341 8.83335L37.6675 5.16669Z"
                                        fill="white"/>
                                </svg>
                            </div>
                            <div className="flex flex-col items-end justify-center py-[25px]">
                                <div className="text-[16px]">Ongoing Projects</div>
                                <div className="text-[44px] font-bold">3</div>
                            </div>
                        </div>
                    </div>
                    <div className="statusitem">
                        <div
                            className="bg-[#48A9F8] flex items-center justify-between rounded-[20px] gap-[2vw] px-[24px]">
                            <div className="">
                                <svg width="46" height="47" viewBox="0 0 46 47" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="1" width="45" height="45" rx="8.5" stroke="white"/>
                                    <path
                                        d="M19.3327 5.16669H26.666C27.6385 5.16669 28.5711 5.553 29.2587 6.24063C29.9464 6.92826 30.3327 7.86089 30.3327 8.83335V12.5H37.666C38.6385 12.5 39.5711 12.8863 40.2587 13.574C40.9464 14.2616 41.3327 15.1942 41.3327 16.1667V36.3334C41.3327 37.3058 40.9464 38.2384 40.2587 38.9261C39.5711 39.6137 38.6385 40 37.666 40H8.33268C7.36022 40 6.42759 39.6137 5.73996 38.9261C5.05232 38.2384 4.66602 37.3058 4.66602 36.3334V16.1667C4.66602 14.1317 6.29768 12.5 8.33268 12.5H15.666V8.83335C15.666 6.79835 17.2977 5.16669 19.3327 5.16669ZM26.666 12.5V8.83335H19.3327V12.5H26.666Z"
                                        fill="white"/>
                                </svg>

                            </div>
                            <div className="flex flex-col items-end justify-center py-[13.5px]">
                                <div className="text-[16px] max-w-[100px] flex statuscardtitle">Applications Received
                                </div>
                                <div className="text-[44px] font-bold">48</div>
                            </div>
                        </div>
                    </div>
                    <div className="statusitem">
                        <div
                            className="bg-[#1BCF85] flex items-center justify-between rounded-[20px] gap-[2vw] px-[24px]">
                            <div className="">
                                <svg width="46" height="47" viewBox="0 0 46 47" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="1" width="45" height="45" rx="8.5" stroke="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.6667 14.3333C15.6667 12.3884 16.4393 10.5231 17.8146 9.14788C19.1898 7.77262 21.0551 7 23 7C24.9449 7 26.8102 7.77262 28.1854 9.14788C29.5607 10.5231 30.3333 12.3884 30.3333 14.3333C30.3333 16.2783 29.5607 18.1435 28.1854 19.5188C26.8102 20.8941 24.9449 21.6667 23 21.6667C21.0551 21.6667 19.1898 20.8941 17.8146 19.5188C16.4393 18.1435 15.6667 16.2783 15.6667 14.3333ZM15.6667 25.3333C13.2355 25.3333 10.9039 26.2991 9.18485 28.0182C7.46577 29.7373 6.5 32.0688 6.5 34.5C6.5 35.9587 7.07946 37.3576 8.11091 38.3891C9.14236 39.4205 10.5413 40 12 40H34C35.4587 40 36.8576 39.4205 37.8891 38.3891C38.9205 37.3576 39.5 35.9587 39.5 34.5C39.5 32.0688 38.5342 29.7373 36.8151 28.0182C35.0961 26.2991 32.7645 25.3333 30.3333 25.3333H15.6667Z"
                                          fill="white"/>
                                </svg>

                            </div>
                            <div className="flex flex-col items-end justify-center py-[25px]">
                                <div className="text-[16px] ">Profile Viewed</div>
                                <div className="text-[44px] font-bold">4,563</div>
                            </div>
                        </div>
                    </div>
                    <div className="statusitem">
                        <div
                            className="bg-[#8BC741] flex items-center justify-between rounded-[20px] gap-[2vw] px-[24px]">
                            <div className="">
                                <svg width="46" height="47" viewBox="0 0 46 47" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" y="1" width="45" height="45" rx="8.5" stroke="white"/>
                                    <path
                                        d="M8.33268 38.1666C7.32435 38.1666 6.46146 37.8079 5.74402 37.0905C5.02657 36.373 4.66724 35.5095 4.66602 34.5V12.5C4.66602 11.4916 5.02535 10.6288 5.74402 9.91131C6.46268 9.19387 7.32557 8.83454 8.33268 8.83331H37.666C38.6744 8.83331 39.5378 9.19265 40.2565 9.91131C40.9752 10.63 41.3339 11.4929 41.3327 12.5V34.5C41.3327 35.5083 40.974 36.3718 40.2565 37.0905C39.5391 37.8091 38.6756 38.1679 37.666 38.1666H8.33268ZM22.9993 25.3333L37.666 16.1666V12.5L22.9993 21.6666L8.33268 12.5V16.1666L22.9993 25.3333Z"
                                        fill="#FFFEFE"/>
                                </svg>

                            </div>
                            <div className="flex flex-col items-end justify-center py-[25px]">
                                <div className="text-[16px]">Unread Messages</div>
                                <div className="text-[44px] font-bold">56</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between gap-[28px] pr-[64px]">
                    <div><Bigcard currname={currname} currrole={currrole}/></div>
                    <div className="flex flex-col gap-[14px]">
                        <div className="text-[22px] font-semibold flex items-center justify-between pr-[20px]">
                            <div>
                                Recommended Jobs
                            </div>
                            <div className="text-[12px] text-[#005EFE] flex items-center gap-[6px] cursor-pointer">
                                <div>View All</div>
                                <div>
                                    <svg className="scale-75" width="9" height="14" viewBox="0 0 9 14" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.94661 6.59275L1.67698 0.618999C1.57237 0.519274 1.43339 0.463642 1.28886 0.463642C1.14433 0.463642 1.00534 0.519274 0.900732 0.618999L0.893981 0.625749C0.843092 0.674094 0.80257 0.732286 0.77488 0.796786C0.747189 0.861286 0.73291 0.930744 0.73291 1.00094C0.73291 1.07113 0.747189 1.14059 0.77488 1.20509C0.80257 1.26959 0.843092 1.32778 0.893981 1.37612L6.79798 7.00112L0.893981 12.6239C0.843092 12.6722 0.80257 12.7304 0.77488 12.7949C0.747189 12.8594 0.73291 12.9289 0.73291 12.9991C0.73291 13.0693 0.747189 13.1387 0.77488 13.2032C0.80257 13.2677 0.843092 13.3259 0.893981 13.3742L0.900732 13.381C1.00534 13.4807 1.14433 13.5364 1.28886 13.5364C1.43339 13.5364 1.57237 13.4807 1.67698 13.381L7.94661 7.40725C8.00174 7.35471 8.04564 7.29153 8.07563 7.22153C8.10563 7.15152 8.12109 7.07616 8.12109 7C8.12109 6.92384 8.10563 6.84847 8.07563 6.77847C8.04564 6.70847 8.00174 6.64528 7.94661 6.59275Z"
                                            fill="#3370F5"/>
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between gap-y-[28px]">
                            <Jobcard currname={currname} currrole={currrole}/>
                            <Jobcard currname={currname} currrole={currrole}/>
                            <Jobcard currname={currname} currrole={currrole}/>
                            <Jobcard currname={currname} currrole={currrole}/>
                            <Jobcard currname={currname} currrole={currrole}/>
                            <Jobcard currname={currname} currrole={currrole}/>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-full gap-8 pr-[64px] ">
                    <div className="text-[22px] font-semibold flex items-center justify-between pr-[20px]">
                        <div>Previously Hired</div>
                        <div className="text-[12px] text-[#005EFE] flex items-center gap-[6px] cursor-pointer">
                            <div>View All</div>
                            <div>
                                <svg className="scale-75" width="9" height="14" viewBox="0 0 9 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.94661 6.59275L1.67698 0.618999C1.57237 0.519274 1.43339 0.463642 1.28886 0.463642C1.14433 0.463642 1.00534 0.519274 0.900732 0.618999L0.893981 0.625749C0.843092 0.674094 0.80257 0.732286 0.77488 0.796786C0.747189 0.861286 0.73291 0.930744 0.73291 1.00094C0.73291 1.07113 0.747189 1.14059 0.77488 1.20509C0.80257 1.26959 0.843092 1.32778 0.893981 1.37612L6.79798 7.00112L0.893981 12.6239C0.843092 12.6722 0.80257 12.7304 0.77488 12.7949C0.747189 12.8594 0.73291 12.9289 0.73291 12.9991C0.73291 13.0693 0.747189 13.1387 0.77488 13.2032C0.80257 13.2677 0.843092 13.3259 0.893981 13.3742L0.900732 13.381C1.00534 13.4807 1.14433 13.5364 1.28886 13.5364C1.43339 13.5364 1.57237 13.4807 1.67698 13.381L7.94661 7.40725C8.00174 7.35471 8.04564 7.29153 8.07563 7.22153C8.10563 7.15152 8.12109 7.07616 8.12109 7C8.12109 6.92384 8.10563 6.84847 8.07563 6.77847C8.04564 6.70847 8.00174 6.64528 7.94661 6.59275Z"
                                        fill="#3370F5"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="justify-between flex flex-wrap items-center gap-y-[50px]">
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>
                         <Jobcard currname={currname} currrole={currrole}/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admindashboard;
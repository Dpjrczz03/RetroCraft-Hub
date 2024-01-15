import React from 'react';
import {useSession} from "next-auth/react";
import Image from "next/image";

function Jobcard(props) {
    const {data: session} = useSession()
    const currname = props.currname
    const currrole = props.currrole
    return (
        <div className="bg-white rounded-[10px] flex flex-col cardcontainer w-[250px] px-[12px] py-[12px] gap-[13px]">
            <div className="carditem flex items-start justify-between w-full">
                <div>{(session?.user?.image)?(<img className="rounded-full dashimg " src={session?.user?.image}/>):(<Image className="rounded-full dashimg"
                                               src="/image 11.png" width={50}
                                               height={50}/>)}</div>
                <div
                    className="text-[#FF9725] bg-[#FFF7E1] text-[12px] font-bold py-[2px] px-[18px] rounded-[5px]">Video
                    Editor
                </div>
            </div>
            <div className="carditem flex flex-col ">
                <div className="text-[16 px] font-bold">Dhruv Pankaj</div>
                <div className="secondary">India</div>
            </div>
            <div className="carditem flex items-center justify-between">
                <div className="text-[12px] font-medium">Rs. 12,000-25,000</div>
                <div
                    className="flex items-center justify-between bg-[#F4F6F8] px-[12.5px] py-[4px] rounded-[5px] gap-[5px]">
                    <div>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.36423 1.94199C9.08123 1.22199 10.1302 1.20699 10.7107 1.78999C11.2927 2.37399 11.2772 3.42999 10.5592 4.14999L9.34773 5.36649C9.27951 5.43731 9.24184 5.5321 9.24284 5.63042C9.24383 5.72875 9.2834 5.82275 9.35303 5.89218C9.42266 5.96162 9.51677 6.00092 9.6151 6.00163C9.71343 6.00235 9.8081 5.96441 9.87873 5.89599L11.0907 4.67949C12.0462 3.71999 12.1662 2.18849 11.2422 1.26049C10.3172 0.331992 8.78873 0.452993 7.83223 1.41249L5.40923 3.84599C4.45373 4.80549 4.33373 6.33699 5.25773 7.26449C5.29224 7.30038 5.33355 7.32904 5.37925 7.34879C5.42496 7.36855 5.47414 7.379 5.52392 7.37955C5.57371 7.38009 5.6231 7.37072 5.66923 7.35197C5.71535 7.33323 5.75728 7.30548 5.79257 7.27036C5.82786 7.23524 5.8558 7.19344 5.87477 7.1474C5.89373 7.10136 5.90334 7.05201 5.90303 7.00222C5.90272 6.95244 5.89249 6.90321 5.87295 6.85741C5.85342 6.81162 5.82496 6.77017 5.78923 6.73549C5.20723 6.15149 5.22323 5.09549 5.94073 4.37549L8.36423 1.94199Z"
                                fill="black" fill-opacity="0.6"/>
                            <path
                                d="M7.74273 4.73501C7.67245 4.66453 7.57704 4.62485 7.47751 4.62471C7.37797 4.62457 7.28246 4.66398 7.21198 4.73426C7.1415 4.80454 7.10182 4.89994 7.10168 4.99948C7.10154 5.09901 7.14095 5.19453 7.21123 5.26501C7.79323 5.84901 7.77773 6.90451 7.05973 7.62501L4.63623 10.058C3.91873 10.778 2.86973 10.793 2.28923 10.21C1.70723 9.62601 1.72323 8.57001 2.44073 7.85001L3.65273 6.63351C3.6875 6.59861 3.71505 6.5572 3.73382 6.51166C3.75258 6.46611 3.76219 6.41731 3.7621 6.36805C3.76201 6.31879 3.75221 6.27003 3.73327 6.22455C3.71434 6.17908 3.68663 6.13778 3.65173 6.10301C3.61683 6.06824 3.57543 6.04069 3.52988 6.02192C3.48433 6.00316 3.43553 5.99354 3.38627 5.99364C3.33701 5.99373 3.28825 6.00352 3.24277 6.02246C3.1973 6.0414 3.156 6.06911 3.12123 6.10401L1.90923 7.32051C0.95373 8.28051 0.83373 9.81151 1.75773 10.7395C2.68273 11.6685 4.21123 11.547 5.16773 10.5875L7.59123 8.15401C8.54673 7.19501 8.66673 5.66251 7.74273 4.73501Z"
                                fill="black" fill-opacity="0.6"/>
                        </svg>
                    </div>
                    <div className="secondary font-semibold">dhruv.com</div>
                </div>
            </div>
            <div className="carditem flex items-center justify-between">

                <div className="bg-[#F4F6F8] p-[4.5px] rounded-[5px] cursor-pointer">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 5.5V20.7417L12.697 18.0404L12.5 17.956L12.303 18.0404L6 20.7417V5.5C6 5.08381 6.14245 4.74014 6.44125 4.44185C6.74047 4.14315 7.0846 4.00057 7.50033 4H17.5C17.9162 4 18.2604 4.14248 18.5594 4.44155C18.8585 4.74061 19.0005 5.08424 19 5.49939V5.5Z"
                            stroke="black" stroke-opacity="0.6"/>
                    </svg>
                </div>


                    <div className="py-[4.5px] px-[9%] bg-[#F4F6F8] rounded-[5px] cursor-pointer">Send JD</div>
                    <div className="py-[4.5px] px-[9%] bg-[#F4F6F8] rounded-[5px] cursor-pointer">Apply</div>

            </div>

        </div>
    );
}

export default Jobcard;
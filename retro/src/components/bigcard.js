import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";

function Bigcard(props) {
    const {data: session} = useSession()
    const currname = props.currname
    const currrole = props.currrole


    return (
        <div
            className="bc w-[250px] bg-white rounded-[10px] flex flex-col items-center justify-center py-[40px] px-[12px] relative">
            <div className="bcitem"><img className="rounded-full w-[115px]" src={session?.user?.image}/></div>
            <div className="bcitem flex flex-col items-center justify-center mt-[8px]">
                <div className="text-[20px] font-semibold">{currname}</div>
                <div className="text-[16px] font-semibold secondarycolor">{currrole?(currrole[0].toUpperCase()+currrole.slice(1,currrole.length)):("")}</div>
            </div>
            <div className="font-medium text-[18px] w-full mt-[20px] flex flex-col gap-[15px] ">
                <div> Recent Activities</div>
                <div className="flex flex-col gap-[12px]">
                    <div className="text-[14px] secondarycolor">
                        Your project received a new application.
                    </div>
                    <div className="text-[14px] secondarycolor">
                        Your project received a new application.
                    </div><div className="text-[14px] secondarycolor">
                        Your project received a new application.
                    </div><div className="text-[14px] secondarycolor">
                        Your project received a new application.
                    </div>
                </div>

            </div>
            <div className="absolute bottom-[12px] right-[12px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.7176 13.06C20.9985 12.7788 21.1562 12.3975 21.1562 12C21.1562 11.6025 20.9985 11.2213 20.7176 10.94L15.0616 5.281C14.7802 4.99961 14.3985 4.84152 14.0006 4.84152C13.6026 4.84152 13.221 4.99961 12.9396 5.281C12.6582 5.5624 12.5001 5.94405 12.5001 6.342C12.5001 6.73996 12.6582 7.12161 12.9396 7.403L16.0356 10.5L4.50057 10.5C4.10275 10.5 3.72122 10.658 3.43991 10.9393C3.15861 11.2206 3.00057 11.6022 3.00057 12C3.00057 12.3978 3.15861 12.7794 3.43991 13.0607C3.72122 13.342 4.10275 13.5 4.50057 13.5L16.0356 13.5L12.9396 16.596C12.8002 16.7353 12.6897 16.9007 12.6143 17.0828C12.5389 17.2648 12.5001 17.46 12.5001 17.657C12.5001 17.854 12.5389 18.0492 12.6143 18.2312C12.6897 18.4133 12.8002 18.5787 12.9396 18.718C13.0789 18.8573 13.2443 18.9679 13.4264 19.0433C13.6084 19.1187 13.8035 19.1575 14.0006 19.1575C14.1976 19.1575 14.3927 19.1187 14.5748 19.0433C14.7568 18.9679 14.9222 18.8573 15.0616 18.718L20.7176 13.06Z"
                        fill="black"/>
                </svg>

            </div>
        </div>
    );
}

export default Bigcard;
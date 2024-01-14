'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'
import {redirect} from "next/navigation";


function Nav(props) {
    const {data: session} = useSession()

    // console.log(session?.user?.image)

    if (session) {
        return (
            <div className="flex gap-4 items-center justify-between px-4 py-2 sticky top-0 z-10 nav">
                <Link href={'/'}>
                    <div className="scale-125 ml-5 retro cursor-pointer">
                        Retro<span className="hub text-black px-2 ml-1">Hub</span>
                    </div>
                </Link>

                <div className="flex items-center justify-end gap-2 p-1">

                    <div className="userid">
                        {/*<div>*/}
                        {/*    <img src={session.user?.image} width="40" className="rounded-full"/>*/}
                        {/*</div>*/}
                        {(session.user.name)?(<div className="userid">
                            Welcome, {(session.user?.name.split(" ")[0])[0].toUpperCase() + (session.user?.name.split(" ")[0]).slice(1, (session.user?.name.split(" ")[0]).length).toLowerCase()}!
                        </div>):(<div></div>)}

                    </div>
                    <div className="scale-150 scale-x-50 -translate-y-0.5">
                        |
                    </div>
                    <div className="cursor-pointer signout py-1" onClick={() => signOut()}>
                        Sign Out
                    </div>
                </div>
            </div>
        )
    } else {
        return (<div className="flex items-center justify-between sticky top-0 z-10 nav px-4">
                <Link href={'/'}>
                    <div className="scale-125 ml-5 retro cursor-pointer py-4">
                        Retro<span className="hub text-black px-2 ml-1">Hub</span>
                    </div>
                </Link>
                {/*<div className="cursor-pointer pr-5" onClick={()=>signIn('google')}>*/}
                {/*    Sign In*/}
                {/*</div>*/}
            </div>
        )
    }


}

export default Nav;
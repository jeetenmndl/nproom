'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'



const LoginLogout = () => {

    // const logged = useRef(false);
    const [logged, setlogged] = useState("")
    
    useEffect(() => {
        setlogged(localStorage.getItem("auth-token"))
        // console.log(logged);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    if(logged != null && logged != ""){
        return (
                <Link href="/force-logout" className="font-bold cursor-pointer hover:underline">LOG OUT</Link>
        )
    }
    else{
        return(
            
            <Link href="/auth" className="font-bold cursor-pointer hover:underline">LOG IN</Link>
        )
    }
}

export default LoginLogout
'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import getUserProfile from '@/lib/actions/getUserProfile'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'

const ProfileCard = () => {

    const {toast} = useToast();
    const router = useRouter()

    useEffect( () => {
        const token = localStorage.getItem("auth-token");
        if(token=="" || token==null){
            toast({
                title: "Oops !",
                description: "Log in to view Profile.",
            });
            console.log(token)
            router.push("/auth");
        }
        getUser(token);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const getUser = async (token) => {
        const response = await getUserProfile(token);
        setuser(response.data)
    }

    const [user, setuser] = useState(null);
    
  return (
    
    <section className='w-1/4 mt-14'>
        {
            user &&
        <Card className="bg-slate-800 text-white sticky top-12">
            <CardHeader>
                <CardTitle>
                    User Details
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <p className='font-semibold text-sm'>Name</p>
                    <p>{user.name}</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Phone</p>
                    <p>{user.phone}</p>
                </div>
                <div>
                    <p className='font-semibold text-sm'>Address</p>
                    <p>{user.address}</p>
                </div>
            </CardContent>
        </Card>
        }
    </section>
  )
}

export default ProfileCard
'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import getUserProfile from '@/lib/actions/getUserProfile'

const ProfileCard = () => {
    useEffect( () => {
        const token = localStorage.getItem("auth-token");
        getUser(token);
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
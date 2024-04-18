import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const page = () => {
  return (
    <main className='flex justify-center mt-16'>
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Create your account to sell/buy rooms</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
                <Button className="w-full">Register</Button>
            </CardFooter>
        </Card>
    </main>
  )
}

export default page
"use client"

import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from './ui/input'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { UploadButton } from '@/lib/Uploadthing'
import { useToast } from './ui/use-toast'
import postUser from '@/lib/actions/postUser'
  


const formSchema = z.object({
    name: z.string().min(3, {
      message : "At least 3 characters.",
    }),
    address: z.string().min(3, {
      message : "At least 3 characters.",
    }),
    study: z.string().optional() ,
    phone: z.string().min(10, {
      message : "Must be 10 numbers.",
    }).max(10,{message:"Must be 10 numbers"}),
    
  })

const Register = () => {

    const {toast}= useToast();
    const [document, setDocument] = useState(null);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name:"",
            address:"",
            study:"",
            phone:"",
    },
    })

    // 2. Define a submit handler.
    async function onSubmit(values) {
        console.log(values,document)
        const response = await postUser(values, document);
        console.log(response);
    }

  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
    <Card>
        <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>Create your account to sell/buy rooms</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">

            {/* full name */}
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Full name</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Full name..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

             {/* address */}
             <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Shanti chowk, biratnagar 10" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

             {/* phone */}
             <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                   <Input type="number" className="placeholder:text-gray-400 font-light" placeholder="Biratnagar..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            <div>
                <p className='font-medium text-sm mb-2'>Document Photo</p>
            <UploadButton
                className='w-full'
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                // alert("Upload Completed");
                setDocument(res[0].url);
                toast({
                    title: "Uploaded !",
                    description: "This image was uploaded sucessfully.",
                })
                }}
                onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
                }}
            />
            <span className='text-xs text-gray-500'>Student ID, citizenship, driving liscense, etc.</span>
            </div>

            <Popover>
                <PopoverTrigger className='text-sm font-medium'>For students: <span className='underline'>Click here</span></PopoverTrigger>
                <PopoverContent>
                      {/* study */}
                    <FormField
                    control={form.control}
                    name="study"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Ongoing study <span className='text-xs'>Optional</span> </FormLabel>
                        <FormControl>
                        <Input className="placeholder:text-gray-400 font-light" placeholder="passed college / studying +2 science" {...field} />
                        </FormControl>
                        <FormDescription className="text-xs">
                            Assured gifts if you are a student.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </PopoverContent>
            </Popover>
           
        </CardContent>
        <CardFooter>
            <Button type="submit" className="w-full">Register</Button>
        </CardFooter>
    </Card>
    </form>
    </Form>
  )
}

export default Register
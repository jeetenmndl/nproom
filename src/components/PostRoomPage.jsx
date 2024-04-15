import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Check, Images, MapPinned, Plug, TriangleAlert } from 'lucide-react'
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
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Switch } from './ui/switch'
 
const formSchema = z.object({
  city: z.string().min(3, {
    message : "At least 3 characters.",
  }),
  area: z.string().min(3, {
    message : "At least 3 characters.",
  }),
  neighbourhood: z.string().min(3, {
    message : "At least 10 characters.",
  }),
  owner: z.string().min(3, {
    message : "Ast least 3 characters.",
  }),
  contact: z.string().min(10, {
    message : "Must be 10 numbers.",
  }).max(10,{message:"Must be 10 numbers"}),
})


const PostRoomPage = () => {

    const [step, setStep] = useState(1);

    const nextStep = ()=>{
        if (step<5){
            console.log("step updated", step+1)
            setStep(step+1);
        }
    }
    const previousStep = ()=>{
        if (step>1){
            console.log("step updated back", step-1)
            setStep(step-1);
        }
    }


    
    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          city: "",
          area:"",
          neighbourhood:"",
          owner:"",
          contact:"",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }


  return (
    <>
    <section className=' relative '>
            <article className=' p-4 mt-8 sticky top-8 flex flex-col items-center'>
            

            <div className='flex gap-4 items-center mb-8 '>
                    <span className={step>1?"bg-green-400 p-2 rounded-full text-white":"bg-gray-200 p-2 rounded-full text-gray-400"}>
                        {
                            step>1
                            ?
                            <Check strokeWidth={2} size={16}/>
                            :
                            <MapPinned strokeWidth={1.25} size={16}/>
                        }
                    </span>
                    <div className={step>=1?"text-black":"text-gray-400"} >
                        <h3 className='font-semibold text-lg leading-5'>Location</h3>
                        <p className='text-sm'>City, address and neighbourhood</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-8 '>
                    <span className={step>2?"bg-green-400 p-2 rounded-full text-white":"bg-gray-200 p-2 rounded-full text-gray-400"}>
                        {
                            step>2
                            ?
                            <Check strokeWidth={2} size={16}/>
                            :
                            <Plug strokeWidth={1.25} size={16}/>
                        }
                    </span>
                    <div className={step>=2?"text-black":"text-gray-400"} >
                        <h3 className='font-semibold text-lg leading-5'>Location</h3>
                        <p className='text-sm'>City, address and neighbourhood</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-8 '>
                    <span className={step>3?"bg-green-400 p-2 rounded-full text-white":"bg-gray-200 p-2 rounded-full text-gray-400"}>
                        {
                            step>3
                            ?
                            <Check strokeWidth={2} size={16}/>
                            :
                            <TriangleAlert strokeWidth={1.25} size={16}/>
                        }
                    </span>
                    <div className={step>=3?"text-black":"text-gray-400"} >
                        <h3 className='font-semibold text-lg leading-5'>Location</h3>
                        <p className='text-sm'>City, address and neighbourhood</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center mb-8 '>
                    <span className={step>4?"bg-green-400 p-2 rounded-full text-white":"bg-gray-200 p-2 rounded-full text-gray-400"}>
                        {
                            step>4
                            ?
                            <Check strokeWidth={2} size={16}/>
                            :
                            <Images strokeWidth={1.25} size={16}/>
                        }
                    </span>
                    <div className={step>=4?"text-black":"text-gray-400"} >
                        <h3 className='font-semibold text-lg leading-5'>Location</h3>
                        <p className='text-sm'>City, address and neighbourhood</p>
                    </div>
                </div>

            </article>
    </section>

    <section className='w-full min-h-dvh py-8'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            
        {/* Step 1: location  */}
        <article className={step==1?"space-y-4":"hidden"}> 

            <div className='grid grid-cols-2 gap-4'>
            {/* city name */}
            <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
                <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Biratnagar..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* area name  */}
            <FormField
            control={form.control}
            name="area"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Area</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Shanti Chowk..." {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            </div>

            {/* neighbourhood   */}
            <FormField
            control={form.control}
            name="neighbourhood"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Neighbourhood</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Near abc Campus/ xyz hotel" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            <div className="grid grid-cols-2 gap-4">
            {/* owner */}
            <FormField
            control={form.control}
            name="owner"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Owner&apos;s name</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="Owner's full name" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* Contact info */}
            <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" type="number" placeholder="98XXXXXXXX" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            </div>

            <div className="grid grid-cols-2 gap-4">
            {/* rent */}
            <FormField
            control={form.control}
            name="rent"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Rent <span className='text-xs'>(per month)</span></FormLabel>
                <FormControl>
                   <Input className="placeholder:text-gray-400 font-light" placeholder="5000" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            {/* rent type */}
            <FormField
            control={form.control}
            name="rentType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Rent Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Fixed">Fixed</SelectItem>
                  <SelectItem value="Negotiable">Negotiable</SelectItem>
                </SelectContent>
              </Select>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />

            </div>
        </article>

        {/* step 2: rooms and facility  */}
        <article className={step==2?"grid grid-cols-2 gap-4":"hidden"}>
            <Card>
                <CardHeader>
                    <CardTitle>Rooms Information</CardTitle>
                </CardHeader>
                <CardContent>

                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Facilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">

                    <FormField
                    control={form.control}
                    name="wifi"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Wi-Fi
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="parking"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Parking Area
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="electricity"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Electricity
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="water"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Water Supply
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="furnished"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Furnished
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="terrace"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Terrace
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="h-5"
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                </CardContent>
            </Card>
        
        </article>

            
            <Button type="submit">Submit</Button>
        </form>
        </Form>

         {/* buttons back and next     */}
        <div className='grid grid-cols-2 gap-6'>
            <Button className="bg-gray-200 text-black border-1 border-gray-300 hover:text-white" onClick={previousStep} >Back</Button>
            
            <Button className="bg-main" onClick={nextStep} >Next</Button>
         </div>
    </section>
    </>
  )
}

export default PostRoomPage
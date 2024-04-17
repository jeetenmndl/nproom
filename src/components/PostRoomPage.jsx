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
import { Textarea } from './ui/textarea'
import { Checkbox } from './ui/checkbox'
import Image from 'next/image'
 
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
    message : "At least 3 characters.",
  }),
  contact: z.string().min(10, {
    message : "Must be 10 numbers.",
  }).max(10,{message:"Must be 10 numbers"}),
  wifi: z.boolean().optional(),
  parking: z.boolean().optional(),
  electricity: z.boolean().optional(),
  water: z.boolean().optional(),
  terrace: z.boolean().optional(),
  furnished: z.boolean().optional(),
  rent: z.string().min(1, {
    message : "Cannot be empty.",
  }),
  rentType: z.string().min(1,{
    message:  "Choose one",
  }),
  type: z.string().min(1, {
    message : "Choose one",
  }), 
  bathroom: z.string().min(3, {
    message : "Choose one",
  }), 
  roomSize: z.string().min(3, {
    message : "Choose one",
  }),
  bedroom: z.string().min(1, {
    message : "Cannot be empty.",
  }),
  kitchen: z.string().min(1, {
    message : "Cannot be empty.",
  }),
  hall: z.string().min(1, {
    message : "Cannot be empty.",
  }),
  description: z.string().min(10, {
    message : "Write some ...",
  }),
  rules: z.boolean().optional(),
  disclosure: z.string().min(10, {
    message : "Write some ...",
  }),
  mainPhoto: z.string(),
  photos: z.string(),
  
})


const PostRoomPage = () => {

    const [step, setStep] = useState(1);

    const nextStep = ()=>{
        if (step<5){
            setStep(step+1);
            document.documentElement.scrollTop = 0; 
        }
    }
    const previousStep = ()=>{
        if (step>1){
            setStep(step-1);
            document.documentElement.scrollTop = 0; 
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
          wifi: false,
          parking: false,
          electricity: false,
          water: false,
          terrace: false,
          furnished: false,
          rent: "",
          rentType: "",
          type: "",
          bathroom: "",
          roomSize: "",
          bedroom: "",
          kitchen: "",
          hall: "",
          description: "",
          rules: false,
          disclosure: "",
          mainPhoto: "",
          photos: "",
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
            <aside>                
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
                        <h3 className='font-semibold text-lg leading-5'>Rooms & Facilities</h3>
                        <p className='text-sm'>Number of rooms and type of facilities</p>
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
                        <h3 className='font-semibold text-lg leading-5'>Photos</h3>
                        <p className='text-sm'>Photos of rooms and location</p>
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
                        <h3 className='font-semibold text-lg leading-5'>Rules</h3>
                        <p className='text-sm'>Standard rules and house rules</p>
                    </div>
                </div>
            </aside>
            </article>
    </section>

    <section className='w-full min-h-dvh py-8'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            
        {/* Step 1: location  */}
        <article className={step==1||step==5?"space-y-4 mb-12":"hidden"}> 

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

             {/* buttons back and next     */}
             {step==5?"":
                <div className='grid grid-cols-2 gap-6 pt-12'>
                    <div  className="bg-gray-200 text-gray-400 px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-not-allowed" onClick={previousStep} >Back</div>
                    
                    <div className="bg-main text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer" onClick={nextStep} >Next</div>
                </div>
             }
        </article>

        {/* step 2: rooms and facility  */}
        <article className={step==2||step==5?"mb-12":"hidden"}>
            <div className='grid grid-cols-2 gap-4 mb-6'>

            {/* rooms  */}
            <Card>
                <CardHeader>
                    <CardTitle>Rooms Information</CardTitle>
                </CardHeader>
                <CardContent>
                        {/*  type */}
                        <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Stay Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="h-8 w-40">
                                <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Room">Room</SelectItem>
                            <SelectItem value="Flat">Flat</SelectItem>
                            <SelectItem value="Home">Home</SelectItem>
                            <SelectItem value="Office">Office</SelectItem>
                            </SelectContent>
                        </Select>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                         {/* bedroom */}
                        <FormField
                        control={form.control}
                        name="bedroom"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Bedroom</FormLabel>
                            <FormControl>
                            <Input className="placeholder:text-gray-400 h-8 w-12 font-semibold" type="number" placeholder="" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         {/* kitchen */}
                         <FormField
                        control={form.control}
                        name="kitchen"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Kitchen</FormLabel>
                            <FormControl>
                            <Input className="placeholder:text-gray-400 h-8 w-12 font-semibold" type="number" placeholder="" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         {/* hall */}
                         <FormField
                        control={form.control}
                        name="hall"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Hall</FormLabel>
                            <FormControl>
                            <Input className="placeholder:text-gray-400 h-8 w-12 font-semibold" type="number" placeholder="" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                         
                         {/*  bathroom */}
                         <FormField
                        control={form.control}
                        name="bathroom"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Bathroom</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="h-8 w-40">
                                <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Personal">Personal</SelectItem>
                            <SelectItem value="Shared">Shared</SelectItem>
                            </SelectContent>
                        </Select>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        {/*  size */}
                        <FormField
                        control={form.control}
                        name="roomSize"
                        render={({ field }) => (
                            <FormItem className="flex justify-between items-center">
                            <FormLabel>Room Size</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="h-8 w-40">
                                <SelectValue placeholder="Choose One" className="placeholder:text-gray-400 font-light" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="Small">Small</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Large">Large</SelectItem>
                            </SelectContent>
                        </Select>
                            {/* <FormDescription>
                                This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                </CardContent>
            </Card>

            {/* facilities  */}
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
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                </CardContent>
            </Card>
            </div>

            {/* description  */}
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea
                    placeholder="Write about your rooms, environment, facilities and more."
                    className="h-32"
                    {...field}
                    />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            
              {/* buttons back and next     */}
             {step==5?"":
                <div className='grid grid-cols-2 gap-6 pt-12'>
                    <div  className="bg-gray-200 text-black hover:text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer " onClick={previousStep} >Back</div>
                    
                    <div className="bg-main text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer" onClick={nextStep} >Next</div>
                </div>
             }
        
        </article>

        {/* step 3: rooms and facility  */}
        <article className={step==3||step==5?"mb-12 space-y-4":"hidden"}>

            {/* <FormField
            control={form.control}
            name="mainPhoto"
            render={({ field }) => (
                <FormItem>
                <FormLabel>More Photos</FormLabel>
                <FormControl>
                    <Input type="file"  accept="image/*" placeholder="Choose Photo" {...field} />
                </FormControl>
                <FormDescription>
                    This photo will be displayed at first.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            /> */}

            <FormField
            control={form.control}
            name="photos"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Photos</FormLabel>
                <FormControl>
                    <Input type="file" placeholder="Choose Photo" {...field} multiple/>
                </FormControl>
                <FormDescription>
                    Upload 3 or 4 photos of rooms and surrounding
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

              {/* buttons back and next     */}
             {step==5?"":
                <div className='grid grid-cols-2 gap-6 pt-12'>
                    <div  className="bg-gray-200 text-black hover:text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer " onClick={previousStep} >Back</div>
                    
                    <div className="bg-main text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer" onClick={nextStep} >Next</div>
                </div>
             }
        </article>

        {/* step 4: rules  */}
        <article className={step==4||step==5?"mb-12":"hidden"}>
            <div className='grid grid-cols-2 gap-4'>
            <Card>
                <CardHeader>
                    <CardTitle>Select Rules</CardTitle>
                </CardHeader>
                <CardContent>

                    <FormField
                    control={form.control}
                    name="rules"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between">
                    <div>
                        <FormLabel className="text-base">
                        Click to apply rules
                        </FormLabel>
                    </div>
                    <FormControl>
                        <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    </FormItem>
                    )}
                    />

                    <ul className='space-y-2 list-disc ml-4 mt-4'>
                        <li>Arrive before 10 PM</li>
                        <li>No loud Music at night</li>
                        <li>No smoking and alcohol</li>
                        <li>Rent to be paid on time</li>
                        <li>Pets not allowed</li>
                        <li>Maintin Cleanliness</li>
                    </ul>
                
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>
                        More Rules
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     {/* disclosure  */}
                    <FormField
                    control={form.control}
                    name="disclosure"
                    render={({ field }) => (
                        <FormItem>
                        <FormControl>
                            <Textarea
                            placeholder="Write about your home rules and the behavior of tenant"
                            className="h-60"
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>
            </Card>
            
            

            </div>
            
             {/* buttons back and next     */}
            <div className='grid grid-cols-2 gap-6 pt-12'>
                <div  className="bg-gray-200 text-black hover:text-white hover:bg-primary  px-4 py-2.5 rounded-md text-sm grid place-items-center cursor-pointer " onClick={previousStep} >Back</div>
                
                <Button type="submit" className="bg-main" onClick={nextStep} >Submit</Button>
            </div>
        </article>

        </form>
        </Form>

        
    </section>
    </>
  )
}

export default PostRoomPage
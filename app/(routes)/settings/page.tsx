import { prisma } from '@/app/db'
import { auth } from '@/auth'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { CloudUploadIcon, UploadCloud } from 'lucide-react'
import { redirect } from 'next/navigation'

import React from 'react'

export const page = async () => {
    const session = await auth()
  return (
    <div className='max-w-md mx-auto'>
            <h1 className='font-bold text-2xl mb-3 text-center'>Profile settings</h1>
    <form action={ async (data:FormData) => {
        'use server'
        await prisma.profile.upsert({
            where : {
                email: session?.user?.email || ""
            },
            update : {
                username : data.get('username') 
            },
            create : {
                email : session?.user?.email || '',
                username : data.get("username")
            }

        })
        redirect('/profile')
    }
    }>
        <div className='flex gap-4 items-center'>
            <div>

                <div className="bg-gray-400 size-24 rounded-full  "></div>
            </div>
                <div>
                <Button variant='surface'>
                    <CloudUploadIcon/>
                    Change Avatar
                   </Button>

                </div>
        </div>
        <p className='font-bold mt-2'>Username</p>
        <TextField.Root name='username' className='max-w-2xl mx-auto' placeholder='your_username' />

        <p className='font-bold mt-2'>Name</p>
        <TextField.Root className='max-w-2xl mx-auto' placeholder='Json Brody' />

        <p className='font-bold mt-2'>Subtitle</p>
        <TextField.Root className='max-w-2xl mx-auto' placeholder='Graphic Designer' />


        <p className='font-bold mt-2'>Bio</p>
        <TextArea/>
    <div className="mt-2 flex justify-center">
    <Button variant='solid' className='cursor-pointer'>Save Settings</Button>

    </div>
        
    </form>
    </div>
  )
}

export default page

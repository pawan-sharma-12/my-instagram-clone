'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import { CloudUploadIcon, UploadCloud } from 'lucide-react'
import UpdateProfile from '@/action'
import { useRouter } from 'next/navigation'
import { Profile } from '@prisma/client'
const SettingsForm = ({
    userEmail, profile
}:{   
    userEmail : string,
    profile: Profile
}) => {
    const router = useRouter<HTMLInputElement>()
    const fileInputRef = useRef()
    const [file , setFile] = useState<File>();
    const [avatarUrl, setAvatarUrl] = useState(profile.avatar)
    useEffect(()=>{
        if(file){
            const data = new FormData();
            data.set("file", file);
            fetch("/api/upload", {
              method: "POST",
              body: data,
            }).then(response => {
                response.json().then(url =>{
                    setAvatarUrl(url)
                    console.log('avatarUrl = ', avatarUrl)
                })

            });
            

        } },[file])
  return (
    <form action={ async (data:FormData) => {
        await UpdateProfile(data, userEmail);
        router.push('/profile')
        router.refresh()
    }
    }>
        <input name='avatar' type='hidden' value={avatarUrl}/>
        <div className='flex gap-4 items-center'>
            <div>

                <div className="bg-gray-400 size-24 rounded-full aspect-square  overflow-hidden border border-gray-400 shadow-md shadow-gray-400">
                    <img className='' src={avatarUrl} alt="" />
                </div>
            </div>
                <div>
                <input type='file' ref={fileInputRef} className='hidden' onChange={
                    (ev) =>{
                        setFile(ev.target.files?.[0])
                    }
                }/>
                <Button variant='surface'
                 onClick={() => 
                    fileInputRef.current?.click()
                }
                 type='button'
                >
                    <CloudUploadIcon/>
                    Change Avatar
                   </Button>

                </div>
        </div>
        <p className='font-bold mt-2'>Username</p>
        <TextField.Root 
        name='username' 
        className='max-w-2xl mx-auto' 
        placeholder='your_username' 
        defaultValue={profile.username || ''} />

        <p className='font-bold mt-2'>Name</p>
        <TextField.Root  name='name' className='max-w-2xl mx-auto' placeholder='Json Brody'
            defaultValue={profile.name || ""}
        />

        <p className='font-bold mt-2'>Subtitle</p>
        <TextField.Root name='subtitle' className='max-w-2xl mx-auto' placeholder='Graphic Designer'
            defaultValue={profile.subtitle || ""}
        />


        <p className='font-bold mt-2' >Bio</p>
        <TextArea name='bio'
            defaultValue={profile.bio || ""}
        />
    <div className="mt-2 flex justify-center">
    <Button variant='solid' className='cursor-pointer'>Save Settings</Button>

    </div>
        
    </form>
  )
}

export default SettingsForm

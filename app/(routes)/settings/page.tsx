import { prisma } from '@/app/db'
import { auth } from '@/auth'
import SettingsForm from '@/components/SettingsForm'

import React from 'react'

export const page = async () => {
    const session = await auth()
    if (!session?.user?.email){
        return "Not Logged in "
    }
    const profile = await prisma.profile.findFirstOrThrow({
        where : {
            email : session.user?.email 
        }
    })
  return (
    <div className='max-w-md mx-auto'>
            <h1 className='font-bold text-2xl mb-3 text-center'>Profile settings</h1>
            <SettingsForm profile = {profile} userEmail={session?.user?.email || ""}/>
    </div>
  )
}

export default page

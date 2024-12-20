import { CheckIcon, ChevronLeft, Cog } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import PostsGrid from '@/components/PostsGrid'
import { auth } from '@/auth'
import { prisma } from '@/app/db'


const  page = async () => {
  const session = await auth()
  const profile = await prisma.profile.findFirstOrThrow({
    where : {
      email : session?.user?.email as string
    }
  })
  return (
    <main>
      <section className="flex justify-between items-center ">
        <button>
          <ChevronLeft/>
        </button>
        <div className='font-bold flex items-center gap-1'>
          {profile.username}
          <div className="size-5 bg-ig-red rounded-full inline-flex justify-center items-center text-white">
            <CheckIcon size={16}/>
          </div>
        </div>
        <Link href={"/settings"}>
          <Cog/>
        </Link>
      </section>
      <section className='mt-8 flex justify-center '>
      <div className="size-48 bg-orange-500 rounded-full p-2 bg-gradient-to-tr from-ig-orange to-ig-red">
        <div className="size-44 bg-white rounded-full p-2">

        <div className="size-40 aspect-square overflow-hidden rounded-full">
      <img src={profile.avatar || ''
      } alt="avatar" />

        </div>
        </div>
        </div>

      </section>
      <section className='text-center mt-4'>
        <h1 className='text-xl font-bold'>
          {profile.name}
        </h1>
        <p className='text-gray-500 mt-1 mb-1'>
          {profile.subtitle}
        </p>
        <p className=''>
          {profile.bio}
        </p>
      </section>
      <section className='mt-4'>
        <div className="flex justify-center gap-4 font-bold">

        <Link href={''}>Posts</Link>
        <Link className='text-gray-400' href={'/highlights'}>Highlights</Link>
        </div>
      </section>
      <section className='mt-4'>
        <PostsGrid/>

      </section>
    </main>
  )
}

export default page

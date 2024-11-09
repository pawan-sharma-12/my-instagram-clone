import { CheckIcon, ChevronLeft, Cog } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import PostsGrid from '@/components/PostsGrid'

const page = () => {
  return (
    <main>
      <section className="flex justify-between items-center ">
        <button>
          <ChevronLeft/>
        </button>
        <div className='font-bold flex items-center gap-1'>
          User Name
          <div className="size-5 bg-ig-red rounded-full inline-flex justify-center items-center text-white">
            <CheckIcon size={16}/>
          </div>
        </div>
        <div>
          <Cog/>
        </div>
      </section>
      <section className='mt-8 flex justify-center '>
      <div className="size-48 bg-orange-500 rounded-full p-2 bg-gradient-to-tr from-ig-orange to-ig-red">
        <div className="size-44 bg-white rounded-full p-2">

        <div className="size-40 aspect-square overflow-hidden rounded-full">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />

        </div>
        </div>
        </div>

      </section>
      <section className='text-center mt-4'>
        <h1 className='text-xl font-bold'>
          Ella
        </h1>
        <p className='text-gray-500 mt-1 mb-1'>
          Business Account
        </p>
        <p className=''>
          Professional Market Consultant<br/> Helping brands to reach the audience with their products efficiently 
          <br/> Contact : Ella@gmail.com
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

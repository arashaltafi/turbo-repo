import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-16 bg-rose-50'>
      <Link href="/docs" className='px-4 py-2 rounded-lg text-2xl border border-dotted border-white bg-red-500 hover:bg-red-600 transition-all !text-white font-bold'>
        Go To Docs Module
      </Link>

      <Link href="/docs" className='px-4 py-2 rounded-lg text-2xl border border-dotted border-white bg-red-500 hover:bg-red-600 transition-all !text-white font-bold'>
        Go To Docs Module
      </Link>
    </div>
  )
}

export default Home
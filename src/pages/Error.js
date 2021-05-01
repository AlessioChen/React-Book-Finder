import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='flex justify-center text-2xl'>
      <div className='text-center'>
        <h1> opps! it's a dead end </h1>
        <Link to ='/' className='bg-blue-300 hover:bg-blue-600 text-white p-2 border-black rounded-full '> Back home</Link>
      </div>
    </section>
  )
}

export default Error
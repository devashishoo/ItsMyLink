import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const preregister = () => {
  return (
    <>
      <div className='max-w-screen-lg mx-auto px-4 min-h-screen'>
        <Navbar />
        <section id='formtry' className='mt-16'>
          <h1 className='text-6xl font-bold text-center'>
            We are launching soon.
          </h1>
          <p className='text-2xl font-semibold text-center my-8'>
            Register to be the first one to use
          </p>
          <form
            action='https://formsubmit.co/me.devashishthakur@gmail.com'
            method='POST'
            className='flex flex-col justify-center items-center mt-16 gap-4'
          >
            <input
              className='border-2 border-gray-400 py-3 px-4 text-sm w-full max-w-sm rounded-lg'
              type='text'
              placeholder='Your Name'
              name='name'
              required
            />
            <input
              className='border-2 border-gray-400 py-3 px-4 text-sm w-full max-w-sm rounded-lg'
              type='email'
              name='email'
              placeholder='Your Email'
              required
            />
            <button
              className='bg-gray-900 text-gray-100 py-3 px-4 text-sm w-full max-w-sm rounded-lg font-medium'
              type='submit'
            >
              Claim your link
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default preregister

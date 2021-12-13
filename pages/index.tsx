import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Home: NextPage = () => {
  const [username, setUserName] = useState('')

  const changeState = (e: any) => {
    const { value } = e.target
    setUserName(value)
  }

  return (
    <>
      <div className='max-w-screen-lg mx-auto px-4'>
        <Navbar />
        <section
          id='hero'
          className='flex flex-col gap-8 justify-center items-center mt-8'
        >
          <h1 className='text-5xl md:text-7xl font-bold leading-normal md:leading-relaxed text-center py-8'>
            One Link for all your{' '}
            <span className='bg-black text-white'>Links.</span>
          </h1>
          <p className='text-center'>
            Your page will be <b>ItsMyL.ink/</b>
            {username}
          </p>
          <div className='form flex flex-col md:flex-row md:px-2 gap-2 md:gap-0'>
            <div className='flex flex-row'>
              <div className='hidden sm:block rounded-l border-gray-400 border-2 border-r-0 py-3 pl-6 font-semibold text-md'>
                ItsMyL.ink /
              </div>
              <input
                onChange={() => changeState(event)}
                className='border-2 sm:border-l-0 border-gray-400 py-3 px-4 text-sm'
                type='text'
                id='email'
                placeholder='Your Name'
              />
            </div>

            <Link href='/preregister'>
              <button
                className='bg-gray-900 text-gray-100 px-8 py-3 md:rounded-r focus:outline-0 text-sm font-medium'
                type='submit'
              >
                Claim your link
              </button>
            </Link>
          </div>
          <p className='text-center leading-relaxed'>
            <a
              className='text-blue-500 font-bold'
              href='https://twitter.com/heyDevashish'
              target='_blank'
            >
              @HeyDevashish
            </a>{' '}
            is building ItsMyLink in Public.{' '}
            <a
              className='text-blue-500 font-bold'
              href='https://twitter.com/heyDevashish'
              target='_blank'
            >
              Follow{' '}
            </a>
            for latest updates
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 justify-center items-center mt-10'>
            <img
              className='w-3/5 md:w-4/5 mx-auto'
              src='rohan.jpg'
              alt='features_1'
            />
            <div className='flex flex-col gap-4'>
              <h2 className='text-2xl font-bold mx-auto'>Rohan</h2>
              <ul className='text-center md:text-left md:w-4/5 mx-auto flex flex-col gap-4 mt-4'>
                <li>Rohan works for McDonalds as a Designer </li>
                <li>
                  Rohan wants to display all social media and offer links of
                  McDonalds at one place
                </li>
                <li>He wants to add a “Call to Action” button</li>
                <li>
                  Rohan also wants to cutomize bioz page for McDonalds with
                  their brand colors
                </li>
              </ul>
            </div>
          </div>
          <p className='text-center text-xl w-3/5 pt-8 mx-auto'>
            Rohan can <span className='font-bold'>Customize </span> ItsMyLink
            page according to his company’s needs
          </p>
          <video className='sm:w-3/5 mx-auto' autoPlay muted loop>
            <source src='looped_mcdonalds.mp4' type='video/mp4' />
          </video>
        </section>

        <section id='features'>
          <h2 className='text-5xl font-bold py-8 text-center'>Features</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 justify-center items-center mt-10'>
            <img
              className='w-3/5 md:w-4/5 mx-auto block md:hidden'
              src='features1.png'
              alt='features_1'
            />
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-bold leading-relaxed'>
                Construct your own unique profile with our Widgets
              </h3>
              <p className='leading-relaxed'>
                We provide multiple widgets and customization options which can
                be used to build your unique ItsMyLink page.
              </p>
              <Link href='/preregister'>
                <div className='button bg-gray-900 text-white px-4 py-2 w-40 text-center rounded-md mt-2'>
                  Pre Register
                </div>
              </Link>
            </div>
            <img
              className='w-3/5 md:w-4/5 mx-auto hidden md:block'
              src='features1.png'
              alt='features_1'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 justify-center items-center mt-10'>
            <img
              className='w-3/5 md:w-4/5 mx-auto'
              src='features1.png'
              alt='features_1'
            />
            <div className='flex flex-col gap-4'>
              <h3 className='text-xl font-bold leading-relaxed'>
                Setup your ItsMyLink page in minutes with help of our Templates
              </h3>
              <p className='leading-relaxed'>
                We offer multiple templates for all type of professions which
                you can choose based on your needs.
              </p>
              <Link href='/preregister'>
                <div className='button bg-gray-900 text-white px-4 py-2 w-40 text-center rounded-md mt-2'>
                  Pre Register
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id='comparison'>
          <h2 className='text-5xl font-bold pt-16 pb-8 text-center'>
            Templates
          </h2>
          <div className='flex flex-row space-between items-start mt-8'>
            <div className='flex flex-col gap-8'>
              <img src='rachel.jpg' className='w-3/5 mx-auto' alt='' />
              <h2 className='text-2xl font-bold mx-auto'>Rachel</h2>
              <ul className='w-4/5 mx-auto flex flex-col gap-4 text-center md:text-start'>
                <li>
                  Rachel is a Writer, She wants to increase sales of her Book
                </li>
                <li>Rachel is looking to grow a business</li>
                <li>She wants to share links to buy her book. </li>
                <li>
                  Rachel wants to collect email address of visitors so she could
                  notify them when her Book launch
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-8'>
              <img src='mike.jpg' className='w-3/5 mx-auto' alt='' />
              <h2 className='text-2xl font-bold mx-auto'>Mike</h2>
              <ul className='w-4/5 mx-auto flex flex-col gap-4 text-center md:text-start'>
                <li>Mike is a Developer, He wants to share his work </li>
                <li>Mike is looking for a Job</li>
                <li>
                  Mike wants to share his previous work experience and Resume
                </li>
                <li>
                  Mike wants to share his previous work experience and Resume
                </li>
              </ul>
            </div>
          </div>
          <p className='text-center text-xl md:w-3/5 pt-16 pb-4 mx-auto'>
            Mike and Rachel are different and need different profiles, which
            they can build with our
            <span className='font-bold'> Custom Templates</span>
          </p>
          <video className='sm:w-3/5 mx-auto' autoPlay muted loop>
            <source src='looped_comp.mp4' type='video/mp4' />
          </video>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home

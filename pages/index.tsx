import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import CitiesList from '../components/CitiesList'

const Home: NextPage = () => {
  const [input, setInput] = useState("")
  
  function inputHandler (event: React.FormEvent<HTMLInputElement>) {
    var lowerCase = event.currentTarget.value.toLowerCase()
    setInput(lowerCase)
  }

  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='fixed h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4'>
        <div>
          <h1 className='text-4xl font-noto md:text-5xl'>Welcome to My Weather App</h1>
          <input type="text" name="search" id="search" placeholder='Search for city...' className='p-2 text-black rounded-lg w-full mt-10 mb-2' onChange={inputHandler}/>
          <div className=' h-[175px] overflow-auto scrollbar'>
            <CitiesList input={input}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

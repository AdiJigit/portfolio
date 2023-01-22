import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {

  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Adi',
      'Who-loves-Cappuccino.jsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className='h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
        src='https://lh3.googleusercontent.com/a/AEdFTp6iS2z8A2dsgJ9wBWM3FQ5FpvAvKXOY3UxOQUxQ8w=s288-p-rw-no'
        alt='avatar'
        className='relative  rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h1 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h1>
        <h1>
          <span className='text-3xl lg:text-5xl font-semibold scroll-px-10'>{text}</span>
          <Cursor cursorColor='#f7AB0A' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='hero-btn'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='hero-btn'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-btn'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='hero-btn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
      initial={{
        x: -200,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{ once: false }}
        src='https://media.licdn.com/dms/image/D4D03AQHsp2n4jWpNBA/profile-displayphoto-shrink_800_800/0/1667141294276?e=1676505600&v=beta&t=WBEssj996jX-boBNReUa8fCrkIweVUqrZ01p1BQ3qAg'
        className='xl:mt-[100px] mt-20 -mb-20 md:mb-0 flex-shrink-0 sm:w-56 sm:h-56 h-40 w-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
      />

      <div className='space-y-10 px-0 sm:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a <span className='underline decoration-[#F7AB0A]/50'>little bit</span> background
        </h4>
        <p className='text-base'>
          Hi, I'm Adi. I specialize in web development process.
          I think everything nowadays is getting internet global and to have platform or scalable business you have to be on the Platform of Web.
        </p>
      </div>
    </motion.div>
  )
}
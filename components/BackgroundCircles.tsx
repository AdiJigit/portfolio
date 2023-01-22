import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
      animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.0, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5,
      }}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full sm:w-[400px] sm:h-[400px] mt-52' />
      <div className='absolute border border-[#333333] rounded-full w-[250px] h-[250px] mt-52' />
      <div className='absolute border border-[#f7AB0A] rounded-full opacity-20 h-[350px] sm:h-[500px] w-[350px] sm:w-[500px] mt-52 animate-pulse' />
    
    </motion.div>
  )
}
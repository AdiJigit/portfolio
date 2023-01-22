import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20'>
      <motion.div className='flex flex-row items-center'
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      >
        {/* Social icons */}
        <SocialIcon url="https://www.linkedin.com/in/adi-jigit-a06489246/" fgColor='gray' bgColor='transparent' />
      </motion.div>

      <Link href='#contact' legacyBehavior>
          <motion.div className='flex flex-row items-center text-gray-300 cursor-pointer'
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          >
          <SocialIcon
            url="https://twitter.com/AdiJigit"
            fgColor='gray'
            bgColor='transparent'
            network='email'
            />

              <p className='uppercase hidden md:inline-flex text-sm text-gray-400 pr-6'>Get In Touch</p>

          </motion.div>
          </Link>
    </header>
  )
}
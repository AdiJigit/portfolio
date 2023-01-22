import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl"w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='sm:w-32 sm:h-32 h-24 w-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      alt=''
      src='data:image/png;base64,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
      '
    />
    <div className='px-8 md:px-10'>
      <h4 className='sm:text-2xl text-xl font-light'>Web Development</h4>
      <p className='font-bold text-normal mt-1'>Personal Projects</p>
      <div className='flex space-x-2 my-2'>
        <img
          className='h-10 w-10 rounded-full'
          src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png'
        />
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='https://reactjs.org/logo-og.png'
        />
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png'
        />
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'
        />
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='https://cdn.worldvectorlogo.com/logos/next-js.svg'
        />
        <img
          className='h-10 w-10 rounded-full object-cover'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png'
        />
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
      </div>
      <p className='uppercase py-3 text-gray-300'></p>

      <ul className='list-disc space-y-4 ml-5'>
        <li>Development</li>
        <li>Server Side</li>
        <li>Client Side</li>
        <li>Design</li>
        <li>Optimization</li>
      </ul>
    </div>
  </article>
  )
}
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {};

export default function Contact({}: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:adijigit@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };


  return (
    <div className='h-screen flex relative flex-col text-center md:text-left mf:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          Contact
        </h3>

        <div className='my-40 flex flex-col space-y-10'>
          <h4 className='mt-[300px] text-xl sm:text-2xl font-semibold text-center'>
            Feel free to contact me.<br/>{' '}
            <span className='decoration-[#f7ab0a]/50 undeline'>Let's Talk.</span>
          </h4>

          <div className='flex flex-col gap-8'>
            <div className='flex justify-center items-center space-x-5'>
              <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
              <p className='text-xl'>+996550551899</p>
            </div>
            <div className='flex justify-center items-center space-x-5'>
              <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
              <p className='text-xl'>adijigit@gmail.com</p>
            </div>
            <div className='flex justify-center items-center space-x-5'>
              <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
              <p className='text-xl'>123 Developer Lane</p>
            </div>
          </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 sm:w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
            <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
        </form>
      </div>
    </div>
  )
}
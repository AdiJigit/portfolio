import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
type Props = {};

export default function Projects({}: Props) {
  return (
    <motion.div className="h-full relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-24">
        Projects
      </h3>

      <div className="relative w-full flex flex-wrap overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <ProjectCard
          desc="Jigit Shop app that has a Login and Logout Authentication. It has a
          beatiful Home Screen with all the items looking company like H&M. It's integrated payment system for customers. The payment
          gateaway is Paypal."
          title="JIGIT Ecommerce Web App"
          img="/img/ecommMobile.png"
          target="https://ecomm-shop.vercel.app/"
        />
        <ProjectCard
          img="/img/pizzaMobile.png"
          title="Pizza Ninja from Adi."
          desc="A beautiful Design with minimalistic content. It is fully responsive and interactive web application where you can order a products. Also it has additional admin rights for adding managing products. Payment is Paypal24."
          target="https://pizza-app-rho.vercel.app/"
        />
        <ProjectCard
          img="/img/RF.png"
          title="RevoxFilm"
          desc="A beautiful Design with minimalistic content. It is fully responsive and interactive web application where you can get in stories."
          target="https://revoxfilm-client.onrender.com/"
        />
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

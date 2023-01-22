import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  img: string;
  title: string;
  desc: string;
  target: string;
};

export default function ProjectCard({ img, target, title, desc }: Props) {
  return (
    <div className="mt-32 ml-2 sm:w-screen w-[500px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-28 md:p-44 h-screen">
      <a href={target} target="_blank">
        <motion.img
          initial={{
            y: -300,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={img}
          alt="portfolio-1"
          width={500}
          height={500}
          className="w-[200px] h-[400px] object-cover"
        />
      </a>
      <div className="">
        <h4 className="text-2xl font-semibold text-center">{title}</h4>

        <p className="md:text-left mt-6">
          {desc}
        </p>
      </div>
    </div>
  );
}

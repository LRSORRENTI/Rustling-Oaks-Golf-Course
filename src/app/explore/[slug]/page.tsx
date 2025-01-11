'use client'

import Image from "next/image";

import { notFound } from "next/navigation";

import { projects } from "@/sections/Explore"; // Move your projects array to a shared file

import { FC, useEffect, useRef } from "react";



import {  motion, useScroll, useTransform} from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { div } from "motion/react-client";



export default function CourseDetails({ params }: any) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }


  const { scope, entranceAnimation  } = useTextRevealAnimation();

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation])


  return (
      <div className="">
      <div className="border border-green-500 flex flex-col lg:flex-row lg:mt-4 mx-auto">
        {/* Animated H1 */}
        <motion.h1
           initial={{ opacity: 0}}
           animate={{ opacity: 1}}
        //   animate={controls}
          ref={scope}
          className="text-5xl md:text-8xl lg:text-9xl mb-6 lg:pr-28 lg:ml-24 lg:pt-20"
        >
          {project.name}
        </motion.h1>
        <div className="relative">
          <Image
            src={project.image}
            alt={`${project.name} image`}
            className="rounded-lg lg:pr-4"
          />
        </div>
      </div>
      <div className="mt-8 text-lg md:text-xl lg:text-2xl flex mx-auto justify-center text-left max-w-[46rem]">
          <p>
            Welcome to {project.name}! Here you'll find more details about this
            part of Rustling Oaks. (Add more descriptive text here about the
            course, driving range, mini golf, or restaurant.)
          </p>
        </div>
   </div>
  );
}

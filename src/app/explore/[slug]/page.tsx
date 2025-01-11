"use client";

import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/sections/Explore"; // ensure projects is exported from a shared file
import { FC, useEffect, useRef } from "react";

import { motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

export default function CourseDetails({ params }: any) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { scope, entranceAnimation } = useTextRevealAnimation();

  useEffect(() => {
    entranceAnimation();
  }, [entranceAnimation]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Animated H1 */}
        <motion.h1
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-8xl lg:text-9xl lg:mt-4 flex-1"
        >
          {project.name}
        </motion.h1>

        {/* Image container */}
        <div className="relative flex-1 max-w-full">
          <Image
            src={project.image}
            alt={`${project.name} image`}
            width={1200}
            height={800}
            quality={90}
            // objectFit = cover in Next/Image is replaced by style in Next 13
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full h-[40rem] max-h-[80rem] "
            priority
          />
        </div>
      </div>

      <div className="mt-8 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-left">
        <p>
          Welcome to {project.name}! Here you'll find more details about this
          part of Rustling Oaks. (Add more descriptive text here about the
          course, driving range, mini golf, or restaurant.)
        </p>
      </div>
    </div>
  );
}

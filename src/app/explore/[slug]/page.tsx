"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/sections/Explore"; // ensure projects is exported from a shared file

import { useEffect } from "react";
import { motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import BagImg from '../../../assets/images//golf/Bag.jpg'

export default function CourseDetails({ params }: any) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // -- 1) Create multiple references for each text block you want animated --
  //    or you can wrap all text blocks in a single parent if you prefer
  const {
    scope: titleScope,
    entranceAnimation: titleEntrance,
  } = useTextRevealAnimation();

  const {
    scope: introTextScope,
    entranceAnimation: introTextEntrance,
  } = useTextRevealAnimation();

  // Example data to show 4 "checkerboard" sections
  // You can replace image paths and text with real data
  const checkerboardItems = [
    {
      image: BagImg,
      text: "Checkerboard content #1 – brief details about the image.",
    },
    {
      image: BagImg,
      text: "Checkerboard content #2 – more details about the next image.",
    },
    {
      image: BagImg,
      text: "Checkerboard content #3 – a different description for the image.",
    },
    {
      image: BagImg,
      text: "Checkerboard content #4 – final text for this example section.",
    },
  ];

  // -- 2) We'll generate a separate hook instance for each checkerboard <p> if you want each to animate separately.
  //    If you want them all in one container, you could do that instead.
  const checkerboardHooks = checkerboardItems.map(() => useTextRevealAnimation());

  // Fire entrance animations once on mount
  useEffect(() => {
    titleEntrance();
    introTextEntrance();
    checkerboardHooks.forEach((hook) => {
      hook.entranceAnimation();
    });
  }, [titleEntrance, introTextEntrance, checkerboardHooks]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* -------------------------
          Title + Main Image
      -------------------------- */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Animated H1 */}
        <motion.h1
          ref={titleScope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-8xl lg:text-9xl lg:mt-4 flex-1"
        >
          {project.name}
        </motion.h1>

        {/* Image container with fade-in animation */}
        <motion.div
          className="relative flex-1 max-w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }} // adjust duration as needed
        >
          <Image
            src={project.image}
            alt={`${project.name} image`}
            width={1200}
            height={800}
            quality={90}
            style={{ objectFit: "cover" }}
            className="rounded-lg w-full h-[40rem] max-h-[80rem]"
            priority
          />
        </motion.div>
      </div>

      {/* -------------------------
          Intro Paragraph
      -------------------------- */}
      <div className="mt-8 max-w-3xl mx-auto">
        <motion.p
          ref={introTextScope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-left"
        >
          Welcome to {project.name}! Here you'll find more details about this part
          of Rustling Oaks...
        </motion.p>
      </div>

      {/* -------------------------
          Checkerboard Layout
      -------------------------- */}
      <div className="mt-16 space-y-16">
        {checkerboardItems.map((item, i) => {
          const { scope, entranceAnimation } = checkerboardHooks[i];
          // Even index = image on left, text on right
          // Odd index  = text on left, image on right
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  isEven
                    ? "order-1 md:order-1" // image on left
                    : "order-2 md:order-2 md:col-start-2 md:col-end-3" // image on right
                }
              >
                <Image
                  src={item.image}
                  alt={`checkerboard-${i}`}
                  width={1200}
                  height={800}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg w-full h-64 md:h-80"
                />
              </motion.div>

              {/* Text with reveal animation */}
              <motion.p
                ref={scope}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  isEven
                    ? "order-2 md:order-2 text-lg md:text-xl lg:text-2xl"
                    : "order-1 md:order-1 md:col-start-1 md:col-end-2 text-lg md:text-xl lg:text-2xl"
                }
              >
                {item.text}
              </motion.p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

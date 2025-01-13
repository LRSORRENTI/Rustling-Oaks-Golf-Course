"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/sections/Explore";
import { courseData } from "../courseData"; // adjust path as needed

import { useEffect } from "react";
import { motion, useInView } from "motion/react"; // note: import useInView here
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

/** A small subcomponent to handle a single row's animations + layout. */
function CheckerboardRow({
  index,
  image,
  text,
}: {
  index: number;
  image: any;
  text: string;
}) {
  // Determine left/right image positioning
  const isEven = index % 2 === 0;

  // Our custom text reveal hook
  const { scope, entranceAnimation } = useTextRevealAnimation();

  // In-view detection for this row's text
  const inView = useInView(scope, {
    once: true, // animate only once
    amount: 0.2, // how much of the element should be in view to trigger
  });

  // Fire the text reveal animation when the row enters the viewport
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        // only animate once (if you prefer) with motion’s viewport options:
        viewport={{ once: true, amount: 0.2 }}
        className={
          isEven
            ? "order-1 md:order-1" // image on left
            : "order-2 md:order-2 md:col-start-2 md:col-end-3" // image on right
        }
      >
        <Image
          src={image}
          alt={`checkerboard-${index}`}
          width={1200}
          height={800}
          style={{ objectFit: "cover", boxShadow:" rgb(38, 57, 77) 0px 20px 30px -10px" }}
          className="rounded-lg w-full h-64 md:h-80"
        />
      </motion.div>

      {/* Text with reveal animation */}
      <motion.p
        ref={scope} // tie the inView detection + text reveal to this <p>
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={
          isEven
            ? "order-2 md:order-2 text-lg md:text-xl lg:text-2xl"
            : "order-1 md:order-1 md:col-start-1 md:col-end-2 text-lg md:text-xl lg:text-2xl"
        }
      >
        {text}
      </motion.p>
    </div>
  );
}

export default function CourseDetails({ params }: any) {
  const { slug } = params;

  // Find the "project" from Explore that matches the slug
  const project = projects.find((p) => p.slug === slug);

  // If not in your projects array, bail
  if (!project) {
    notFound();
  }

  // Grab the checkerboard items + optional custom intro paragraph
  // from our courseData. If not found, we can fallback to an empty array
  const dataForSlug = courseData[slug] || {
    checkerboard: [],
    introParagraph: "",
  };

  const checkerboardItems = dataForSlug.checkerboard;

  // Optionally override or customize introduction text
  const customIntroText = dataForSlug.introParagraph
    ? dataForSlug.introParagraph
    : `Welcome to ${project.name}! Here you'll find more details about this part of Rustling Oaks...`;

  // Animation for the main Title
  const { scope: titleScope, entranceAnimation: titleEntrance } =
    useTextRevealAnimation();
  // Animation for the Intro Paragraph
  const { scope: introTextScope, entranceAnimation: introTextEntrance } =
    useTextRevealAnimation();

  // We also want the Title & Intro to animate only when in view
  const titleInView = useInView(titleScope, { once: true, amount: 0.2 });
  const introInView = useInView(introTextScope, { once: true, amount: 0.2 });

  // Fire entrance animations for Title + Intro once they're in view
  useEffect(() => {
    if (titleInView) {
      titleEntrance();
    }
  }, [titleInView, titleEntrance]);

  useEffect(() => {
    if (introInView) {
      introTextEntrance();
    }
  }, [introInView, introTextEntrance]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* -------------------------
          Title + Main Image
      -------------------------- */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
        {/* Animated H1 */}
        <div className="">
        <motion.h1
          ref={titleScope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl md:text-8xl lg:text-8xl lg:mt-4 flex-1 lg:mb-10 max-w-[30rem]"
        >
          {project.name}
          
        </motion.h1>
        <motion.p
          ref={introTextScope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl lg:text-2xl text-left lg:max-w-[30rem] mt-6 lg:mt-0"
        >
          {customIntroText}
        </motion.p>
        </div>

        {/* Main image from projects array */}
        <motion.div
          className="relative flex-1 max-w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }} // triggers fade-in once image is ~30% visible
          transition={{ duration: 1.2 }}
        >
          <Image
            src={project.image}
            alt={`${project.name} image`}
            width={1200}
            height={800}
            quality={90}
            style={{ objectFit: "cover", boxShadow:" rgb(38, 57, 77) 0px 20px 30px -10px" }}
            className="rounded-lg w-full h-[40rem] max-h-[80rem] lg:ml-12"
            priority
          />
        </motion.div>
      </div>

      {/* -------------------------
          Checkerboard Layout
      -------------------------- */}
      <div className="mt-16 space-y-16">
        {checkerboardItems.map((item, i) => (
          <CheckerboardRow
            key={i}
            index={i}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

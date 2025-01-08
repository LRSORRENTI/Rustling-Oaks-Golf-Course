"use client";

import { FC, useRef, useState } from "react";

import image1 from "@/assets/images/golf/Baker.jpg";
import image2 from "@/assets/images/golf/Cart.avif";
import image3 from "@/assets/images/golf/Clarke.jpg";

import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

const testimonials = [
  {
    name: "John Baker",
    // company: "Golf Enthusiast",
    role: "Avid Player",
    quote:
      "Rustling Oaks offers the perfect blend of challenging courses and serene landscapes. Every round here feels like an escape.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Martha Green",
    // company: "Family Outings Pro",
    role: "Mini Golf Champion",
    quote:
      "Our family had an incredible time at Rustling Oaks. The mini golf course is fun for all ages, and the restaurant is top-notch!",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "David Clark",
    // company: "Corporate Retreat Planner",
    role: "Event Organizer",
    quote:
      "Hosting our corporate golf tournament at Rustling Oaks was a seamless experience. The staff went above and beyond to make it memorable.",
    image: image3,
    imagePositionY: 0.55,
  },
];


const Testimonials: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // For parallax-like text effect
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });
  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Current testimonial index
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // This locks the carousel buttons while old + new animations proceed
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClickPrev = () => {
    // If either old is exiting or new is entering, ignore the click
    if (isAnimating) return;

    setIsAnimating(true);

    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    });
  };

  const handleClickNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTestimonialIndex((curr) => {
      if (curr === testimonials.length - 1) {
        return 0;
      }
      return curr + 1;
    });
  };

  return (
    <section className="section" id="testimonials">
      <h2
        className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden"
        ref={titleRef}
      >
        <motion.span className="whitespace-nowrap" style={{ x: transformTop }}>
        Nice words from our past golfers
        </motion.span>
        <motion.span
          className="whitespace-nowrap self-end text-golf-green"
          style={{ x: transformBottom }}
        >
          Nice words from our past golfers
        </motion.span>
      </h2>

      <div className="container">
        <div className="mt-20">
          {/* 
            mode="wait": new child won't mount until old child is fully unmounted
            We REMOVED onExitComplete to avoid resetting isAnimating too early
          */}
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(
              ({ name, role, quote, image, imagePositionY }, index) =>
                index === testimonialIndex && (
                  <Testimonial
                    key={name}
                    name={name}
                    // company={company}
                    role={role}
                    quote={quote}
                    image={image}
                    imagePositionY={imagePositionY}
                    // 1) Pass the parent's callback: re-enable after new item ENTERS
                    onEnterComplete={() => {
                      setIsAnimating(false);
                    }}
                  />
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex gap-4 mt-6 lg:mt-10">
          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full
                       hover:bg-golf-green hover:text-white hover:border-golf-green
                       transition-all duration-500"
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full
                       hover:bg-golf-green hover:text-white hover:border-golf-green
                       transition-all duration-500"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

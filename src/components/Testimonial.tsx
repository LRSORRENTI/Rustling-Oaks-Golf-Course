import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence, motion, MotionProps } from "motion/react";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

interface TestimonialProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  name: string;
  role: string;
  // company: string;
  imagePositionY: number;
  image: string | StaticImport;
  className?: string;
  // 1) NEW: parent can pass a callback to know when the entrance is done
  onEnterComplete?: () => void;
}

const Testimonial = (props: TestimonialProps) => {
  const {
    quote,
    name,
    role,
    // company,
    image,
    imagePositionY,
    className,
    onEnterComplete,
    ...rest
  } = props;

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      // 2) Wait for quote to enter, then cite to enter
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation().then(() => {
          // 3) ONLY after everything is finished entering, tell parent
          onEnterComplete?.();
        });
      });
    } else {
      // Exiting: wait for quote & cite to exit, then remove from DOM
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    quoteEntranceAnimation,
    citeEntranceAnimation,
    quoteExitAnimation,
    citeExitAnimation,
    safeToRemove,
    onEnterComplete, // if this changes
  ]);

  return (
    <motion.div
      // Wrap the entire testimonial in a motion.div
      // AnimatePresence will look for initial/animate/exit up here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // You can also add transitions if you want a fade on the entire block
      transition={{ duration: 0.2 }}
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center",
        className
      )}
      {...(rest as MotionProps)}
    >
      {/* IMAGE + "BLACK SLIDE" OVERLAY */}
      <div className="aspect-square md:aspect-[9/16] md:col-span-2 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{ width: "100%" }}
          animate={{ width: 0 }}
          exit={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
        <Image
          src={image}
          alt={name}
          className="object-cover size-full"
          style={{ objectPosition: `50% ${imagePositionY * 100}%` }}
        />
      </div>

      {/* TEXT + QUOTE */}
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
          ref={citeScope}
        >
          - {name}  
        </cite>
      </blockquote>
    </motion.div>
  );
};

export default Testimonial;

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { HTMLAttributes, useEffect } from "react";

import { twMerge } from "tailwind-merge";

import SplitType from "split-type";

import { useAnimate } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = (props: {
    quote: string;
    name: string;
    role: string;
    company: string;
    imagePositionY: number;
    image: string | StaticImport;
    className?: string;
} & HTMLAttributes<HTMLDivElement>) => {

const {quote, name, role, company, image, imagePositionY, className, ...rest} = props;

const { scope: quoteScope, entranceAnimation: quoteAnimate } = useTextRevealAnimation();

const [citeScope, citeAnimate] = useAnimate();



return (
          <div  className={twMerge("grid md:grid-cols-5 md:gap-8 lg:gap-16 md:items-center", className)}
          {...rest}>
                    <div className="aspect-square md:aspect-[9/16] md:col-span-2">
                      <Image src={image} alt={name} className="object-cover size-full" style={{objectPosition: `50% ${imagePositionY * 100}%`}}/>
                    </div>
                    <blockquote className="md:col-span-3">
                      <div className="text-3xl md:text-5xl lg:text-6xl mt-8 md:mt-0" ref={quoteScope}>
                    <span>&ldquo;</span>
                        {quote}
                      <span>&rdquo;</span>
                      </div>
                      <cite className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl">{name}, {role} at {company}</cite>
                    </blockquote>
                </div>
        )

 }

 export default Testimonial;
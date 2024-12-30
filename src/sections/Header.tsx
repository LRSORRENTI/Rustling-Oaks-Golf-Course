'use client'

import { header } from "motion/react-client";
import { FC, useEffect, useState } from "react";

import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();  

  useEffect(() => {
    if(isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
        topLineScope.current,
        {
          rotate: 45
        },
       ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4
          },
        ],
        [
        bottomLineScope.current,
        {
          rotate: -45
        },
       ]
      ]);
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0
          },
        ],
        [
        topLineScope.current,
        {
          translateY: 0
        },
      ]
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0
          },
        ],
        [
        bottomLineScope.current,
        {
          translateY: 0
        },
      ]
      ]);
    }
  },
   [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope
  ]);

  return (
    <header>
      <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <div>
              <a href="/"><span className="text-xl font-bold uppercase text-white">Luke&nbsp; Sorrenti</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    <div className="fixed top-0 left-0 w-full">
      <div className="container !max-w-full">
        <div className="flex justify-end h-20 items-center">
          <div className="flex items-center gap-4">
            <div className="size-11 border          border-stone-400 rounded-full  inline-flex items-center justify-center bg-stone-200"
            onClick={() => setIsOpen(!isOpen)
            }
            aria-label="Open & Close Menu Icon"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" 
                ref={topLineScope}
                style={{
                  transformOrigin: "12px 8px",
                  // transform: "translateY(4px) rotate(45deg)"
                }}/>
                <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" 
                ref={bottomLineScope}
                style={{
                  transformOrigin: "12px 16px",
                  // transform: "translateY(-4px) rotate(-45deg)"
                }}/>
              </svg>
              </div>
              <button className="bg-red-orange-500 h-11 px-6 rounded-xl text-white border border-red-orange-500 uppercase hidden md:inline-flex items-center">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
 
  </header>
  );
};

export default Header;

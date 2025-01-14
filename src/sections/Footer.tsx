'use client'

import { FC, useEffect } from "react";

import Button from "@/components/Button";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { useInView } from "motion/react";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel
} from "@/components/alert-dialog";


const navItems = [
  { label: "About", href: "#intro" },
  { href: "#projects", label: "Discover" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faqs", label: "Faqs" },
  { href: "#contact", label: "Contact" },
];

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(new URL(e.currentTarget.href).hash);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">Tee Times available for today</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight"
                ref={scope}
              >
                Why wait? Let&apos;s make your next round truly extraordinary
              </h2>
              {/* Book Teetime Button with AlertDialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="mt-8"
                    iconAfter={
                      <div className="size-5 overflow-hidden">
                        <div className="w-12 h-6 flex transition-transform duration-300 group-hover/button:-translate-x-1/2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 mt-[0.1rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-5 mt-[0.1rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                      </div>
                    }
                  >
                    <p className="pt-[0.1rem]">Book Teetime</p>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Notice</AlertDialogTitle>
                    <AlertDialogDescription>
                      Our online booking is temporarily down. Please call to book a tee time.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex justify-end mt-4">
                    <AlertDialogCancel className="bg-gray-200 px-4 py-2 rounded text-black">
                      Close
                    </AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div>
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a
                    href={href}
                    key={label}
                    onClick={handleClickNavItem}
                  >
                    <Button variant="text" className="text-lg">{label}</Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Copyright &copy; Rustling Oaks &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { FC } from "react";

import Button from "@/components/Button";


const navItems = [
  {
    href: '#',
    label: 'Home'
  },
  {
    href: '#',
    label: 'Projects'
  },
  {
    href: '#',
    label: 'Testimonials'
  },
  {
    href: '#',
    label: 'Faqs'
  },
  {
    href: '#',
    label: 'Contact'
  }
]

const Footer: FC = () => {
  return <footer className="bg-stone-900 text-white ">
    <div className="container">
      <div className="section">
      <div className="flex items-center gap-3 ">
        <div className="size-3 rounded-full bg-green-400"></div>
        <span className="uppercase">One spot available for next nonth</span>
      </div>
      <h2 className="text-4xl mt-8 font-extralight">Enough talk let's make something great together</h2>
         <Button variant="secondary" 
         className="mt-8"
         iconAfter={
              <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="size-5 mt-[0.7rem]">
              <path 
              strokeLinecap="round" strokeLinejoin="round" 
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
          }>
            <p className="pt-[0.6rem]">info@test.com</p>
          </Button>
      <nav className="flex flex-col gap-8 mt-16">
        {navItems.map(({ href, label}) => (
          <a href={href} 
             key={label}>
             <Button variant="text"
             className="text-lg">{label}</Button>
            </a>
        ))}
      </nav>
      </div>
      <p className="py-16 text-white/30 text-sm">Copyright &copy; GoCenter &bull; All rights reserved</p>
    </div>
  </footer>
};

export default Footer;

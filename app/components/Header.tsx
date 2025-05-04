import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useWindowSize from '../hooks/UseWindowSize';

const navLinks = [
  { name: 'About', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Demo', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];


interface Props {
    setSelectedSection: (section: 'login' | 'chatroom') => void;
  }
  
const Header: React.FC<Props> = ({ setSelectedSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <header className="bg-white w-full z-50 relative">
        <div className="mx-auto  px-4 sm:px-6 lg:px-[8%] w-full">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <img src='https://res.cloudinary.com/dequoncot/image/upload/v1746347981/Logo_utklwl.png' alt="logo" className="w-[62px] h-[24px] lg:w-[95px] lg:h-[35px]" />
            </div>

            <div className="hidden md:block">
              <nav>
                <ul className="flex items-center gap-6 text-lg">
                {navLinks.map((link) => (
  <li key={link.name} className="relative group">
    <a className="text-gray-600 transition cursor-pointer" href={link.href}>
      {link.name}
      <span className="block relative">
        <motion.div
          layoutId="underline"
          className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#FB8E0B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
        />
      </span>
    </a>
  </li>
))}

                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 flex justify-center items-center">
                <h1 className="text-gray-600 text-base lg:text-lg cursor-pointer hover:text-[#FB8E0B]" onClick={() => setSelectedSection("login")}>Login</h1>
                <div className="hidden sm:flex">
                  <button onClick={() => setSelectedSection("chatroom")} className="group relative h-12 overflow-hidden cursor-pointer rounded-md bg-[#FB8E0B] px-6 text-white font-semibold transition">
                    <span>Get Started Free</span>
                    <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
                  </button>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="rounded-sm bg-[#FB8E0B] p-2 text-white cursor-pointer"
                >
                  <Menu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
{width !== undefined && width < 1024 && (

<AnimatePresence>
{isOpen && (
  <motion.aside
    initial={{ x: '100%' }}
    animate={{ x: 0 }}
    exit={{ x: '100%' }}
    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    className="fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg p-6"
  >
    <div className="flex justify-between items-center mb-6">
      <button onClick={() => setIsOpen(false)}>
        <X className="text-gray-700 cursor-pointer" />
      </button>
    </div>

    <nav className="flex flex-col gap-4">
{navLinks.map((link) => (
<div key={link.name} className="relative group">
<a
href={link.href}
onClick={() => setIsOpen(false)}
className="text-gray-700 text-base"
>
{link.name}
<motion.div
  layoutId="underline"
  className="absolute left-0 -bottom-1 h-[2px] w-[20%] bg-[#FB8E0B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
/>
</a>
</div>
))}

<div className="my-4 w-full h-[1px] bg-gray-300" />

<button
onClick={() => setSelectedSection("chatroom")}
className="bg-[#FB8E0B] text-white py-2 px-4 rounded-md cursor-pointer"
>
Get Started Free
</button>
</nav>

  </motion.aside>
)}
</AnimatePresence>
)}
    </>
  );
};

export default Header;

import React from 'react'
import { TextEffect } from './TextEffect';

interface Props {
  setSelectedSection: (section: 'login' | 'chatroom') => void;
}
const HeroSection = ({setSelectedSection}:Props) => {
  return (
    <div className='w-full mx-auto  px-4 sm:px-6 lg:px-[8%] flex justify-between items-center gap-12 lg:gap-0 flex-col lg:flex-row mt-8'>
      <div className="w-full lg:w-1/2 space-y-4">
      <TextEffect
  per='char'
  preset='fade'
  delay={0.5}
  as='h1'
  className='text-[#1B1C20] leading-[40px] lg:leading-[60px] text-[30px] lg:text-[50px] font-bold'
>
  Start chatting with customers, anytime, anywhere with Apex
</TextEffect>

<TextEffect per="word" preset="fade" delay={1} className='text-[#383A47] leading-[25px] lg:leading-[30px] text-[14px] lg:text-[16px] w-xs lg:max-w-sm'>
    Great software that allows you to chat from any place at any time without any interruption.
  </TextEffect>
      <button onClick={() => setSelectedSection("chatroom")} className="group cursor-pointer relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-[#FB8E0B] py-1 pl-6 pr-14 font-medium text-white">
  <span className="z-10 pr-2 text-white transition-colors duration-300 group-hover:text-[#FB8E0B]">
   Start Chatting Now
  </span>
  <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white transition-all duration-300 group-hover:w-[calc(100%-8px)]">
    <div className="mr-3.5 flex items-center justify-center">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-[#FB8E0B]"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
</button>
<div className="w-full lg:w-[70%] border border-gray-200 justify-between  gap-5 flex items-center rounded-full  p-1 shadow-sm">
<div className="flex -space-x-[0.9rem] ">
      <img
        className="ring-white rounded-full ring-2"
        src="https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png"
        width={48}
        height={48}
        alt="Avatar 01"
      />
      <img
        className="ring-white rounded-full ring-2"
        src="https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png"
        width={48}
        height={48}
        alt="Avatar 02"
      />
      <img
        className="ring-white rounded-full ring-2"
        src="https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png"
        width={48}
        height={48}
        alt="Avatar 03"
      />
      <img
        className="ring-white rounded-full ring-2"
        src="https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png"
        width={48}
        height={48}
        alt="Avatar 04"
      />
       
    </div>
    <p className="text-black px-2 text-xs">
        Trusted by <strong className="text-gray-500 font-medium">60K+</strong>{" "}
        developers.
      </p>
</div>
    
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img src="/lady.png" alt="hero" className="w-full h-full object-cover" />
        </div>
    </div>
  )
}

export default HeroSection
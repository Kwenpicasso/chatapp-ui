import React from 'react'

interface Props {
    setSelectedSection: (section: 'login' | 'chatroom') => void;
  }
  
const SellingSection = ({setSelectedSection}:Props) => {
  return (
    <div className='w-full bg-white p-[5%] gap-6 mt-[7%] mx-auto  px-4 sm:px-6 lg:px-[8%] flex justify-center items-center flex-col-reverse lg:flex-row'>
    <div className="w-full lg:w-1/2 space-y-5">
    <h1 className='font-bold text-[30px] leading-[40px] lg:leading-[50px] lg:text-[50px]'>
    Start selling directly inside conversations
    </h1>
    <p className='leading-[25px] text-[#383A47] w-full lg:w-[80%] lg:leading-[20px] text-[14px] lg:text-[16px]'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered all injected humour or randomised words which don't look even slightly believable. 
    </p>
    <button onClick={() => setSelectedSection("chatroom")} className="group relative h-12 overflow-hidden cursor-pointer rounded-md bg-[#FB8E0B] px-6 text-white font-semibold transition">
                    <span>Start Chatting Now</span>
                    <div className="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
    </button>
    </div>
    <div className="w-full lg:w-1/2 ">
    <img src="/img1.png" alt="hero" className="w-full h-full object-cover" />
    </div>
  </div>
  )
}

export default SellingSection
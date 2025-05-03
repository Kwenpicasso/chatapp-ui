import { ArrowLeft, Phone, Search, Video } from 'lucide-react'
import React, { useRef } from 'react'
import useWindowSize from '../hooks/UseWindowSize'
import { motion } from 'framer-motion';
import SenderChatCard from './SenderChatCard';
import UserChatCard from './UserChatCard';


interface Message {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  read: boolean;
}
interface SingleChatProps {
  message: Message | null;
  setSelectedMessage?: (msg: Message | null) => void;
}
const ChatContent = ({message, setSelectedMessage}:SingleChatProps) => {
    const { width } = useWindowSize()
  
    const bubbleRef = useRef<HTMLDivElement | null>(null);


 
  return (
    <div className='w-full h-screen px-4 mb-[75px] lg:mb-0'>
        {/* header section */}
    <div className="w-full flex justify-between items-center border-b border-gray-200 pb-2" ref={bubbleRef}>
   <div className='flex justify-start items-center gap-2'>
 {width !== undefined && width < 1024 && (
       <ArrowLeft className='text-[#555555] cursor-pointer' onClick={() => setSelectedMessage?.(null)} />
 )}
  <div className="relative ">
  <img
         src={message?.avatar}
         className='lg:w-[48px] w-[45px] h-[45px] lg:h-[48px] object-cover rounded-full'
         alt={message?.name}
       />
    <span className=" absolute -end-0.5 bottom-1 size-3 rounded-full  bg-emerald-500">
        <span className="sr-only">Online</span>
      </span>
  </div>
       <div className='flex flex-col'>
<h1 className='text-[18px] lg:text-[20px] font-[500]'>{message?.name}</h1>
<p className='text-[#3FAC64] text-[12px]'>Typing...</p>
       </div>
   </div>
  <div className='flex justify-center items-center text-[#555555] gap-6'>
  <Video />
   <Phone />
   <Search className='text-[#555555]' />
  </div>
    </div>

    <div className="w-full text-[#555555] text-[12px] flex justify-center items-center gap-2 my-2">
        <div className='bg-[#555555] h-[1px] w-[50%] opacity-20'/>
        <h1>Today </h1>
        <div className='bg-[#555555] h-[1px] w-[50%] opacity-20'/>
    </div>


    {/* message section */}
    <div className="w-full">
      {/* sender */}
<SenderChatCard
bubbleRef={bubbleRef}
message={message}
/>
   {/* you */}
<UserChatCard
bubbleRef={bubbleRef}
message={message}
/>
  {/* you */}
<UserChatCard
bubbleRef={bubbleRef}
message={message}
/>
  {/* sender */}
  <SenderChatCard
bubbleRef={bubbleRef}
message={message}
/>


  {/* you */}
<UserChatCard
bubbleRef={bubbleRef}
message={message}
/>
   


<div className="w-full flex gap-1">
   <img
         src={message?.avatar}
         className='lg:w-[48px] w-[45px] h-[45px] lg:h-[48px] object-cover rounded-full'
         alt={message?.name}
       />

<div className="w-full flex-col flex  justify-center items-start">
<h1 className='text-[14px] lg:text-[16px] font-[500]'>{message?.name}</h1>
{/* bubble */}
<div className="w-full rotate-180 flex justify-end items-start pb-3 pr-2">
  <div className="w-[10%] relative bg-[#F2F2F2] h-[40px] justify-center items-center text-white font-[400] rounded-[8px] gap-1 flex">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-[6px] h-[6px] bg-black rounded-full"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "loop",
          delay: i * 0.2, 
          ease: "easeInOut",
        }}
      />
    ))}
    <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#F2F2F2] absolute right-[-6px] bottom-0 rotate-48"></div>
  </div>
</div>
</div>

   </div>

   
    </div>
     </div>
  )
}

export default ChatContent

import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion';

type Message = {
    id: number;
    name: string;
    avatar: string;
    message: string;
    time: string;
    read: boolean;
  };
  

  interface SenderChatCardProps {
    bubbleRef: React.RefObject<HTMLDivElement | null>;
    message: Message | null;
  }
  
const SenderChatCard = ({bubbleRef,message}:SenderChatCardProps) => {
    const [showUI, setShowUI] = useState(false);
    useEffect(() => {
        const handleClickOutside = (event:any) => {
          if (bubbleRef.current && !bubbleRef.current.contains(event.target)) {
            setShowUI(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
  return (
    <div className="w-full flex gap-1">
    <img
          src={message?.avatar}
          className='lg:w-[48px] w-[45px] h-[45px] lg:h-[48px] object-cover rounded-full'
          alt={message?.name}
        />
 
 <div className="w-full flex-col flex  justify-center items-start">
 <h1 className='text-[14px] lg:text-[16px] font-[500]'>{message?.name}</h1>
 <div className="rotate-180 flex justify-end items-start pb-3 pr-2 w-full"  >
   <div onClick={() => setShowUI(true)} className=" bg-[#F2F2F2] cursor-pointer relative w-[70%] lg:w-1/2 text-[#555555] font-[400] rounded-[8px] gap-1  p-2 flex flex-col-reverse">
  <h1 className='rotate-180 text-[14px] '>
  Hello! Is it possible to request an early check-in for my booking next week?
  </h1>
  <p className='text-[10px] rotate-180'>06:00</p>
  {showUI && (
   <motion.div
   initial={{ opacity: 0, scale: 0.8 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0, scale: 0.8 }}
   transition={{ duration: 0.2 }}
   className="absolute bottom-[-20px] rotate-180 left-0 bg-white shadow-md p-2 rounded-full z-10 flex gap-2 items-center"
 >
   <button className="text-xl hover:scale-110 transition">👍</button>
   <button className="text-xl hover:scale-110 transition">❤️</button>
   <button className="text-xl hover:scale-110 transition">😂</button>
   <button className="text-xl hover:scale-110 transition">😮</button>
   <button className="text-xl hover:scale-110 transition">😢</button>
 </motion.div>
 )}
 
  <div className="w-0 h-0 border-l-8  border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#F2F2F2] absolute right-[-6px] bottom-0 rotate-48"></div>
   </div>
 
 </div>
 </div>
 
    </div>
  )
}

export default SenderChatCard
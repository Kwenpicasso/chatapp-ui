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

const UserChatCard = ({message,bubbleRef}:SenderChatCardProps) => {
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
    <div className="w-full justify-end items-end flex flex-col">
    <h1 className='text-[14px]'>You</h1>
  
    <div className="rotate-180 w-full ">
    <div onClick={() => setShowUI(true)} className="w-[70%] cursor-pointer lg:w-[50%] bg-[#FB8E0B] relative text-white font-[400] p-2 rounded-[8px] gap-1  flex flex-col-reverse">
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
   <div className="w-0 h-0 border-l-8  border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-[#FB8E0B] absolute left-[-7px] bottom-[-4px] rotate-48"></div>
    </div>
  </div>
  <h1 className='text-[10px] text-[#9D9D9D]'>Seen</h1>
  </div>
  )
}

export default UserChatCard
import { CheckCheck } from 'lucide-react';
import React from 'react';


type Message = {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  read: boolean;
};

type AllMessagesProps = {
  messages: Message[];
  onMessageClick: (msg: Message) => void;
};

const truncateMessage = (message: string): string => {
  const words = message.split(' ');
  return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : message;
};
const AllMessages = ({ messages, onMessageClick }:AllMessagesProps) => {
  return (
 <>
 {!messages || messages.length === 0 ? (
<div className='w-full h-screen flex text-center justify-start items-center flex-col mt-[8%]'>
<img
        src='/messageempty.png'
        className='w-[100px] h-[100px]'
        alt='msg'
      />

      <h1 className='text-[32px] font-[600]'>No messages yet</h1>
      <p className='text-[14px] font-[400] text-[#9D9D9D]'>Your inbox is empty, but that's about to change! As guests start inquiring about your property, their messages will appear here.</p>
</div>
 ) : (
  <div className='w-full'>
  {messages.map((msg, index) => (

    <div
    key={index}
    onClick={() => onMessageClick(msg)}
      className='w-full flex justify-center gap-3 items-start h-[102px] cursor-pointer py-4 rounded-none border-b border-gray-200 border-x-transparent shadow-none bg-transparent border-t-transparent'
    >
     <div className="relative">
     <img
        src={msg.avatar}
        className='w-[40px] h-[40px] object-cover rounded-full'
        alt={msg.name}
      />
        <span className=" absolute -end-0.5 bottom-1 size-3 rounded-full  bg-emerald-500">
        <span className="sr-only">Online</span>
      </span>
     </div>
      <div className='w-[90%] flex flex-col'>
        <div className='w-full flex justify-between items-start'>
          <h1 className='font-[500] text-[18px] leading-[145%]'>{msg.name}</h1>
          <p className='text-[#9D9D9D] font-[400] text-[10px]'>{msg.time}</p>
        </div>
        <div className='w-full flex justify-between items-start'>
          <h1 className='font-[400] text-[14px] text-[#717171] w-[85%]'>
          {truncateMessage(msg.message)}
          </h1>
          {msg.read && <CheckCheck size={20} className='text-orange-500' />}
        </div>
      </div>
    </div>
  ))}
</div>
 )}
 </>
  );
};

export default AllMessages;
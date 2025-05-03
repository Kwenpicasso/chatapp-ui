import React, { useState } from 'react'
import ChatContent from './ChatContent'
import { CirclePlus, Mic, SendHorizontal, Smile } from 'lucide-react'
import EmojiPicker from 'emoji-picker-react';

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

const SingleChat = ({message, setSelectedMessage}:SingleChatProps) => {
  const [showEmojis, setShowEmojis] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleEmojiClick = (emoji: string) => {
    setInputValue(prev => prev + emoji);
    setShowEmojis(false);
  };

  return (
    <div className='w-full lg:w-[65%]  flex justify-center items-center relative flex-col  overflow-y-scroll  hide-scrollbar'>
  {message ? (
   <ChatContent
   message={message}
   setSelectedMessage={setSelectedMessage}
   />
  ) : (
    <div className="w-full h-screen  flex justify-center items-center">
    <div className="w-[50%] mx-auto flex justify-start items-start flex-col">
       <h1 className='text-[32px] font-[600] text-left'>Select a message</h1>
      <p className='text-[14px] font-[400] text-[#9D9D9D] text-left'>
      Your inbox is empty, but that's about to change! As guests start inquiring about your property, their messages will appear here.
      </p>
       </div>
    </div>
  )}

{showEmojis && (
  <div className="absolute bottom-16 left-4 z-20">
    <EmojiPicker
      onEmojiClick={(emojiData) => {
        setInputValue(prev => prev + emojiData.emoji);
        setShowEmojis(false);
      }}
     
    />
  </div>
)}

{/* chat input section */}
       <div className="w-full lg:w-[65%] p-3 bg-gray-50 fixed bottom-0 right-0 flex gap-3 justify-center items-center ">
       <button onClick={() => setShowEmojis(prev => !prev)}>
          <Smile  className='cursor-pointer'/>
        </button>
       <Mic />
       <CirclePlus />
       <input
       placeholder="Type your message"
       className='bg-white rounded-full w-[65%] lg:w-[80%] border-none outline-none h-[45px] pl-4'
       />
       <div className='w-[40px] h-[40px] flex justify-center items-center rounded-full bg-orange-500'>
       <SendHorizontal color='white' />
       </div>
       </div>
        </div>
  )
}

export default SingleChat
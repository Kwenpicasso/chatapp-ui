import React from 'react';

 interface Message {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  read: boolean;
}
interface UnreadMessagesProps {
  messages: Message[];
  onMessageClick: (message: Message) => void;
}
const UnreadMessages = ({ messages }:UnreadMessagesProps) => {
  const unreadCount = messages.filter(msg => !msg.read).length; // Count unread messages

  const truncateMessage = (message: string): string => {
    const words = message.split(' ');
    return words.length > 15 ? words.slice(0, 15).join(' ') + '...' : message;
  };

  return (
    <div className='w-full'>
      {messages.map((msg) => (
        <div
          key={msg.id}
          className='w-full flex justify-center gap-3 items-start h-[102px] cursor-pointer border-gray-200 py-4 rounded-none border-b border-x-transparent shadow-none bg-transparent border-t-transparent'
        >
          <img
            src={msg.avatar}
            className='w-[40px] h-[40px] object-cover rounded-full'
            alt={msg.name}
          />
          <div className='w-[90%] flex flex-col'>
            <div className='w-full flex justify-between items-start'>
              <h1 className='font-[500] text-[18px] leading-[145%]'>{msg.name}</h1>
              <p className='text-[#9D9D9D] font-[400] text-[10px]'>{msg.time}</p>
            </div>
            <div className='w-full flex justify-between items-start'>
              <h1 className='font-[400] text-[14px] text-[#717171] w-[85%]'>
                {truncateMessage(msg.message)}
              </h1>
              {!msg.read && (
                <div className='w-[16px] h-[16px] rounded-full flex justify-center items-center text-white bg-darkboro text-[10px] font-[400]'>
                  {unreadCount} 
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnreadMessages;

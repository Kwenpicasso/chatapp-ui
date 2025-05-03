import React, { useState } from 'react'
import useWindowSize from '../hooks/UseWindowSize';
import { Search } from 'lucide-react';
import MessageHeaderforMobile from './MessageHeaderforMobile';
import AllMessages from './AllMessages';
import UnreadMessages from './UnreadMessages';
import SingleChat from './SingleChat';
import { h1 } from 'framer-motion/client';
import MessageHeaderforDestop from './MessageHeaderforDestop';

interface Message {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  read: boolean;
}
const ChatRoom = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const { width } = useWindowSize();
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const messages = [
    {
      id: 1,
      name: 'Elon Jessica',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Hello! Is it possible to request an early check-in for my booking next week?',
      time: 'Just now',
      read: true,
    },
    {
      id: 2,
      name: 'John Doe',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Hi, I wanted to check on the availability for next weekend.Hi, I wanted to check on the availability for next weekend. Hi, I wanted to check on the availability for next weekend.',
      time: '2 min ago',
      read: false,
    },
    {
      id: 3,
      name: 'Alice Brown',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Can you confirm my reservation details?',
      time: '5 min ago',
      read: true,
    },
    {
      id: 4,
      name: 'Michael Smith',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Do you offer airport shuttle services?',
      time: '10 min ago',
      read: false,
    },
    {
      id: 5,
      name: 'Sophia Wilson',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Is breakfast included in my stay?',
      time: '15 min ago',
      read: true,
    },
    {
      id: 6,
      name: 'David Johnson',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'What are your cancellation policies?',
      time: '30 min ago',
      read: false,
    },
    {
      id: 7,
      name: 'Emily Davis',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Can I get a room upgrade?',
      time: '1 hour ago',
      read: true,
    },
    {
      id: 8,
      name: 'Robert Martinez',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'I have a late flight, can I get a late checkout?',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 9,
      name: 'Olivia Thomas',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Do you provide extra bedding for kids?',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 10,
      name: 'William Anderson',
      avatar: 'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
      message: 'Is there a gym in the hotel?',
      time: '4 hours ago',
      read: false,
    }
  ];
  const unreadMessages = messages.filter(msg => !msg.read);
  return (
    <div className='w-full'>
    {width !== undefined && width < 1024 && selectedMessage ? 
    (
      <SingleChat  message={selectedMessage} setSelectedMessage={setSelectedMessage}/>
    
    ) : (
      <div className='w-full h-screen '>
     {width !== undefined && width > 1024 ? (
     <MessageHeaderforDestop/>
     ) : (
      <MessageHeaderforMobile />
     )}
      <div className="w-full flex justify-center items-start">
        {/* Chats */}
        <div className='w-full lg:w-[35%] border-r h-screen border-gray-200 overflow-y-scroll hide-scrollbar'>
          {/* Search Bar */}
          <div className='w-full h-[48px] relative px-2 py-1 text-[#717171]'>
            <Search className='absolute left-5 top-3' size={20} />
            <input
              type='text'
              placeholder='Search' 
              className='h-full w-full bg-white border border-gray-100 rounded-[12px] pl-[10%] outline-none  focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500'
            />
          </div>
    
          {/* Tabs */}
          <div className="w-full flex justify-center items-start border-b border-gray-200">
            <h1
              className={`w-1/2 text-[15px] flex justify-center items-center font-[500] h-[44px] cursor-pointer ${
                activeTab === 'all' ? 'bg-orange-50 text-orange-500' : 'bg-white'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Messages
            </h1>
            <h1
              className={`w-1/2 text-[15px] flex justify-center items-center font-[500] h-[44px] cursor-pointer ${
                activeTab === 'unread' ? 'bg-orange-50 text-orange-500' : 'bg-white'
              }`}
              onClick={() => setActiveTab('unread')}
            >
              Unread
            </h1>
          </div>
    
          {/* Render Component Based on Active Tab */}
          <div className="px-2">
            {activeTab === 'all' ? (
              <AllMessages messages={messages} onMessageClick={setSelectedMessage} />
            ) : (
              <UnreadMessages messages={unreadMessages} onMessageClick={setSelectedMessage} />
            )}
          </div>
        </div>
    
       {width !== undefined && width > 1024 && (
         <SingleChat message={selectedMessage}/>
       )}
       
      </div>
    </div>
    )}
    </div>
  )
}

export default ChatRoom
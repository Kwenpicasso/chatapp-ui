import { Bell, MailPlus } from 'lucide-react'
import React from 'react'

const MessageHeaderforDestop = () => {
  return (
    <div className='w-full flex justify-between items-center  p-2'>
       <div className='hidden lg:flex justify-between items-center w-[34.5%] '>
                 <h1 className='text-[32px] font-[600]'>Messages</h1>
                 <div className='w-[40px] h-[40px] flex justify-center items-center bg-[#FD6003] rounded-full text-white'>
                 <MailPlus />
                 </div>
               </div>
        <div className=' flex justify-center items-center gap-4'>
        <div className="lg:bg-[#F0F2F5] rounded-full p-1 w-[38px] h-[38px] lg:w-[40px] lg:h-[40px] flex justify-center items-center relative cursor-pointer">
                        <Bell size={20} />
                        <div className='w-[5px] h-[5px] absolute top-2 right-2 rounded-full bg-red-400' />
                    </div>
        <img
        className="rounded-full"
        src="https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png"
        width={48}
        height={48}
        alt="Avatar 01"
      />
        </div>
    </div>
  )
}

export default MessageHeaderforDestop
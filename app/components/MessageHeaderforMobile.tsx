import { MailPlus } from 'lucide-react'
import React from 'react'

const MessageHeaderforMobile = () => {
  return (
    <div className='flex lg:hidden justify-between items-center w-full p-[2%] '>
                 <h1 className='text-[20px] font-[600]'>Messages</h1>
                 <div className='w-[32px] h-[32px] center bg-darkboro rounded-full text-white'>
                 <MailPlus size={20} />
                 </div>
               </div>
  )
}

export default MessageHeaderforMobile
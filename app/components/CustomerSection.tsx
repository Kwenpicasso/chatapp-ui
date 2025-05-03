import React from 'react'

const CustomerSection = () => {
  return (
    <div className='w-full bg-[#F8F8FA] p-[5%] gap-6 mt-[7%] mx-auto  px-4 sm:px-6 lg:px-[8%] flex justify-center items-center flex-col lg:flex-row'>
      <div className="w-full lg:w-1/2">
    <div className=' flex justify-center items-center w-full lg:w-[90%] relative'>
      <div className="w-full bg-[#12141D] opacity-70 absolute  left-0 right-0 bottom-0 h-[60px] lg:h-[85px] flex justify-center items-center gap-8">
        <img
        src='/flip.png'
        alt='icon'
        className='w-[35px] h-[35px]'
        />
          <img
        src='/videocall.png'
        alt='icon'
        className='w-[35px] h-[35px]'
        />
          <img
        src='/endcall.png'
        alt='icon'
        className='w-[35px] h-[35px]'
        />
            <img
        src='/hand.png'
        alt='icon'
        className='w-[35px] h-[35px]'
        />
      </div>
    <img
        className="w-full h-full object-contain"
        src="/headset.png"
      
        alt="Avatar 03"
      />
    </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-2 lg:space-y-6">
   <h1 className='font-bold text-[30px] leading-[40px] lg:leading-[50px] lg:text-[50px]'>Meet your customers, with live video chat</h1>
   <p className='leading-[25px] text-[#383A47] w-full lg:w-[80%] lg:leading-[20px] text-[14px] lg:text-[16px]'>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
   <p className='leading-[25px] text-[#383A47] w-full lg:w-[80%] lg:leading-[20px] text-[14px] lg:text-[16px]'>Get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits</p>
      </div>
    </div>
  )
}

export default CustomerSection
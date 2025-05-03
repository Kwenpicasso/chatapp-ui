import React from 'react'

const ClientSection = () => {
  return (
    <div className='w-full mx-auto  px-4 sm:px-6 lg:px-[8%] bg-[#FB8E0B] relative h-[700px] '>
      <img
        src='/Shapes.png'
        alt='icon'
        className='absolute left-0 w-[200px] lg:w-[400px]'
        />

  <div className="w-full p-[4%]">
  <h1 className='text-white font-bold text-center text-[45px] w-[50%] mx-auto leading-[50px]'>Our blessed client said about us 😍</h1>

  <div className="w-full flex justify-around items-center bg-red-700 gap-6">
<div className="w-[45%] bg-white p-3 flex flex-col justify-center items-center gap-3 text-[18px] text-center ">
  <h1 className='text-[#FB8E0B] font-semibold'>“Incredible Experience”</h1>
  <h1 className='text-[#383A47] text-[16px]'>We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.</h1>
</div>
<div className="w-[45%] bg-white">
  shsh
</div>
  </div>
  </div>
    </div>
  )
}

export default ClientSection
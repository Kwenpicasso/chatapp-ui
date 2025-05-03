import React from 'react'


const featuresData = [
  {
    icon: '/video.png',
    title: 'Video messaging',
    description: 'This software is very easy for you to manage. You can use it as you wish.',
  },
  {
    icon: '/time.png',
    title: 'Save your time',
    description: 'Communicate clearly with instant voice messages and quick support.',
  },
  {
    icon: '/wifi.png',
    title: 'Live collaboration',
    description: 'Work together in real-time and boost your team’s productivity.',
  },
];
const Features = () => {
  return (
    <div className='pt-[10%] lg:pt-[3%] px-4 sm:px-6 '>
      <h1 className='text-[28px] leading-[32px] lg:text-[36px] text-[#1B1C20] text-center font-semibold'>Features for a better experience</h1>
      <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-6 lg:gap-4 mt-[5%]">
   {featuresData.map((item,index) => (
      <div className='w-full lg:w-[25%] flex lg:justify-start justify-center items-center  lg:items-start gap-3 flex-col lg:flex-row' key={index}>
      <img
         className="lg:w-[60px] w-[50px] h-[50px] lg:h-[60px]"
         src={item.icon}
         alt="Avatar 01"
       />
       <div className='flex flex-col lg:justify-start justify-center items-center  lg:items-start text-center lg:text-left gap-1 w-[90%] lg:w-full'>
         <h1 className='text-[#1B1C20] text-[18px] lg:text-[20px] font-semibold'>{item.title}</h1>
         <h1 className='text-[#383A47]  text-[14px] lg:text-[16px]'>{item.description}</h1>
       </div>
      </div>
   ))}
  
   
      </div>
    </div>
  )
}

export default Features
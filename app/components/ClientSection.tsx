import React from 'react'


const testimonials = [
  {
    quoteTitle: '“Incredible Experience”',
    quoteText:
      'We had an incredible experience working with Mixland and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.',
    avatar:
      'https://res.cloudinary.com/dequoncot/image/upload/v1740402935/Image_aqsk68.png',
    name: 'Wade Warren',
    role: 'CEO, ABC Corporation',
  },
  {
    quoteTitle: '“Excellent Collaboration”',
    quoteText:
      'Mixland exceeded our expectations. They were proactive, insightful, and brought real value to the table. We look forward to working with them again.',
    avatar:
      '/mummy.png',
    name: 'Jane Cooper',
    role: 'Founder, XYZ Startups',
  },
]

const ClientSection = () => {
  return (
    <div className='w-full mx-auto  px-4 sm:px-6 lg:px-[8%] bg-[#FB8E0B] relative  '>
      <img
        src='/Shapes.png'
        alt='icon'
        className='absolute left-0 w-[200px] lg:w-[350px]'
        />

  <div className="w-full space-y-12 py-[4%]">
  <h1 className='text-white font-bold text-center text-[28px] lg:text-[45px] w-[70%] lg:w-[50%] mx-auto leading-[30px] lg:leading-[50px]'>Our blessed client said about us 😍</h1>

  <div className="w-full flex justify-around items-center  gap-6 flex-col lg:flex-row">
    {/* cards */}
    {testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="w-full lg:w-[45%] flex flex-col justify-center items-center space-y-6"
    >
      <div className="w-full bg-white p-5 flex flex-col justify-center h-[200px] items-center rounded-lg gap-3 text-[18px] text-center relative">
        <h1 className="text-[#FD6003] font-semibold">{testimonial.quoteTitle}</h1>
        <h1 className="text-[#383A47] text-[16px]">{testimonial.quoteText}</h1>
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white absolute bottom-[-8px]"></div>
      </div>

      <div className="w-full flex justify-center items-center gap-4">
        <img
          className="rounded-full object-contain flex justify-center items-center"
          src={testimonial.avatar}
          width={48}
          height={48}
          alt="Avatar"
        />
        <div className="flex flex-col justify-center items-start text-[12px] text-white">
          <h1 className="font-semibold">{testimonial.name}</h1>
          <p className="font-light">{testimonial.role}</p>
        </div>
      </div>
    </div>
  ))}

  </div>
  </div>
    </div>
  )
}

export default ClientSection
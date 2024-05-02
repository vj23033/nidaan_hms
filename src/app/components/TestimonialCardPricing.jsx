import React from 'react'
import Image from 'next/image'
const TestimonialCardPricing = ({ testimonial }) => {
  return (
    <div className='flex'>
    <div className='flex flex-col gap-[3px] justify-center items-center sm:px-[40px]'>
          <Image src={testimonial.image} key={testimonial.image} alt='img' width={40} height={10} />
          <p className=''>“{testimonial.remark}”</p>
          <h3 className='text-[length:var(--lg-text)] font-bold mt-[10px]'>{testimonial.reviewer}</h3>
          <p className='text-[#71717A] text-[length:var(--md-text)]'>{testimonial.role}</p>
        </div>
          <Image src="/line.svg" alt="line" width={1} height={1} className='sm:block hidden' />
    </div>
  )
}

export default TestimonialCardPricing
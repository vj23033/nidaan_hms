import React from 'react'
import Button from '../components/UI/Button'

import Link from 'next/link'

const ForgotScreen = () => {
  return (
    <div className='gradient min-h-screen flex flex-col justify-center  items-center '>
        <div className='bg-white rounded-2xl overflow-hidden items-center px-[40px] w-[468px] py-[40px]'>
            <div className='flex justify-center'>
            <img src='/forgot-icon.png' alt='img' />
            </div>
            <h1 className='font-bold text-[40px] text-center'>Forgot Password?</h1>
            <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>Lets reset your account</p>

            <div className='flex flex-col gap-[6px] items-start my-[22px]'>
                    <span className='font-bold text-[13px] leading-[20px]'>Email</span>
                    <input type='email' placeholder='Your email here' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
            </div>
            <Link href={"/resetpassword"} >
                <Button  >Continue</Button>
            </Link>
        </div>
       

    </div>
  )
}

export default ForgotScreen
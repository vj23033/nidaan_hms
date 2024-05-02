import React from 'react'

const ResetScreen = () => {
  return (
    <div>
         <div className='gradient min-h-screen flex flex-col justify-center  items-center '>
        <div className='bg-white rounded-2xl overflow-hidden items-center px-[40px] w-[468px] py-[40px]'>
            <div className='flex justify-center'>
            <img src='/forgot-icon.png' alt='img' />
            </div>
            <h1 className='font-bold text-[40px] text-center'>Reset Password?</h1>
            <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>Please follow instructions sent to your email soumyadipjana835@gmail.com to reset your password</p>

            <p className='text-center mt-[32px] text-[#7E8B9E] text-[13px]'>Don’t receive code? <a href='/' className='text-[blue]'>Resend</a></p>
        </div>
       

    </div>
    </div>
  )
}

export default ResetScreen
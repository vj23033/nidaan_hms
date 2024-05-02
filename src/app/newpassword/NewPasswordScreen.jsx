import React from 'react'
import Button from '../components/UI/Button'

const NewPasswordScreen = () => {
  return (
    <div className='gradient min-h-screen flex flex-col justify-center  items-center '>
    <div className='bg-white rounded-2xl overflow-hidden items-center px-[40px] w-[468px] py-[40px]'>
        <div className='flex justify-center'>
        <img src='/forgot-icon.png' alt='img' />
        </div>
        <h1 className='font-bold text-[40px] text-center'>Set New Password?</h1>
        <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>Your new Password must be different from previously used password</p>

        <div className='flex flex-col gap-[6px] items-start mt-[22px]'>
                <span className='font-bold text-[13px] leading-[20px]'>Password</span>
                <input type='password' placeholder='Enter password here' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
        </div>

        
        <div className='flex flex-col gap-[6px] items-start my-[22px]'>
                <span className='font-bold text-[13px] leading-[20px]'>Confirm Password</span>
                <input type='password' placeholder='Enter password here' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
        </div>
        <Button>Resest Password</Button>
    </div>
   

</div>
  )
}

export default NewPasswordScreen
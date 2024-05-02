import React from 'react'
import Button from '../components/UI/Button'


const PasswordDone = () => {
  return (
    <div className='gradient min-h-screen flex flex-col justify-center  items-center '>
    <div className='bg-white rounded-2xl overflow-hidden items-center px-[40px] w-[468px] py-[40px]'>
        <div className='flex justify-center'>
        <img src='/forgot-icon.png' alt='img' />
        </div>
        <h1 className='font-bold text-[40px] text-center'> Password Reset</h1>
        <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>Password have been successfully reset. Click bellow to log in magically.</p>

        <Button>Log in Now</Button>
    </div>
    </div>
  )
}

export default PasswordDone
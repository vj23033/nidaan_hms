import React from 'react'
import Button from '../components/UI/Button'
import Logo from '../components/UI/Logo'
import Link from "next/link"


const LoginScreen = () => {
    return (
        <div className='gradient min-h-screen flex flex-col justify-center  items-center '>
            <div className='absolute top-[2%] left-[10%]'>
                <Logo />
            </div>
            <div className='bg-white rounded-2xl overflow-hidden items-center px-[40px] w-[468px] py-[40px]'>
                <h1 className='font-bold text-[40px] text-center'>Welcome Back!</h1>
                <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>We are very happy to see you back!</p>

                <form className='flex flex-col mt-[22px]'>
                    <div className='flex flex-col gap-[6px] items-start'>
                        <span className='font-bold text-[13px] leading-[20px]'>Email</span>
                        <input type='email' placeholder='example@gmail.com' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]' />
                    </div>
                    <div className='flex flex-col gap-[6px] items-start mt-[18px]'>
                        <span className='font-bold text-[13px] leading-[20px]'>Password</span>
                        <input type='password' placeholder='......' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]' />
                    </div>
                    <Link href='/forgotpassword' className='text-[blue] flex justify-end font-medium text-[13px]'>Forgot Password</Link>
                    <span className='flex flex-row gap-[] font-medium text-[13px]'> <input type='checkbox' />Remember Me</span>
                    <Button >Log In</Button>
                </form>
                <p className='text-center mt-[32px] text-[13px]'>Don’t have an account? <Link href='/signup' className='text-[blue]'>Register now</Link></p>
            </div>
        </div>
    )
}

export default LoginScreen
import React from 'react'
import Logo from '../components/UI/Logo'
import Button from '../components/UI/Button'

const SignupScreen = () => {
  return (
    <div className='gradient min-h-screen flex flex-col   items-center '>
        <div className='absolute top-[2%] left-[10%]'>
                <Logo />
            </div>
    <div className='bg-white rounded-2xl overflow-hidden my-[100px] items-center px-[40px] w-[491px] py-[40px]'>
     <h1 className='font-bold text-[40px] text-center'>Hospital Registration</h1>
         <p className='font-medium text-[15px] text-[#7E8B9E] text-center'>Create account to access your software</p>

         <div className='flex flex-col mt-[22px]'>
             <div className='flex flex-col gap-[6px] items-start'>
                 <span className='font-bold text-[13px] leading-[20px]'>Hospital name</span>
                 <input type='text' placeholder='Enter Hospital name' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>
             <div className='flex flex-col gap-[6px] items-start mt-[18px]'>
                 <span className='font-bold text-[13px] leading-[20px]'>Username</span>
                 <input type='text' placeholder='Enter user name' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>

             <div className='flex flex-col gap-[6px] items-start mt-[18px]'>
                 <span className='font-bold text-[13px] leading-[20px]'>Email</span>
                 <input type='email' placeholder='example@gmail.com' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>

             <div className='flex flex-col gap-[6px] items-start mt-[18px]'>
                 <span className='font-bold text-[13px] leading-[20px]'>Phone Number</span>                 
                 <input type='tel' placeholder='Enter Phone Number' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>

             <div className='flex flex-col gap-[6px] items-start mt-[18px]'>
                 <span className='font-bold text-[13px] leading-[20px]'>Password</span>
                 <input type='password' placeholder='......' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>

             <div className='flex flex-col gap-[6px] items-start my-[18px]'>
                 <span className='font-bold text-[13px] leading-[20px]'>Confirm Password</span>
                 <input type='password' placeholder='......' className='border border-[#CBD1D8] rounded-lg py-[11px] px-[14px] w-[388px]'/>
             </div>
             <Button >Register</Button>
           
            
         </div>
         {/* <div className='w-full'>
             <Button >Log In</Button>
         </div> */}
         <p className='text-center mt-[32px] text-[13px]'>Already have an account? <a href='/' className='text-[blue]'>Log in</a></p>
    </div>
 </div>
  )
}

export default SignupScreen
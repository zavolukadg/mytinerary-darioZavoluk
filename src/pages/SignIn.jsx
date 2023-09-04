import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function SignIn() {

  const handleContinueClick = () => {

  }

  return (
    <div className="flex grow flex-row justify-center mt-[20px] ">
      <div className="flex flex-col items-center justify-center align-center w-[50%]    
                md:flex-row ">
                <p className='text-[50px] text-white'>My Tinerary</p>  
      </div>
      <div className="flex justify-center p-3 my-5 w-[50%] items-center md:items-start bg-[#FF0000] ">
        <div className='flex flex-col bg-white w-[60%] h-[100%] p-10 rounded justify-between'>
          <p className='text-[2vh]'>Step 1 of 2</p>
          <img src="" alt="" className='rounded-circle' />
          <img src="" alt="" className='roundend-circle'/>
          <p className='font-bold'>Create acount</p>
          <p>Sign up with email</p>
          <div className='flex flex-row'>
            <p>Already have an account? </p><Anchor to="" className='ml-2'>Sign in</Anchor>
          </div>
          <div className='flex justify-end'>
            <Anchor onClick={handleContinueClick}>
              <button className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center ">
                <p className='px-5'>Continue</p>
              </button>
            </Anchor>
          </div>
        </div>
      </div>
    </div>
  )
}

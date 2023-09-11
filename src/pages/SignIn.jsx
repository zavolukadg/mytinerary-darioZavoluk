import React, { useRef, useState } from 'react'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import LogoFace from '../components/LogoFace'
import LogoGoogle from '../components/LogoGoogle'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import user_actions from '../store/actions/users'
const { signin } = user_actions;

export default function SignIn() {
  const mail = useRef()
  const password = useRef()

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSignIn = async (e) => {
    e.preventDefault();
    let data = {
      mail: mail.current.value,
      password: password.current.value,
    }
    try {
      dispatch(signin({ data }))
        .then(response => {
          if (response.payload.token) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'User logged',
              text: 'Welcome ' + response.payload.user.name + ' to My-Tinerary',
              showConfirmButton: false,
              timer: 2200
            })
            navigate('/cities');
          }
          else {
            let html = response.payload.messages.map(each => (`<p>${each}</p>`)).join('');
            console.log(html);
            Swal.fire({
              icon: 'error',
              title: 'Unautorized',
              html
            })
          }
        })
    }
    catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
      console.log(error);
    }
  }

  return (
    <div className="flex flex-row grow justify-center items-center" >
      <div className="flex flex-col items-center justify-center align-center w-[50%]    
                  md:flex-row ">
        <p className='text-[50px] text-white'>My Tinerary</p>
      </div>
      <div className="flex justify-center p-2 w-[50%] items-center md:items-start ">
        <div className='flex flex-col bg-white w-[70%] p-8 rounded justify-between divide-y-[3px]'>
          <form className='flex flex-col pt-4'>
            <p className='font-bold text-[4vh] py-1'>Sign In</p>
            <p className='py-1'>New user? <Anchor to='/signup' className='ml-2 cursor-pointer hover:font-bold text-[#0000FF]'>Create an account</Anchor></p>
            <input ref={mail} className='w-full pt-3 py-1 mb-5 pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="text" name="mail" id="mail" placeholder='Type Email' />
            <input ref={password} className='w-full py-1 mb-5 pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="password" name="password" id="password" placeholder='Type Password' />
            <div className='flex justify-end my-2'>
              <button onClick={handleSignIn} className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ">
                <p className='px-5'>Continue</p>
              </button>
            </div>
          </form>
          <div className='flex flex-col w-[100%] items-center mt-2'>
            <button className="my-2 w-[75%] bg-[#1877f2] hover:bg-blue-500 text-white font-bold px-3 rounded-full focus:outline-none focus:shadow-outline flex items-center ">
              <LogoFace />
              <p className='px-3'>Continue with facebook</p>
            </button>
            <button className="my-2 w-[75%] bg-white hover:bg-gray-300 text-gray font-bold px-3 rounded-full focus:outline-none focus:shadow-outline flex items-center ">
              <LogoGoogle />
              <p className='px-3'>Continue with google</p>
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

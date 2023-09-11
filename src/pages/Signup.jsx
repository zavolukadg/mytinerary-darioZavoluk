import React, { useRef, useState } from 'react'
import { Link as Anchor, useNavigate } from 'react-router-dom'
import LogoFace from '../components/LogoFace'
import LogoGoogle from '../components/LogoGoogle'
import Swal from 'sweetalert2'
import Countries from '../components/Countries'
import { useDispatch } from 'react-redux';
import user_actions from '../store/actions/users'
const { signup } = user_actions;

export default function SignUp() {
  const mail = useRef()
  const password = useRef()
  const firstName = useRef()
  const lastName = useRef()
  const month = useRef()
  const year = useRef()
  const photo = useRef()
  const check = useRef()
  const country = useRef()

  const formSignUp = useRef()
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    let data = {
      mail: mail.current.value,
      password: password.current.value,
      name: firstName.current.value,
      lastName: lastName.current.value,
      photo: photo.current.value,
      country: country.current.value,
    }
    try {
      dispatch(signup({ data }))
        .then(response => {
          console.log(response);
          if (response.payload.userId) {
            Swal.fire({
              icon: 'success',
              title: 'User registered OK!',
              text: 'Proceed to logiin to find your perfect detination',
              showConfirmButton: false,
              timer: 3500
            })
            navigate('/signin')
          } else {
            let html = response.payload.messages.map(each => (`<p>${each}</p>`)).join('');
            console.log(html);
            Swal.fire({
              icon: 'error',
              title: 'Something went wrong!',
              html
            })
          }
        })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Register Error',
        text: 'Something went wrong!',
      })
    }
  }

  return (
    <div className="flex flex-row justify-center items-center" >
      <div className="flex flex-col items-center justify-center align-center w-[50%]    
                  md:flex-row ">
        <p className='text-[50px] text-white'>My Tinerary</p>
      </div>
      <div className="flex justify-center p-2 w-[50%] items-center md:items-start ">
        <div className='flex flex-col bg-white w-[70%] px-8 py-4 rounded divide-y-[5px]'>
          <div className='pb-2'>
            <p className='font-bold text-[4vh]'>Create acount</p>
            <div className='flex flex-row items-center '>
              <LogoGoogle />
              <LogoFace />
              <div className='flex flex-col ml-5'>
                <p className='font-bold'>Sign up with email</p>
                <p className=''>Already have an account? <Anchor to='/signin' className='ml-2 cursor-pointer hover:font-bold text-[#0000FF]'>Sign in</Anchor></p>
              </div>
            </div>
          </div>
          <form className='flex flex-col pt-4 gap-4 grow justify-evently'>
            <input ref={mail} className='pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="text" name="mail" id="mail" placeholder='Type Email' />
            <input ref={password} className='pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="password" name="password" id="password" placeholder='Type Password' />
            <div className='flex flex-row pt-1'>
              <input ref={firstName} className='w-3/5 mr-2 pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="text" name="fistName" id="fistName" placeholder='First Name' />
              <input ref={lastName} className='w-3/5 pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' type="text" name="lastName" id="lastName" placeholder='Last Name' />
            </div>
            <div>
              <input ref={photo} type="text" name="photo" id="photo" placeholder='Photo' className='w-full  pl-3 text-gray-500 font-bold border-none shadow appearance-none rounded' />
            </div>
            <div className='flex flex-row'>
              <p className='py-1 mr-2'>Contry/Region: </p>
              <Countries ref={country} />
            </div>
            <div className="flex items-center">
              <input ref={check} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
              <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Please contact me via email.</label>
            </div>
            <p className='text-[2vh]'>By clicking Create account, I agree that I have read and accepted <a className='text-[#0000FF] cursor-pointer'>the Terms of Use and Privacy Policy</a></p>
            <div className='flex justify-end'>
              <button onClick={handleSignUp} className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline flex items-center ">
                <p className='px-5'>Continue</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

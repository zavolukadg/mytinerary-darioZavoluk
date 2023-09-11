/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom"
import UserIcon from "./UserIcon"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import users_action from "../store/actions/users.js"
const { signout } = users_action;

export default function Display({ options, mail }) {

  let dispatch = useDispatch()
  let navigate = useNavigate();

  let user = useSelector(store => store.users?.user) //Accedo al reducer de users la propiedad user

  const handleSignOut = async () => {
    try {
      dispatch(signout())
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'User logout',
        text: 'Thank You so much for visiting Us!',
        showConfirmButton: false,
        timer: 3000
      })
      navigate('/signin');
    } catch (error) {
      console.log(error);
      alert('error!')
    }
  }

  return (
    <div className="flex ms-5 absolute top-[70px] left-[70px] gap-2 flex flex-col bg-pink-400 p-2 rounded-xl">
      {options.map(each => <Anchor key={each.to} to={each.to} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1 hover:bg-gray-700 hover:text-white">{each.title}</Anchor>)}
      {mail ? (
        <div className="flex items-center font-bold hidden sm:flex">
          <span onClick={handleSignOut} className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1 hover:bg-gray-700 hover:text-white"><img src={user?.photo} alt="User img" className="rounded-full w-[5vh] h-[5vh] mr-2" /> Sign Out</span>
        </div>
      ) : (
        <Anchor to='/signin' className="h-[50px] text-[20px] px-2 bg-white rounded-xl w-[100px] flex justify-center items-center mx-1 hover:bg-gray-700 hover:text-white">
          <UserIcon /><p>Log In</p>
        </Anchor>
      )
      }
    </div>
  )
}

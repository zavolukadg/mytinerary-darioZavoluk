/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom"
import UserIcon from "./UserIcon"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import users_action from "../store/actions/users.js"
const { signout } = users_action;

export default function Label({ options, mail }) {

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
    <div className="hidden md:flex gap-2 p-2 rounded-xl items-center">
      {options.map(each =>
          <Anchor key={each.to} to={each.to} className="flex flex-row text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            {each.title}
          </Anchor>)
      }
      {
        mail ? (
          <div className="flex items-center font-bold hidden sm:flex">
            <span onClick={handleSignOut} className="flex flex-row items-center text-white bg-gray-500 hover:bg-gray-700 hover: rounded-md px-3 py-2 text-sm font-medium cursor-pointer"><img src={user?.photo} alt="User img" className="rounded-full w-[5vh] h-[5vh] mr-2"/> Sign Out</span>
          </div>
        ) : (
          <Anchor to='/signin' className="flex flex-row text-black-300 bg-blue-700 text-white hover:bg-[#4F46E5] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            <UserIcon /><p>Log In</p>
          </Anchor>
        )
      }
    </div >
  )
}

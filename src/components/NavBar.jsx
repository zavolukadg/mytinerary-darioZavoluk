
import UserIcon from './UserIcon';
import ButtonLink from './ButtonLink';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
        <header className='h-[64px] bg-[#ebebeb] flex justify-between px-[50px]'>
            <div className='flex items-center flex-1'>
                <h3 className='font-bold m-2 text-[20px]'>MyTinerary</h3>
            </div>
            <div className='gap-3 m-2 flex items-center'>
                <button>Home</button>
                <button>Cities</button>
                {/* <ButtonLink to='../pages/Cities.jsx' text='Cities '/>  */}
                <button className="bg-blue-500 hover:bg-blue text-white font-bold py-2 px-4 rounded flex items-center">
                    <UserIcon />
                    <p className='px-1'>Login</p>
                </button>
            </div>
        </header>
    </>
  )
}

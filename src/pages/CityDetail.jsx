import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios";
import apiUrl from '../../apiUrl'
import Card from '../components/Card';
import { Link as Anchor } from "react-router-dom";

export default function CityDetail() {
  const { city_id } = useParams();
  const [city, setCity] = useState();

  useEffect(
    () => {
      axios(apiUrl + 'cities/' + city_id)
        .then(res => setCity(res.data.response))
        .catch(err => console.log(err))
    }, []
  );

  return (
    <>
      {city && (
        <>
          <div className='flex flex-col grow justify-center items-center bg-cover' style={{ backgroundImage: `url('${city.photo}')` }}>
            <div className="w-[70%] bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl drop-shadow-lg  px-10 py-5 flex flex-col items-center justify-between">
              <p className='font-extrabold text-[40px] md:text-[70px] p-2'>{city.city}</p>
              <p className='font-bold text-s text-justify p-2 italic'>{city.smalldescription}</p>
              <div className='flex flex-col justify-between md:w-full pt-2
                md:flex-row'>
                <Anchor to={'/pages/cities'} className='flex flex-row items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Go Back</p>
                </Anchor>
                <Anchor to={'#itineraries'} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >
                  View Itineraries
                </Anchor>
              </div>
            </div>
          </div>
        </>)
      }
    </>
  )
}


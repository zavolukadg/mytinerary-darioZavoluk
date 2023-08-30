import { useParams } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { Link as Anchor } from "react-router-dom";
import Features from '../components/Features';
import Itinerary from '../components/Itinerary';
import { useSelector, useDispatch } from "react-redux";
import city_actions from "../store/actions/cities";
const { read_city } = city_actions
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries } = itinerary_actions;

export default function CityDetail() {
  const { city_id } = useParams();
  const city = useSelector(store => store.cities.city)
  const dispatch = useDispatch()
  const itineraryDiv = useRef(null);
  const itineraries = useSelector(store => store.itineraries.itineraries)

  useEffect(
    () => {
      dispatch(read_city({ city_id }))
      dispatch(read_itineraries({ city_id }))
    }, []
  );

  const handleClick = () => {
    itineraryDiv.current?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  /*
  const [city, setCity] = useState();
  useEffect(
    () => {
      axios(apiUrl + 'cities/' + city_id)
        .then(res => setCity(res.data.response))
        .catch(err => console.log(err))
    }, []
  ); */

  return (
    <>
      {city && (
        <div>
          <div className='flex flex-col h-[600px] grow justify-center items-center bg-cover' style={{ backgroundImage: `url('${city.photo}')` }}>
            <div className="w-[70%] m-5 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl drop-shadow-lg px-10 py-5 flex flex-col items-center justify-between">
              <p className='font-extrabold text-[40px] md:text-[70px] p-2'>{city.city}</p>
              <p className='font-bold text-s text-justify p-2 italic'>{city.smalldescription}</p>
              <div className='flex flex-col justify-between md:w-full pt-2
                  md:flex-row'>
                <Anchor to={'/cities'} className='flex flex-row items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Go Back</p>
                </Anchor>
                <button onClick={handleClick} className='flex items-center py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700' >
                  View Itineraries
                </button>
              </div>
            </div>
          </div>
          <div ref={itineraryDiv} className="flex flex-col items-center">
            {/* <Features currency={'USD'} country={city.city} languaje={city.city} /> */}
            {itineraries?.length != 0 ?
              itineraries?.map((itinerary, index) => <Itinerary
                key={index} src={itinerary.photo}
                name={itinerary.name} alt={itinerary.id} id={itinerary.id}
              />) : 
              <div className="w-[40vh] h-[30vh] flex flex-col p-4 rounded-lg justify-center items-center 
              transform -translate-y-2 transition-all shadow-2xl opacity-90 opacity-100 font-bold">
                There are no cities to show. Check your search criteria.
              </div>
            }
          </div>
        </div>
      )}
    </>
  )
}


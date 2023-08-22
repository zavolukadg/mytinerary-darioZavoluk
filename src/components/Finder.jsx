import { useEffect, useState, useRef } from "react";
import apiUrl from '../../apiUrl'
import axios from "axios";
import Card from "./Card";

export default function Finder({onKeyUp}) {
    const [cities,setCities] = useState([])
    const text = useRef()
    const [reEffect,setReEffect] = useState(true);

    useEffect(
        () => { 
            axios(apiUrl + 'cities?city=' + text.current.value + '&sort=1')
            .then(res => setCities(res.data.response))
            .catch(err => console.log(err)) 
        }, [reEffect]
    );
    

    function handleFilter() {    
        console.log(text.current.value);  
        setReEffect(!reEffect);
    }

    return (
        <>
            <div className="flex justify-center m-5">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex w-[50vh]" >
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input ref={text} onKeyUp={handleFilter} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your city" required/>
                </div>
            </div>
           <div className="flex flex-row flex-wrap gap-3 justify-center">
            {cities.length > 0?
                cities.map(c=><Card key={c._id} src={c.photo} alt={c.id} country={c.country} city={c.city} city_id={c._id}/>)
                :
                <div>No existen tarjetas para mostrar</div>
            }
           </div>
        </>
    )
}
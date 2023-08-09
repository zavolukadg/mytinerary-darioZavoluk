import { useState,useEffect } from "react";
import axios from "axios";
import Card2 from "../components/Card2"
export default function Carousel() {
    const [indiceInicial, setIndiceInicial] = useState(0);
    const [indiceFinal, setIndiceFinal] = useState(4);
    const [data,setData] = useState([])

    function next(){
        if(indiceFinal >= data.length){
            setIndiceInicial(0);
            setIndiceFinal(4)
        }
        else{
            setIndiceInicial(indiceInicial+4);
            setIndiceFinal(indiceFinal+4)
        }
    };

    function prev(){
        if(indiceInicial == 0){
            setIndiceInicial(data.length-4);
            setIndiceFinal(data.length)
        }
        else{
            setIndiceInicial(indiceInicial-4);
            setIndiceFinal(indiceFinal-4) 
        }
    };

    useEffect(
        ()=>{
          axios('/data.json')
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
        },[]             
    );
  
    return (
        <div className="flex flex-col w-[400px] justify-center">
            <p className="text-[20px] flex justify-center">Popular Mytineraries</p>
            <div className="flex">
                <button type="button" onClick={prev} className="flex items-center justify-center cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </span>
                </button>
                <div className="flex flex-wrap justify-center">
                    {data.slice(indiceInicial, indiceFinal).map((each, index) => <Card2 key={index} src={each.photo} alt={each.id} text={each.city} />)}
                </div>
                <button type="button" onClick={next} className="flex items-center justify-center cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
  )
}


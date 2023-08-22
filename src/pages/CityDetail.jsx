import { useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from "axios";
import apiUrl from '../../apiUrl'
import Card from '../components/Card';
import { Link as Anchor } from "react-router-dom";

export default function CityDetail() {
  const { city_id } = useParams();
  const [city, setCity] = useState();
  //este hook se engancha a la URL para evaluar todos los parametros dinamicos que tiene la URL
  //este hook devuelve un objeto donde cada CLAVE es la ruta dinamica definida en el enrutador
  //y donde cada VALOR es el valor de la URL
  useEffect(
    () => { 
         axios(apiUrl + 'cities/' + city_id) 
        .then(res => setCity(res.data.response))
        .catch(err => console.log(err)) 
    }, []
  );

  return (
    <div className='flex flex-col grow justify-center items-center'>
      {city && <Card src={city.photo} alt={city.id} country={city.country} city={city.city} city_id={city._id}/>}
      <Anchor className='text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' to={'/pages/cities'}>
        Return
      </Anchor>
    </div>
  )
}


import React, { forwardRef } from 'react'
import axios from "axios";

const countries = ["Argentina", "Brazil", "Bolivia", "Chile","Colombia","Ecuador", "Peru", "Uruguay", "Venezuela"]
//let countries2 = await axios.get('https://restcountries.com/v3.1/all?fields=name')

const Countries = forwardRef((props, ref) => {
    return (
        <select ref={ref} id="country" name="country" className="text-gray-500 font-bold block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Select Country</option>
            {
                countries.map((country,index) => <option key= {index} value={country}>{country}</option>)
            }    
        </select>
    )
})

export default Countries


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_itineraries = createAsyncThunk(
    'read_itineraries',
    async (obj) =>{
        try {
            let data = await axios(apiUrl + 'itineraries?city_id=' + obj.city_id)
            return{
                itineraries:data.data.response
            }
        } catch (error) {
            return{
                cities:[]
            }
        }
    }
)

const read_itinerary = createAsyncThunk(
    'read_itinerary',
    async (obj) =>{
        try {
            let data = await axios(apiUrl + 'itineraries/' + obj.id)
            return{
                itinerary:data.data.response
            }
        } catch (error) {
            return{
                itinerary:[]
            }
        }
    }
)

const itinerary_actions = { read_itineraries,read_itinerary }
export default itinerary_actions
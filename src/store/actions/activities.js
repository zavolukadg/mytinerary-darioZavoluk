import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl";

const read_activities = createAsyncThunk(
    'read_activities',
    async (obj) =>{
        try {
            let data = await axios(apiUrl + 'activities?itinerary_id=' + obj._id)
            return{
                activities:data.data.response
            }
        } catch (error) {
            return{
                activities:[]
            }
        }
    }
)

const activity_actions = { read_activities }
export default activity_actions
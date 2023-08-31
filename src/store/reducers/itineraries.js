import { createReducer } from "@reduxjs/toolkit";
import itinerary_actions from "../actions/itineraries";
const {read_itineraries, read_itinerary} = itinerary_actions;

const initial_state = {
    itineraries:[],
    itinerary:{}
}

const itinerary_reducer = createReducer(
    initial_state, //Primer parametro estado inicial
    builder => builder
    .addCase(
        read_itineraries.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                itineraries: action.payload.itineraries
            }
            return new_state 
        }
    )
    .addCase(
        read_itinerary.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                itinerary: action.payload.itinerary
            }
            return new_state 
        }
    )
)

export default itinerary_reducer;
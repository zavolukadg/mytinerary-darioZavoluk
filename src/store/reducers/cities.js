import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";
const {read_carousel,read_cities} = city_actions;

const initial_state = {
    carousel: [],
    cities:[]
}

const city_reducer = createReducer(
    initial_state, //Primer parametro estado inicial
    builder => builder
    .addCase( //callback constructora de estados globales , agrega (min) un caso de reduccion para cada accion
        read_carousel.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                carousel: action.payload.carousel
            }
            return new_state                        //retorna el nuevo estado para que se actualice la vista
        }
    )
    .addCase(
        read_cities.fulfilled,
        (state,action) => {
            let new_state = {
                ...state,
                cities: action.payload.cities
            }
            return new_state 
        }
    )
)

export default city_reducer;
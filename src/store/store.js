import { configureStore } from "@reduxjs/toolkit";
import city_reducer from "./reducers/cities";
import itineraries_reducer from "./reducers/itineraries";
import activities_reducer from "./reducers/activities";
import users_reducer from "./reducers/users";


export default configureStore({
    reducer:{
        cities:city_reducer,
        itineraries: itineraries_reducer,
        activities: activities_reducer,
        users: users_reducer
    }
})
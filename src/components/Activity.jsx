import React from 'react'

export default function Activity({ activity }) {
    /* console.log(activity); */
    return (
        <div className="w-[30%] flex flex-col items-center bg-black border rounded-t-lg" id={activity.itinerary_id._id}>
            <img src={activity.photo} alt={activity.itinerary_id._id} className="rounded-t-lg h-[80%] w-full pb-2" />
            <p className="text-[70%] pb-2 text-white">{activity.name}</p>
        </div>
    )
}

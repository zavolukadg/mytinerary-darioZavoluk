import React from 'react'

export default function NotFound() {
    return (
        <div>
             <div className="w-[80vh] h-[60vh] flex flex-col m-5 p-4 rounded-lg justify-center items-center 
              transform -translate-y-2 transition-all bg-white font-bold">
                 <img src='../../public/img/notFound.png' alt="NotFoundImage" className="w-[40vh] h-[30vh]" />
                There are no itineraries to show.
              </div>
        </div>
    )
}

import Activity from "./Activity";
import Arrow from "./Arrow";
import Heart from "./Heart";
import Bills from "./Bills";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";

export default function Itinerary({ itinerary, userPhoto, name}) {
  const [active, setActive] = useState(0)
  const [heartActive, setHeartActive] = useState(0)
  const [clicks, setClicks] = useState(1)
  const [activities,setActivities] = useState([])

  const duration = Math.round(itinerary.duration/60)

  const handleToggleActive = () => {
    setActive(!active)
    if(!active){
      fillActivities()
    }
  }

  const fillActivities = () => {
    axios(apiUrl + 'activities?itinerary_id=' + itinerary._id)
      .then(res => setActivities(res.data.response))
      .catch(err => {
        setActivities([])
        console.log(err)
      })
  }

  const handleToggleHeart = () => {
    if (heartActive) {
      setClicks(clicks + 1)
    }
    else {
      setHeartActive(!heartActive)
    }
  }

  return (
    <>
      <div className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
        <p className="text-[130%] font-bold pb-2">{itinerary.name}</p>
        <div className="">
          <img src={itinerary.photo} alt={itinerary.name} className=""/>
        </div>
        <div className="grid grid-cols-3 gap-2 w-full py-2 border border-[#c9c6c655] bg-[#e9e9e9] sm:grid-cols-4">
          <div className="flex flex-col items-center font-bold hidden sm:flex">
            <p className="text-[2vh] text-center pb-1">User:</p>
            <img src={userPhoto} alt="User img" className="rounded-full w-[8vh] h-[8vh]" />
            <p className="text-[1.5vh] text-center">{name}</p>
          </div>
          <div className="flex flex-col wrap items-center">
            <p className="text-[2vh] font-bold">Hashtags:</p>
            {itinerary.tags.map((tag,index) => 
              <p key={index} className="text-[2vh]">{tag}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[2vh] font-bold">Duration: </p>
            <p className="text-[2vh]">{duration} Hs</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[2vh] font-bold">Price: </p>
            <Bills price={itinerary.price} />
          </div>
        </div>
        <div className={`w-full p-5 border border-[#c9c6c655] rounded-b-md duration-500 group ${active ? 'is-active bg-white' : 'bg-[#e9e9e9]'}`}>
          <div className="flex items-center">
            <div className="w-full group-[.is-active]:font-bold">
              <button onClick={handleToggleHeart}>
                {heartActive ? (<div className="flex flex-row"><Heart color={'#FF4745'} stroke={'#FF4745'} /><p className="pl-2">{clicks}</p></div>) : (<Heart color={'none'} stroke={'currentColor'} />)}
              </button>
            </div>
            <button className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[-180deg]" onClick={handleToggleActive}>
              <Arrow direction="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </button>
          </div>
          <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[500px]">
            <div className="pt-3 flex justify-between flex-wrap">
              {activities?.length != 0 ?
                activities?.map((activity, index) => <Activity key={index} activity={activity} />)
                :
                <div className="w-[20vh] h-[10vh] flex flex-col p-4 rounded-lg justify-center items-center 
                transform -translate-y-2 transition-all shadow-2xl opacity-90 opacity-100 font-bold">
                  There are no activities to show.
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

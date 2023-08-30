import Arrow from "./Arrow";
import Heart from "./Heart";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Itinerary({ src, name, tags, id }) {

  const [active, setActive] = useState(0);

  const handleToggleActive = () => {
    setActive(!active)
    console.log('Active =' + active);
  }

  return (
    <>
      <div className="w-2/5 flex flex-col items-center p-2 m-2 bg-white">
        <p className="text-[20px] font-bold pb-2">{name}</p>
        <img src={src} alt={name} className="" />
        <p className="text-[20px]">{tags}</p>
        <div className={`w-full p-5 border border-[#c9c6c655] rounded-b-md duration-500 group ${active ? 'is-active bg-white':'bg-[#e9e9e9]'}`}>
          <div className="flex items-center">
            <div className="w-full group-[.is-active]:font-bold">
              <Heart />
            </div>
            <div className="text-xl cursor-pointer duration-500 group-[.is-active]:rotate-[-180deg]" onClick={handleToggleActive}>
              <Arrow direction="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </div>
          </div>
          <div className="overflow-hidden duration-500 max-h-0 group-[.is-active]:max-h-[500px] ">
            Esto es un acordeon de prueba
          </div>
        </div>
      </div>
    </>
  );
}

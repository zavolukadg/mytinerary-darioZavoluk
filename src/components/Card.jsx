import Location from "./Location"
import Find from "./Find"
import { Link as Anchor } from "react-router-dom";
export default function Card({ src,alt,country,city,city_id}) {
    return (
        
        <div className="w-[40vh] h-[30vh] flex flex-col m-1 bg-cover cursor-pointer rounded-lg justify-between
            transform hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl opacity-90 hover:opacity-100"
            style={{backgroundImage: `url('${src}')`}} >
            <div>    
                <p className="flex max-w-max p-2 m-1 text-s text-white bg-gray-500 bg-opacity-50 rounded-md">{city}</p>
                <div className="flex max-w-max p-2 ml-1 bg-gray-500 bg-opacity-50 rounded-md ">
                    <Location />
                    <p className="text-xs text-white ">{country}</p>
                </div>
            </div>
            <div className="flex justify-end content-end items-end  p-2">
                <Anchor to={'/pages/city/'+city_id}>
                    <Find />
                </Anchor>
            </div>
        </div>
    )
}
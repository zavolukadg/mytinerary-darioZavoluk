import Carousel from "../components/Carousel";
import {Link as Anchor} from "react-router-dom";

export default function Home() {
    return ( 
        <main className="flex grow justify-center mt-2">
            <div className="flex flex-col items-center  
                md:flex-row">
                <div className="flex flex-col p-4 items-center md:items-start">
                    <Anchor to='/cities'>
                        <p className="text-[30px] hover:text-blue-500">Find the perfect destination!</p>
                    </Anchor>
                    <p className="text-[12px] text-justify text-gray-500 py-4 pr-5 w-[50vh] md:w-[80vh]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <Anchor to='/cities'>
                        <button className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center ">
                            <p className='px-5'>View More</p>
                        </button>
                    </Anchor>
                </div>
                <Carousel /> {/* Carousel incluye un div */}
            </div>
        </main>
    )
}
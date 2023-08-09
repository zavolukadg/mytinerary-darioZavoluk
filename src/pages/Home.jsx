import Carousel from "../components/Carousel";
import {Link as Anchor} from "react-router-dom";

export default function Home() {
    return ( 
        <main className="grow flex justify-center mt-[20px]">
            <div className="flex justify-center items-center 
                md:flex flex-row 
            ">
                <div className="p-4">
                    <Anchor to='/pages/cities'><h1 className="text-[42px] pe-20 hover:text-blue-500">Find the perfect destination</h1></Anchor>
                    <p className="text-[12px] text-justify text-gray-500 py-4 pr-10 w-[80vh]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <Anchor to='/pages/cities'>
                        <button className="bg-[#4F46E5] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center">
                            <p className='px-5'>View More</p>
                        </button>
                    </Anchor>
                </div>
                <Carousel />
            </div>
        </main>
    )
}
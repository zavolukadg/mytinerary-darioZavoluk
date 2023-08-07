import Arrow from "../components/Arrow"
import Card2 from "../components/Card2"
import Card from "../components/Card"
import { useState } from "react";

export default function Home() {
    const [indiceInicial, setIndiceInicial] = useState(0);
    const [indiceFinal, setIndiceFinal] = useState(4);

    function next(){
        if(indiceFinal >= data.length){
            setIndiceInicial(0);
            setIndiceFinal(4)
        }
        else{
            setIndiceInicial(indiceInicial+4);
            setIndiceFinal(indiceFinal+4)
        }
    };

    function prev(){
        if(indiceInicial == 0){
            setIndiceInicial(data.length-4);
            setIndiceFinal(data.length)
        }
        else{
            setIndiceInicial(indiceInicial-4);
            setIndiceFinal(indiceFinal-4) 
        }
        
    };

    let data = [
        { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
        { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
        { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
        { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
        { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
        { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
        { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
        { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
        { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
        { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
        { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
        { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
        { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
        { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
        { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
        { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
    ]

    return (
        <main className="flex flex-col justify-center align-items-center pt-[40px]">
            <div className="flex justify-center items-center flex-row">
                <div className="p-4">
                    <h1 className="text-[42px] pe-20">Find the perfect destination</h1>
                    <p className="text-[12px] text-justify text-gray-400 py-4 pr-10 w-[80vh]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <button className="bg-blue-500 hover:bg-blue text-white font-bold py-2 px-4 rounded flex items-center">
                        <p className='px-5'>View More</p>
                    </button>
                </div>
                <div className="flex flex-col h-[60vh] w-[60vh] justify-center ">
                    <h3 className="text-[20px] flex justify-center">Popular Mytineraries!</h3>
                    <div className="flex flex-row h-full ">
                        <button type="button" onClick={prev} className="flex items-center justify-center cursor-pointer group focus:outline-none">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </span>
                        </button>
                        <div className="flex flex-wrap justify-center">
                            {data.slice(indiceInicial, indiceFinal).map((each, index) => <Card2 key={index} src={each.photo} alt={each.id} text={each.city} />)}
                        </div>
                        <button type="button" onClick={next} className="flex items-center justify-center cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-black dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )

}
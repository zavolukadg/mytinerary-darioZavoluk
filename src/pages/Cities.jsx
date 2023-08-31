import Finder from "../components/Finder";
export default function Cities() {
    return (
        <main className="flex flex-col grow justify-center">
            <div className='h-[250px] bg-[url(../img/america/cancun.jpg)] bg-cover grow flex flex-col items-center justify-center rounded-b-3xl'>
                <p className="text-[300%] font-bold text-white">Cities</p>
                <p className="text-[100%] font-bold text-white italic">Collection of the most beautiful places and experience</p>
            </div>
            <div><Finder/></div>
        </main>
    )
}
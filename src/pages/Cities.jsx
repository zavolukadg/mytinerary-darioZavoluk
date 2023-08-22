import Finder from "../components/Finder";

export default function Cities() {
    return (
        <>
            <main className=" flex flex-col grow justify-center">
                <div className='bg-[url(../img/america/cancun.jpg)] bg-cover grow'>
                    <p className="felx justify-center">Cities</p>
                </div>
                <div><Finder/></div>
            </main>
        </>
    )
}
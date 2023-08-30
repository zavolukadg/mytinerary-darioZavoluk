export default function Features({ currency, country, languaje }) {
    /* text es el id */
    return (
        <div className="h-[400px] flex flex-col">
            <p className='font-bold text-[40px] md:text-[50px] text-center'>Features</p>
            <div className="w-[800px] h-[300px] flex flex-row justify-between">
                <div className="w-[200px] flex pt-[200px] justify-center m-1 rounded bg-cover shadow-md bg-[url(../img/america/cancun.jpg)]">
                    <p className="text-s text-white ">Currency:{currency}</p>
                </div>
                <div className="w-[200px] flex pt-[200px] justify-center m-1 rounded bg-cover shadow-md bg-[url(../img/america/cancun.jpg)]">
                    <p className="text-s text-white ">Country:{country}</p>
                </div>
                <div className="w-[200px] flex pt-[200px] justify-center m-1 rounded bg-cover shadow-md bg-[url(../img/america/cancun.jpg)]">
                    <p className="text-s text-white ">Laguaje:{languaje}</p>
                </div>
            </div>
        </div>
    )
}
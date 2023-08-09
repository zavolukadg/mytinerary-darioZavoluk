import Location from "./Location"
export default function Card2({ src,alt,city,text }) {
    /* text es el id */
    return (
        <div className="w-[200px] h-[200px] flex flex-col m-1 rounded bg-cover shadow-md" style={{backgroundImage: `url('${src}')`}}>
            <div className="flex max-w-max p-2 m-1 bg-gray-500 bg-opacity-50 rounded-md ">
                <Location />
                <p className="text-s text-white ">{text}</p>
            </div>
        </div>
    )
}
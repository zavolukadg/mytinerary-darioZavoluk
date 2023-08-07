import Location from "./Location"
export default function Card2({ src,alt,city,text }) {
    /* text es el id */
    return (
        <div className="w-2/5 flex flex-col m-1 rounded bg-cover shadow-md" style={{backgroundImage: `url('${src}')`}}>
            <div className="flex flex-row p-3 ">
                <Location />
                <p className="text-s text-white ">{text}</p>
            </div>
        </div>
    )
}
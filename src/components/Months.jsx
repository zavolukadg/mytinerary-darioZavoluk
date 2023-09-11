import { useRef,forwardRef } from "react"

const Months = forwardRef((props, ref) => {
    return (
        <select ref={ref} className="block appearance-none w-4/5 bg-white border border-gray-400 hover:border-gray-500 px-2 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </select>
    )
})

export default Months

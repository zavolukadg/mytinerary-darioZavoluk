/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom"
import UserIcon from "./UserIcon"

export default function Label({ options }) {
  return (
    <div className="hidden md:flex gap-2 p-2 rounded-xl">
      {options.map(each=> <Anchor key={each.to} to={each.to} className="flex flex-row text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" 
        style={{backgroundColor:each.backgroundColor,color:each.color }}>
        {each.to == '/pages/signin' && <UserIcon />}
        {each.title}
        </Anchor>)}
    </div>
  )
}

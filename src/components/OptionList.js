import React from "react"
import OptionCard from "./OptionCard"

function OptionList(props) {
  const options = props.options.map(r => 
    <OptionCard
      selected={r.id === props.selected}
      key={r.id}
      completed={props.completed}
      handleIgnore={() => {
        console.log("ignoring", r.id)
        props.ignore(r.id)
      }}
      handleDelete={() => {
        props.handleDelete(r.id)
      }}
      item={r} />)

  return (
    <div className="option-list">
      {options}
     </div>
  )
}

export default OptionList

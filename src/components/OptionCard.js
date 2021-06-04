import React, { useState } from "react"

function OptionCard(props) {

  const [ ignored, setIgnored ] = useState(props.item.ignored)
  const classes =
    ["option-card", 
    props.selected ? " selected " : ""
    ,props.item.ignored ? "ignored " : ""
    ,props.completed ? "completed ": ""]

  console.log(props.item.name, classes)

  return (
    <div className={classes.join(" ")} onClick={() => {props.handleIgnore(); setIgnored(!ignored)}}>
      <div className="option-title">
        <p>{props.item.name}</p>
      </div>
    </div>
  )
}

export default OptionCard

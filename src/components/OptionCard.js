import React, { useState } from "react"

function OptionCard(props) {

  const [ ignored, setIgnored ] = useState(props.item.ignored)
  let classes = ["option-card"]
  if (props.selected)
      classes.push("selected")
  if (props.item.ignored)
      classes.push("ignored")
  if (props.completed)
      classes.push("completed")

  const cardOnClick = event => {
    if (event.target.name === "delete") {
      return
    }

    props.handleIgnore()
    setIgnored(!ignored)
  }

  return (
    <div
      name="card"
      className={classes.join(" ")}
      onClick={cardOnClick}>
        <button
          name="delete"
          className="delete-button"
          onClick={props.handleDelete}>x</button>
        <span className="option-title">{props.item.name}</span>
    </div>
  )
}

export default OptionCard

import React from "react"

function RollButton(props) {
  return (
    <button className="roll-button" disabled={props.disabled} onClick={props.onClick}>Roll</button>
  )
}

export default RollButton

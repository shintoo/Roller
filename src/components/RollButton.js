import React from "react"

function RollButton(props) {
  return (
    <button
      className="roll-button"
      disabled={props.disabled} 
      onClick={props.onClick}>
        {props.disabled? "Rolling..." : "Roll"}
      </button>
  )
}

export default RollButton

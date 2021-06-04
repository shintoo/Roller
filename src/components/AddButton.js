import React from "react"

function AddButton(props) {
  const handleClick = (event) => {
    const newName = prompt("Enter a new option.")
    props.addOption(newName)
  }

  return (
    <div>
      <button className="add-button" onClick={handleClick}>+</button>
      <br />
    </div>
  )
}

export default AddButton

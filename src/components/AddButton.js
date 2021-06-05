import React from "react"

function AddButton(props) {
  const handleClick = (event) => {
    const newName = prompt("Enter a new option.")
    console.log("Handling add")
    if (name !== null && name.length !== 0)
      console.log("passed check")
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

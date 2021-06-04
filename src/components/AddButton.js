import React from "react"

function AddButton(props) {
  const handleClick = (event) => {
    const newName = prompt("Enter a new restaurant.")
    props.addRestaurant(newName)
  }

  return (
    <div>
      <button className="add-button" onClick={handleClick}>+</button>
      <br />
    </div>
  )
}

export default AddButton

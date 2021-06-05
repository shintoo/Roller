import React, { useState } from "react"

function Header() {
  const [title, setTitle] = useState("Where shall we eat?")

  const onClick = () => {
    const newTitle = prompt("Enter a title")

    if (newTitle && newTitle.length > 0)
      setTitle(newTitle)
  }

  return (
    <div className="header">
      <h1 onClick={onClick}>{title}</h1>
{/*      <div className="instructions">
        <p>
          Where shall we eat? <br />
          Tap "Roll" to let <span style={{fontStyle: "italic"}}>food.js</span> decide. <br />
          Also, you can tap on any of the options to exclude them.
        </p>
      </div>
*/}      <hr />
    </div>
  )
}

export default Header

import React, { useState } from "react"

function Header() {
  const [title, setTitle] = useState("Where shall we eat?")
  const [editing, setEditing] = useState(false)

  const onClick = () => {
      setEditing(true)
  }

  const handleChange = (event) => {
    setTitle(event.target.value)
    document.title = title + " - Roller"
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      setEditing(false)
      return
    }
  }

  return (
    <div className="header">
      { editing ?
          <input
            autoFocus
            type="text"
            value={title}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          /> :
          <h1 onClick={onClick}>{title}</h1>
      }
      <hr />
    </div>
  )
}

export default Header

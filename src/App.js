import React, { useState } from "react"
import Header from "./components/Header"
import AddButton from "./components/AddButton"
import RollButton from "./components/RollButton"
import OptionList from "./components/OptionList"
import optionData from "./resources/optionData"

function App() {
  const [ selected, setSelected ] = useState()
  const [ completed, setCompleted ] = useState(false)
  const [ options, setOptions ] = useState(optionData)

  const ticks = Math.floor(Math.random() * 20) + (options.length * 2)
  let delay = 100

  const roll = async () => {
    let i
    let id = 0

    if (options.every(r => r.ignored))
      return

    while (options[id].ignored)
      id++

    setSelected(id)
    setCompleted(false)
    let sleep = () =>
      new Promise(resolve => setTimeout(resolve, delay))

    for (i = 0; i < ticks; i++) {
      await sleep()

      setSelected(prevSelected => {
          let id = prevSelected + 1

          if (id >= options.length)
            id = 0

          while (options[id].ignored) {
            id++

            if (id >= options.length)
              id = 0
          }

          return id
      })

      if (delay < 300)
        delay *= 1.05


    }
    await sleep()
    setCompleted(true)
  }


  const ignore = id => {
    setOptions(prevOptions => {
      prevOptions[id].ignored = !prevOptions[id].ignored
      return prevOptions
    })
  }


  const deleteOption = id => {
    const index = options.indexOf(id)
    setOptions(prevOptions => {
      prevOptions.splice(index, 1)
      return [ ...prevOptions ]
    })
  }

  const addOption = name => {
    if (name.length === 0)
      return

    const newOption = {
      id: options.length,
      name: name
    }
    setOptions(prevOptions => [ ...prevOptions, newOption ])
  }

  return (
    <div style={{textAlign: "center"}}>
      <Header />
      <OptionList
        options={options}
        completed={completed}
        ignore={ignore}
        deleteOption={deleteOption}
        selected={selected} />
      <AddButton addOption={addOption} />
      <RollButton onClick={roll} disabled={options.every(r => r.ignored)} />
    </div>
  )
}

export default App

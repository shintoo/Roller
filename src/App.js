import React, { useState } from "react"
import Header from "./components/Header"
import AddButton from "./components/AddButton"
import RollButton from "./components/RollButton"
import OptionList from "./components/OptionList"
import optionData from "./resources/optionData"

function App() {
  const [ selected, setSelected ] = useState()
  const [ completed, setCompleted ] = useState(true)
  const [ options, setOptions ] = useState(optionData)
  const [ newId, setNewId ] = useState(10)

  const roll = async () => {
    let i
    let delay = 100
    let index = 0
    const ticks = Math.floor(Math.random() * 20) + (options.length * 3)

    if (options.every(r => r.ignored))
      return

    while (options[index].ignored)
      index++

    setSelected(options[index].id)
    setCompleted(false)
    let sleep = () =>
      new Promise(resolve => setTimeout(resolve, delay))

    for (i = 0; i < ticks; i++) {
      await sleep()

      // eslint-disable-next-line
      setSelected(prevSelected => {
          index++

          if (index >= options.length)
            index = 0

          while (options[index].ignored) {
            index++

            if (index >= options.length)
              index = 0
          }

          return options[index].id
      })

      if (delay < 300)
        delay *= 1.05


    }
    await sleep()
    setCompleted(true)
  }


  const ignore = id => {
    setOptions(prevOptions => {
      const index = prevOptions.findIndex(o => o.id === id)

      prevOptions[index].ignored = !prevOptions[index].ignored
      return prevOptions
    })
  }


  const deleteOption = id => {
    const index = options.findIndex(o => o.id === id)
    setOptions(prevOptions => {
      prevOptions.splice(index, 1)
      return [ ...prevOptions ]
    })
  }

  const addOption = name => {
    const newOption = {
      id: newId,
      name: name
    }

    setNewId(newId+1)

    console.log("Adding ", newOption)

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
      <RollButton onClick={roll} disabled={!completed} />
    </div>
  )
}

export default App

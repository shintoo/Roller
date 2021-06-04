import React, { useState } from "react"
import Header from "./components/Header"
import AddButton from "./components/AddButton"
import RollButton from "./components/RollButton"
import RestaurantList from "./components/RestaurantList"
import restaurantData from "./resources/restaurantData"

function App() {
  const [ selected, setSelected ] = useState()
  const [ completed, setCompleted ] = useState(false)
  const [ restaurants, setRestaurants ] = useState(restaurantData)

  const ticks = Math.floor(Math.random() * 20) + (restaurants.length * 2)
  let delay = 100

  const roll = async () => {
    let i
    let id = 0

    if (restaurants.every(r => r.ignored))
      return

    while (restaurants[id].ignored)
      id++

    setSelected(id)
    setCompleted(false)
    let sleep = () =>
      new Promise(resolve => setTimeout(resolve, delay))

    for (i = 0; i < ticks; i++) {
      await sleep()

      setSelected(prevSelected => {
          let id = prevSelected + 1

          if (id >= restaurants.length)
            id = 0

          while (restaurants[id].ignored) {
            id++

            if (id >= restaurants.length)
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
    setRestaurants(prevRestaurants => {
      prevRestaurants[id].ignored = !prevRestaurants[id].ignored
      return prevRestaurants
    })
  }


  const deleteOption = id => {
    const index = restaurants.indexOf(id)
    setRestaurants(prevRestaurants => {
      prevRestaurants.splice(index, 1)
      return [ ...prevRestaurants ]
    })
  }

  const addRestaurant = name => {
    if (name.length === 0)
      return

    const newRestaurant = {
      id: restaurants.length,
      name: name
    }
    setRestaurants(prevRestaurants => [ ...prevRestaurants, newRestaurant ])
  }

  return (
    <div style={{textAlign: "center"}}>
      <Header />
      <RestaurantList
        restaurants={restaurants}
        completed={completed}
        ignore={ignore}
        deleteOption={deleteOption}
        selected={selected} />
      <AddButton addRestaurant={addRestaurant} />
      <RollButton onClick={roll} disabled={restaurants.every(r => r.ignored)} />
    </div>
  )
}

export default App

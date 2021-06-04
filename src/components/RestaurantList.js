import React from "react"
import RestaurantCard from "./RestaurantCard"

function RestaurantList(props) {
  const restaurants = props.restaurants.map(r => 
    <RestaurantCard
      selected={r.id === props.selected}
      key={r.id}
      completed={props.completed}
      handleIgnore={() => {
        console.log("ignoring", r.id)
        props.ignore(r.id)
      }}
      handleDelete={() => {
        props.handleDelete(r.id)
      }}
      item={r} />)

  return (
    <div className="restaurant-list">
      {restaurants}
     </div>
  )
}

export default RestaurantList

import React, { useState } from 'react'

function Homepage () {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  )
}

// Meals 把数据传给 DisplayMeals
function Meals () {
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: "Pizza",
      description: "Cheesy goodness"
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy goodness"
    },
    {
      id: 3,
      name: "Hot Dog",
      description: "Sausage goodness"
    }
  ])

  const deleteItemHandler = (id) => {
    console.log('delete' + id)
    const next = meals.filter(item => item.id !== id)
    setMeals(next)
  }

  return (
    <div>
      {meals.map(item =>
        <DisplayMeals
          key={item.id}
          name={item.name}
          description={item.description}
          id={item.id}
          deleteItemHandler={deleteItemHandler} />)}
    </div>
  )
}


function DisplayMeals (props) {
  console.log(props)
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <button onClick={() => props.deleteItemHandler(props.id)}>Delete</button>
    </div>
  )
}


export default Homepage

export { Meals }
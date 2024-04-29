import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [peopleData, setPeopleData] = useState([])
  const [planetData, setPlanetData] = useState([])

  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    axios.get(`http://localhost:9009/api/people`)
      .then(res => {
        setPeopleData(res.data)
      })
      .catch(err => {
        console.log(err.data)
      })
    axios.get(`http://localhost:9009/api/planets`)
      .then(res => { 
        setPlanetData(res.data)
      })
      .catch(err => { 
        console.log(err.data)
      })
    }, [])

    const toggleHomeworldVisible = (person) => {
      setPeopleData(peopleData => 
        peopleData.map(
          p => person.id === p.id 
          ? {...p, homeworldVisible: !p.homeworldVisible} 
          : p
        )
      )
    }
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {peopleData.map(person => {
        const homeWorldObj = planetData.find(planet => planet.id === person.homeworld)

        return <Character 
          key={person.id}
          person={{...person, homeWorldObj}}
          toggleHomeworldVisible={() => toggleHomeworldVisible(person)}
        />
      })}
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App

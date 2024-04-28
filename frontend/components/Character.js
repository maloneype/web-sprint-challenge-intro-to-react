import React, { useState } from 'react'

function Character(props) { // ❗ Add the props
  const {person, homeworldVisible, toggleHomeworldVisible }  = props
  
  // // ❗ Create a state to hold whether the homeworld is rendering or not
  

  // // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card'  onClick={toggleHomeworldVisible}>
      <h3 className='character-name'>{person.name}</h3>
      {/* Use the same markup with the same attributes as in the mock */}
      {homeworldVisible && <p>Planet: <span className='character-planet'>{person.homeWorldObj.name}</span></p>}
    </div>
    )
  }

export default Character

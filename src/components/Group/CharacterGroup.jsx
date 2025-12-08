import React from 'react'
import Singing from '../models/instruments/Singing'
import Mic from '../models/instruments/Microphone'

function CharacterGroup() {
  return (
    <>
      <Singing position={[6, 0.3, 5]} />
      <Mic position={[17.5, -19.85, 22.5]} />
    </>
  )
}

export default CharacterGroup
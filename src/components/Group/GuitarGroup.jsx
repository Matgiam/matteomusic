import React from 'react'
import Guitar from '../models/instruments/Guitar'
import GuitarAmp from '../models/instruments/GuitarAmp'
import GuitarDeco from '../models/instruments/GuitarDeco'
import GuitarPoster from '../models/instruments/GuitarPoster'
import GuitarStand from '../models/instruments/GuitarStand'

function GuitarGroup() {
  return (
    <>
      <Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
      <GuitarAmp position={[-2.4, 0.2, 6.1]} rotation={[0, Math.PI / 1.5, 0]} />
      <GuitarDeco position={[-2.7, 0.2, 7.8]} rotation={[0, Math.PI, 0]} />
      <GuitarPoster position={[-2.95, 4.5, 6.3]} rotation={[0, 4.7, 0]} />
      <GuitarStand position={[-2.5, 0.3, 4.5]} rotation={[0, Math.PI / 2, 0]} />
    </>
  )
}

export default GuitarGroup
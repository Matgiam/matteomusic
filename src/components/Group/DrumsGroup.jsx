import React from 'react'
import Drums from '../models/instruments/Drums'
import Cymbal from '../models/instruments/Cymbal'
import Djembe from '../models/instruments/Djembe'
import Drumsticks from '../models/instruments/Drumsticks'

function DrumsGroup() {
  return (
    <>
      <Drums position={[5.5, 0.3, 1]} />
      <Cymbal position={[9.2, 3.2, 0.8]} rotation={[1.6, 0, 1.6]} />
      <Djembe position={[8.5, 0.3, 2.5]} rotation={[0, Math.PI / 4, 0]} />
      <Drumsticks position={[9, 3, -1.3]} rotation={[-1.4, Math.PI / 2, 0]} />
    </>
  )
}

export default DrumsGroup
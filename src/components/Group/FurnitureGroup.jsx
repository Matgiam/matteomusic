import React from 'react'
import Vinyl from '../models/decorations/Vinyl'
import VinylPlayer from '../models/decorations/VinylPlayer'
import Synth from '../models/instruments/Synth'
import Shelf from '../models/decorations/Shelf'
import Couch from '../models/decorations/Couch'
import Board from '../models/decorations/Board'
import TvShelf from '../models/decorations/Tv_shelf'

function FurnitureGroup() {
  return (
    <>
      <TvShelf position={[5.8, 0.3, -2.2]} rotation={[0, Math.PI / 2, 0]} />
      <Synth position={[7.8, 0.3, 8]} rotation={[0, Math.PI / 0.8, 0]} />
      <Shelf position={[8.8, 0.3, 4.9]} rotation={[0, Math.PI / 0.66, 0]} />
      <Couch position={[4.8, 0.3, 8.2]} rotation={[0, Math.PI, 0]} />
      <Vinyl position={[8.5, 1, 5.5]} rotation={[0, Math.PI, 0]} />
      <Vinyl position={[8.5, 0.4, 5.5]} rotation={[0, Math.PI, 0]} />
      <VinylPlayer position={[8.5, 1.59, 5.7]} rotation={[0, Math.PI, 0]} />
      <Board position={[5.7, 3.8, 8.9]} rotation={[0, -Math.PI, 0]} scale={0.05} />
    </>
  )
}

export default FurnitureGroup
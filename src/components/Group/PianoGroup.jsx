import React, { useState, useRef } from 'react'
import Piano from '../models/instruments/Piano'
import Plank from '../models/decorations/Plank'
import Cd from '../models/decorations/Cd'
import PianoShelf from '../models/decorations/PianoShelf'
import HeadPhone from '../models/decorations/Headphone'
import Vinyl from '../models/decorations/Vinyl'

function PianoGroup() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPianistSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/piano.mp3');
      audioRef.current.volume = 0.1;
      audioRef.current.onended = () => setIsPlaying(false);
    }

    const allAudios = document.querySelectorAll("audio");
    allAudios.forEach((audio) => {
      if (audio !== audioRef.current) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <Plank position={[0.5, 3.3, -2.6]} rotation={[0, -Math.PI / 1, 0]} />
      <Cd position={[0.5, 3.35, -2.8]} rotation={[0, 0, 0]} />
      <Piano 
        position={[-2, 0.25, 1]} 
        rotation={[0, Math.PI / 4, 0]}
        onClick={playPianistSound}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      />
      <PianoShelf position={[-2.5, 0.3, -2]} rotation={[0, 2 * Math.PI, 0]} />
      <HeadPhone position={[2, 1.85, -2.5]} rotation={[0, Math.PI / 1.2, 0]} />
      <Vinyl position={[1, 1.85, -2.5]} rotation={[0, Math.PI / 2, 0]} />
    </>
  )
}

export default PianoGroup
import React, { useState, useRef } from 'react'
import Drums from '../models/instruments/Drums'
import Cymbal from '../models/instruments/Cymbal'
import Djembe from '../models/instruments/Djembe'
import Drumsticks from '../models/instruments/Drumsticks'

function DrumsGroup() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playDrummerSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/drums.mp3');
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
      <Drums 
        position={[5.5, 0.3, 1]} 
        onClick={playDrummerSound}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      />
      <Cymbal position={[9.2, 3.2, 0.8]} rotation={[1.6, 0, 1.6]} />
      <Djembe position={[8.5, 0.3, 2.5]} rotation={[0, Math.PI / 4, 0]} />
      <Drumsticks position={[9, 3, -1.3]} rotation={[-1.4, Math.PI / 2, 0]} />
    </>
  )
}

export default DrumsGroup
import React, { useState, useRef } from 'react'
import Guitar from '../models/instruments/Guitar'
import GuitarAmp from '../models/instruments/GuitarAmp'
import GuitarDeco from '../models/instruments/GuitarDeco'
import GuitarPoster from '../models/instruments/GuitarPoster'
import GuitarStand from '../models/instruments/GuitarStand'

function GuitarGroup() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playGuitaristSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/sounds/guitar.mp3');
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
      <Guitar 
        position={[0.5, 0.2, 6]} 
        rotation={[0, Math.PI, 0]}
        onClick={playGuitaristSound}
        onPointerOver={() => document.body.style.cursor = 'pointer'}
        onPointerOut={() => document.body.style.cursor = 'auto'}
      />
      <GuitarAmp position={[-2.4, 0.2, 6.1]} rotation={[0, Math.PI / 1.5, 0]} />
      <GuitarDeco position={[-2.7, 0.2, 7.8]} rotation={[0, Math.PI, 0]} />
      <GuitarPoster position={[-2.95, 4.5, 6.3]} rotation={[0, 4.7, 0]} />
      <GuitarStand position={[-2.5, 0.3, 4.5]} rotation={[0, Math.PI / 2, 0]} />
    </>
  )
}

export default GuitarGroup
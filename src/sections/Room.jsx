import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Piano from "../components/models/Piano_animation";
import MusicRoom from "../components/models/Optimized-room";
import Lights from "../components/lights/Lights";

function Room() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [5, 1,5] }}>
        <OrbitControls  
          target={[3, 1, 3]}    
        />
        <Lights />
        <MusicRoom />
        <MusicRoom position={[0, 0, 6.27]} rotation={[0, Math.PI / 2, 0]} />
        <MusicRoom position={[6.27, 0, 6.27]} rotation={[0, Math.PI, 0]} />
        <MusicRoom position={[6.27, 0, 0]} rotation={[0, 3.5*Math.PI, 0]}/>
        <Piano position={[0.2, 0.81, -2.3]} />
      </Canvas>
    </div>
  );
}

export default Room;

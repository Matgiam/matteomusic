import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Group Components
import MusicRoomGroup from "./Group/MusicRoomGroup";
import CandlesGroup from "./Group/CandlesGroup";
import PianoGroup from "./Group/PianoGroup";
import GuitarGroup from "./Group/GuitarGroup";
import DrumsGroup from "./Group/DrumsGroup";
import FurnitureGroup from "./Group/FurnitureGroup";
import CharacterGroup from "./Group/CharacterGroup";

// Individual Models
import Wood from "./models/room/Wood";

// Lights + Constants
import Lights from "./lights/Lights";
import { candlePositions, MusicRoomPositions, MusicRoomRotations } from "../constants";

function Room() {
	return (
		<div style={{ width: "60vw", height: "70vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }}>
				{/* <OrbitControls target={[3, 1.5, 3]} minPolarAngle={1.5} maxPolarAngle={1.5} enableZoom={false} enablePan={false} /> */}
				<OrbitControls target={[3, 15.5, 3]} minPolarAngle={0} maxPolarAngle={0} enableZoom={false} enablePan={false} />
				<Lights />
				<Wood position={[2.6, 0.258, 3.3]} />
				<Wood position={[2.6, 0.26, 5]} />
				<Wood position={[2.6, 0.262, -1]} />
				
				{/* Room Structure */}
				<MusicRoomGroup positions={MusicRoomPositions} rotations={MusicRoomRotations} />
				
				{/* Piano Area */}
				<PianoGroup />
				
				{/* Guitar Area */}
				<GuitarGroup />
				
				{/* Drums Area */}
				<DrumsGroup />
				
				{/* Furniture & Electronics */}
				<FurnitureGroup />
				
				{/* Character */}
				<CharacterGroup />
			</Canvas>
		</div>
	);
}

export default Room;

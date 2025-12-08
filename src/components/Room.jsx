import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
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
import { useGSAP } from "@gsap/react";

function Room() {
	const [controlsConfig, setControlsConfig] = useState({
		target: [3, 15.5, 3],
		minPolarAngle: 0,
		maxPolarAngle: 0,
		minDistance: 10,
		maxDistance: 10,
	});

	const handleCanvasClick = () => {
		setControlsConfig({
			target: [3, 1.5, 3],
			minPolarAngle: 1.5,
			maxPolarAngle: 1.5,
			minDistance: 1.5,
			maxDistance: 1.5,
		});
	};

	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }} onClick={handleCanvasClick}>
				<OrbitControls
					target={controlsConfig.target}
					minPolarAngle={controlsConfig.minPolarAngle}
					maxPolarAngle={controlsConfig.maxPolarAngle}
					enableZoom={false}
					enablePan={false}
					minDistance={controlsConfig.minDistance}
					maxDistance={controlsConfig.maxDistance}
				/>
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

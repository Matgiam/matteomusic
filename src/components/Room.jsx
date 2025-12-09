import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

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
	const controlsRef = useRef();
	const [isTransitioning, setIsTransitioning] = useState(false);

	const handleCanvasClick = () => {
		if (isTransitioning || !controlsRef.current) return;
		
		setIsTransitioning(true);
		
		// Create timeline for coordinated animation
		const tl = gsap.timeline({
			onComplete: () => setIsTransitioning(false)
		});

		// Animate target with custom easing
		tl.to(controlsRef.current.target, {
			x: 3,
			y: 1.5,
			z: 3,
			duration: 3.5,
			ease: "expo.inOut",
			onUpdate: () => controlsRef.current.update()
		}, 0);

		// Animate camera position with slight delay for natural feel
		tl.to(controlsRef.current.object.position, {
			duration: 3.5,
			ease: "expo.inOut",
			onUpdate: function() {
				const distance = 1.5;
				const direction = new THREE.Vector3();
				direction.subVectors(controlsRef.current.object.position, controlsRef.current.target).normalize();
				controlsRef.current.object.position.copy(controlsRef.current.target).add(direction.multiplyScalar(distance));
				controlsRef.current.update();
			}
		}, 0.1);

		// Gradually update constraints
		tl.to(controlsRef.current, {
			minPolarAngle: 1.5,
			maxPolarAngle: 1.5,
			minDistance: 1.5,
			maxDistance: 1.5,
			duration: 2,
			ease: "power2.inOut"
		}, 0.5);
	};





	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }} onClick={handleCanvasClick}>
				<OrbitControls
					ref={controlsRef}
					target={[3, 15.5, 3]}
					minPolarAngle={0}
					maxPolarAngle={0}
					enableZoom={false}
					enablePan={false}
					minDistance={10}
					maxDistance={10}
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

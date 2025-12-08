import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Globe from "./models/decorations/Globe";
import { useRef } from "react";

function RotatingGlobe() {
	const ref = useRef();

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.y += 0.005;
		}
	});

	return <Globe ref={ref} position={[0, 0, 0]} />;
}

function GlobeComponent() {
	return (
		<div style={{ width: "55vw", height: "55vh" }}>
			<Canvas camera={{ position: [1, 1, 1], fov: 75 }}>
				<OrbitControls enableZoom={false} enablePan={false} />
				<RotatingGlobe />
			</Canvas>
		</div>
	);
}
export default GlobeComponent;

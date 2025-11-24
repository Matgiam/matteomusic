import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import MusicRoom from "../components/models/Optimized-room";
import Lights from "../components/lights/Lights";
import Guitar from "../components/models/Guitar";
import Drums from "../components/models/Drums";
import Piano from "../components/models/Piano";

function Room() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5] }}>
				<OrbitControls target={[3, 1, 3]} />
				<Lights />
				<MusicRoom />
				<MusicRoom position={[0, 0, 6.27]} rotation={[0, Math.PI / 2, 0]} />
				<MusicRoom position={[6.27, 0, 6.27]} rotation={[0, Math.PI, 0]} />
				<MusicRoom position={[6.27, 0, 0]} rotation={[0, 3.5 * Math.PI, 0]} />
				<Piano position={[-2, 0.25, 1]} rotation={[0, Math.PI/4, 0]} />
				<Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
				<Drums position={[5.5, 0.3, 1]} />
			</Canvas>
		</div>
	);
}

export default Room;

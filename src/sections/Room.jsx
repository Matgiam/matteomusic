import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Room() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [2, 2, 5] }}>
				<OrbitControls />
			</Canvas>
		</div>
	);
}
export default Room;

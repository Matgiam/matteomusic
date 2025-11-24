import * as THREE from "three";

function Lights() {
	return (
		<>
			<spotLight position={[2, 5, 6]} intensity={100} angle={0.15} penumbra={0.3} color={"#da380b"} />
			<spotLight position={[4, 5, 4]} intensity={40} angle={0.3} penumbra={0.5} color={"#e37a10"} />
			<spotLight position={[-3, 5, 5]} intensity={60} angle={0.4} penumbra={1} color={"#c23f17"} />
			<pointLight position={[10, 3, 8]} intensity={40} angle={0.4} penumbra={1} color={"#e37a10"} />
			<ambientLight position={[1, 1, 9.8]} intensity={0.5} color={"#e37a10"} />
			<spotLight position={[-4, 6, -4]} intensity={100} angle={2} color={"#c23f17"} />
			<spotLight position={[3, 6, -4]} intensity={100} angle={2} color={"#c23f17"} />
			<spotLight position={[-4, 6, 3]} intensity={100} angle={2} color={"#c23f17"} />
			<pointLight position={[0, 1, 0]} intensity={10} color={"#e78719"} />
			<pointLight position={[1, 2, -2]} intensity={10} color={"#e50000"} />
		</>
	);
}
export default Lights;

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Models
import MusicRoom from "../components/models/Optimized-room";
import Guitar from "../components/models/Guitar";
import Drums from "../components/models/Drums";
import Piano from "../components/models/Piano";
import Singing from "../components/models/Singing";
import CandlesGroup from "../components/Group/CandlesGroup";

// Lights + Constants
import Lights from "../components/lights/Lights";
import { candlePositions, MusicRoomPositions, MusicRoomRotations } from "../constants";
import MusicRoomGroup from "../components/Group/MusicRoomGroup";

function Room() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }}>
				<OrbitControls target={[3, 1, 3]} />
				<Lights />

				{/* Room Walls */}
				<MusicRoomGroup positions={MusicRoomPositions} rotations={MusicRoomRotations} />

				{/* Instruments */}
				<Piano position={[-2, 0.25, 1]} rotation={[0, Math.PI / 4, 0]} />
				<Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
				<Drums position={[5.5, 0.3, 1]} />

				{/* Candles */}
				<CandlesGroup positions={candlePositions} />

				{/* Animated Character */}
				<Singing position={[6, 0.3, 6]} />
			</Canvas>
		</div>
	);
}

export default Room;

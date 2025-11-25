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
import Mic from "../components/models/Microphone";
import GuitarAmp from "../components/models/GuitarAmp";
import GuitarDeco from "../components/models/GuitarDeco";
import GuitarPoster from "../components/models/GuitarPoster";
import Wood from "../components/models/Wood";

function Room() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }}>
				<OrbitControls target={[3, 1, 3]} minPolarAngle={1.5} maxPolarAngle={1.5} />
				<Lights />
				<Wood position={[2,0.258,3.3]}/>
				{/* Room Walls */}
				<MusicRoomGroup positions={MusicRoomPositions} rotations={MusicRoomRotations} />

				{/* Instruments */}
				<Piano position={[-2, 0.25, 1]} rotation={[0, Math.PI / 4, 0]} />

				{/* Guitar */}
				<Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
				<GuitarAmp position={[2.5, 0.2, 8.5]} rotation={[0, Math.PI, 0]} />
				<GuitarDeco position={[-2.7, 0.2, 7.8]} rotation={[0, Math.PI, 0]} />
				<GuitarPoster position={[-2.95, 4.5, 6.3]} rotation={[0, 4.7, 0]} />
				<Drums position={[5.5, 0.3, 1]} />
				<Mic position={[17.5, -19.85, 22.5]} />
				{/* Candles */}
				<CandlesGroup positions={candlePositions} />

				{/* Animated Character */}
				<Singing position={[6, 0.3, 6]} />
			</Canvas>
		</div>
	);
}

export default Room;

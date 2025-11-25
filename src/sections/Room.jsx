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
import GuitarStand from "../components/models/GuitarStand";
import Synth from "../components/models/Synth";
import Shelf from "../components/models/Shelf";
import Couch from "../components/models/Couch";
import Vinyl from "../components/models/Vinyl";
import VinylPlayer from "../components/models/VinylPlayer";
import Cymbal from "../components/models/Cymbal";
import Djembe from "../components/models/Djembe";
import TvShelf from "../components/models/Tv_shelf";
import Drumsticks from "../components/models/Drumsticks";
import Board from "../components/models/Board";

function Room() {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Canvas camera={{ position: [5, 1, 5], fov: 50 }}>
				<OrbitControls target={[3, 1.5, 3]} minPolarAngle={1.5} maxPolarAngle={1.5} />
				<Lights />
				<Wood position={[2, 0.258, 3.3]} />
				{/* Room Walls */}
				<MusicRoomGroup positions={MusicRoomPositions} rotations={MusicRoomRotations} />
				{/* Instruments */}
				<Piano position={[-2, 0.25, 1]} rotation={[0, Math.PI / 4, 0]} />
				{/* Guitar */}
				<Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
				<GuitarAmp position={[-2.4, 0.2, 6.1]} rotation={[0, Math.PI/1.5, 0]} />
				<GuitarDeco position={[-2.7, 0.2, 7.8]} rotation={[0, Math.PI, 0]} />
				<GuitarPoster position={[-2.95, 4.5, 6.3]} rotation={[0, 4.7, 0]} />
				<GuitarStand position={[-2.5, 0.3, 4.5]} rotation={[0, Math.PI / 2, 0]} />
				<Drums position={[5.5, 0.3, 1]} />
				<Cymbal position={[9.2, 3.2, 0.8]} rotation={[1.6, 0, 1.6]} />
				<Djembe position={[8.5, 0.3, 2.5]} rotation={[0, Math.PI / 4, 0]} />
				<TvShelf position={[5.8, 0.3, -2.2]} rotation={[0, Math.PI / 2, 0]} />
				<Drumsticks position={[9, 3, -1.3]} rotation={[-1.4, Math.PI/2, 0]} />
				{/* Candles */}
				{/* <CandlesGroup positions={candlePositions} /> */}
				{/* Animated Character */}
				<Singing position={[6, 0.3, 5]} />
				<Mic position={[17.5, -19.85, 22.5]} />
				<Synth position={[7.8, 0.3, 8]} rotation={[0, Math.PI / 0.8, 0]} />
				<Shelf position={[8.8, 0.3, 4.9]} rotation={[0, Math.PI / 0.66, 0]} />
				<Couch position={[4.8, 0.3, 8.2]} rotation={[0, Math.PI, 0]} />
				<Vinyl position={[8.5, 1, 5.5]} rotation={[0, Math.PI, 0]} />
				<Vinyl position={[8.5, 0.4, 5.5]} rotation={[0, Math.PI, 0]} />
				<VinylPlayer position={[8.5, 1.59, 5.7]} rotation={[0, Math.PI, 0]} /> *
				<Board position={[5.7, 3.8, 8.9]} rotation={[0, -Math.PI, 0]} scale={0.05} />
			</Canvas>
		</div>
	);
}

export default Room;

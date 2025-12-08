import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Models
import MusicRoom from "./models/Optimized-room";
import Guitar from "./models/Guitar";
import Drums from "./models/Drums";
import Piano from "./models/Piano";
import Singing from "./models/Singing";
import CandlesGroup from "./Group/CandlesGroup";

// Lights + Constants
import Lights from "./lights/Lights";
import { candlePositions, MusicRoomPositions, MusicRoomRotations } from "../constants";
import MusicRoomGroup from "./Group/MusicRoomGroup";
import Mic from "./models/Microphone";
import GuitarAmp from "./models/GuitarAmp";
import GuitarDeco from "./models/GuitarDeco";
import GuitarPoster from "./models/GuitarPoster";
import Wood from "./models/Wood";
import GuitarStand from "./models/GuitarStand";
import Synth from "./models/Synth";
import Shelf from "./models/Shelf";
import Couch from "./models/Couch";
import Vinyl from "./models/Vinyl";
import VinylPlayer from "./models/VinylPlayer";
import Cymbal from "./models/Cymbal";
import Djembe from "./models/Djembe";
import TvShelf from "./models/Tv_shelf";
import Drumsticks from "./models/Drumsticks";
import Board from "./models/Board";
import Plank from "./models/Plank";
import Cd from "./models/Cd";
import PianoShelf from "./models/PianoShelf";
import HeadPhone from "./models/Headphone";

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
				{/* Room Walls */}
				<MusicRoomGroup positions={MusicRoomPositions} rotations={MusicRoomRotations} />
				{/* Piano */}
				<Plank position={[0.5, 3.3, -2.6]} rotation={[0, -Math.PI / 1, 0]} />
				<Cd position={[0.5, 3.35, -2.8]} rotation={[0, 0, 0]} />
				<Piano position={[-2, 0.25, 1]} rotation={[0, Math.PI / 4, 0]} />
				<PianoShelf position={[-2.5, 0.3, -2]} rotation={[0, 2 * Math.PI, 0]} />
				<HeadPhone position={[2, 1.85, -2.5]} rotation={[0, Math.PI / 1.2, 0]} />
				<Vinyl position={[1, 1.85, -2.5]} rotation={[0, Math.PI / 2, 0]} />
				{/* Guitar */}
				<Guitar position={[0.5, 0.2, 6]} rotation={[0, Math.PI, 0]} />
				<GuitarAmp position={[-2.4, 0.2, 6.1]} rotation={[0, Math.PI / 1.5, 0]} />
				<GuitarDeco position={[-2.7, 0.2, 7.8]} rotation={[0, Math.PI, 0]} />
				<GuitarPoster position={[-2.95, 4.5, 6.3]} rotation={[0, 4.7, 0]} />
				<GuitarStand position={[-2.5, 0.3, 4.5]} rotation={[0, Math.PI / 2, 0]} />
				<Drums position={[5.5, 0.3, 1]} />
				<Cymbal position={[9.2, 3.2, 0.8]} rotation={[1.6, 0, 1.6]} />
				<Djembe position={[8.5, 0.3, 2.5]} rotation={[0, Math.PI / 4, 0]} />
				<TvShelf position={[5.8, 0.3, -2.2]} rotation={[0, Math.PI / 2, 0]} />
				<Drumsticks position={[9, 3, -1.3]} rotation={[-1.4, Math.PI / 2, 0]} />
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

import { useState } from "react";
import Room from "./components/Room";
import HomeSection from "./sections/HomeSection";
import "./index.css";
import AboutSection from "./sections/AboutSection";
import VideoSection from "./sections/VideoSection";
import DiscoverSection from "./sections/DiscoverSection";
import RoomSection from "./sections/RoomSection";
function App() {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<VideoSection />
			<DiscoverSection />
			<RoomSection/>
			{/* <Room /> */}
		</>
	);
}

export default App;

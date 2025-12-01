import { useState } from "react";
import Room from "./sections/Room";
import HomeSection from "./sections/HomeSection";
import "./index.css";
import AboutSection from "./sections/AboutSection";
import VideoSection from "./sections/VideoSection";
import DiscoverSection from "./sections/DiscoverSection";
function App() {
	return (
		<>
			<HomeSection />
			<AboutSection/>
			<VideoSection />
			<DiscoverSection/>
			{/* <Room /> */}
		</>
	);
}

export default App;

import { useState } from "react";
import Room from "./components/Room";
import HomeSection from "./sections/HomeSection";
import "./index.css";
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import AboutSection from "./sections/AboutSection";
import VideoSection from "./sections/VideoSection";
import DiscoverSection from "./sections/DiscoverSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import WorldSection from "./sections/WorldSection";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
function App() {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 3,
			effects: true,
		});
	});
	return (
		<>
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<HomeSection />
					<AboutSection />
					<VideoSection />
					<WorldSection />
					<DiscoverSection />
					<Room />
				</div>
			</div>
		</>
	);
}

export default App;

import { useState } from "react";
import Room from "./sections/Room";
import HomeSection from "./sections/HomeSection";
import "./index.css";
import AboutSection from "./sections/AboutSection";
function App() {
	return (
		<>
			<HomeSection />
			<AboutSection/>
			{/* <Room /> */}
		</>
	);
}

export default App;

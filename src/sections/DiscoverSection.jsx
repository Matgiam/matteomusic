import Room from "../components/Room";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
function DiscoverSection() {
	useGSAP(() => {
		const roomChars = new SplitText(".room-section h1", { type: "chars" });
		gsap.from(roomChars.chars, {
			yPercent: 30,
			opacity: 0,
			stagger: 0.22,
			scrollTrigger: {
				trigger: ".room-section h1",
				start: "top 80%",
				end: "bottom 50%",
				markers: true,
				scrub: true,
			},
		});

		// Arrow bounce animation
		gsap.to(".arrow-down", {
			y: 50,
			duration: 1,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});
	});

	return (
		<section className="room-section">
			<div className="flex flex-col justify-center items-center h-full gap-20">
				<h1 className="">Discover it here</h1>
				<div className="arrow-down">
					<svg width="80" height="80" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 20L8 13L9.4 11.6L15 17.2L20.6 11.6L22 13L15 20Z" fill="currentColor"/>
					</svg>
				</div>
			</div>
		</section>
	);
}

export default DiscoverSection;

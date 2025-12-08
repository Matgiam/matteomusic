import Room from "../components/Room";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
function RoomSection() {
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
				// markers: true,
				scrub: true,
			},
		});
	});

	return (
		<section className="room-section">
			<div className="flex flex-col justify-center items-center h-full gap-20">
				<h1 className="">Discover it here</h1>
				<Room />
			</div>
		</section>
	);
}

export default RoomSection;

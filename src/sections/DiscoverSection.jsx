import { useGSAP } from "@gsap/react";
import GlobeComponent from "../components/GlobeComponent";
import gsap from "gsap";

function DiscoverSection() {
	useGSAP(() => {
		gsap.to(".first", {
			xPercent: "80",
			rotate: "30deg",
			padding: "0.8em",
			scrollTrigger: {
				trigger: ".discover-section",
				start: "-20% 10%",
				end: "50% top",
				markers: true,
				scrub: true,
			},
		});
		gsap.to(".second", {
			rotate: "-30deg",
			xPercent: "-50",
			padding: "0.8em",
			scrollTrigger: {
				trigger: ".discover-section",
				start: "-15% 10%",
				end: "50% top",
				markers: true,
				scrub: true,
			},
		});

		gsap.to(".third", {
			xPercent: "90",
			rotate: "30deg",
			padding: "0.8em",
			scrollTrigger: {
				trigger: ".discover-section",
				start: "-5% 10%",
				end: "50% top",
				markers: true,
				scrub: true,
			},
		});

		gsap.to(".fourth", {
			rotate: "-30deg",
			padding: "0.8em",
			scrollTrigger: {
				trigger: ".discover-section",
				start: "-10% 10%",
				end: "50% top",
				markers: true,
				scrub: true,
			},
		});
	});
	return (
		<section className="discover-section">
			<div className="flex justify-around items-center h-full">
				<div className="flex-col ml-100 text-center">
					<div className="text">
						<h1 className="first">Want</h1>
						<h2 className="second">to discover</h2>
						<h2 className="third">my </h2>
						<h2 className="fourth">world ? </h2>
					</div>
				</div>

				<GlobeComponent />
			</div>
		</section>
	);
}
export default DiscoverSection;

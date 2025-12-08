import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import GlobeComponent from "../components/GlobeComponent";
import gsap from "gsap";
function DiscoverSection() {
	const container = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".discover-section",
				start: "-10% 20%",
				end: "bottom top",
				scrub: 1.5,
				// markers: true,
			},
		});
		tl.to(
			".first",
			{
				xPercent: -80,
				rotate: -15,
			},
			"<"
		);

		tl.to(
			".second",
			{
				xPercent: -40,
				rotate: -8,
			},
			"<"
		);
		tl.to(
			".third",
			{
				xPercent: 40,
				rotate: 10,
			},
			"<"
		);
		tl.to(
			".fourth",
			{
				xPercent: 80,
				rotate: 15,
			},
			"<"
		);
	});

	return (
		<section ref={container} className="discover-section overflow-hidden">
			<div className="flex justify-around items-center h-full">
				<div className="flex-col ml-100 text-center relative z-10">
					<div className="text font-bold text-6xl">
						{/* Added block display to ensure transforms work correctly */}
						<h1 className="first inline-block">Want</h1>
						<br />
						<h2 className="second inline-block">to discover</h2>
						<br />
						<h2 className="third inline-block">my </h2>
						<br />
						<h2 className="fourth inline-block">world ? </h2>
					</div>
				</div>

				<GlobeComponent />
			</div>
		</section>
	);
}

export default DiscoverSection;

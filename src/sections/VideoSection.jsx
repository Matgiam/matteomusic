import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function VideoSection() {
	useGSAP(() => {
		gsap.to(".video", {
			clipPath: "polygon(100% 0%, 120% 0%, 100% 100%, 120% 100%)",
			duration: 5,
			ease: "power2.inOut",
			scrollTrigger: {
				trigger: ".vd-pin-section",
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: true,
				// markers: true,
			},
		});
		gsap.from(".vd-section-text h2", {
			opacity: 0,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".vd-section-text",
				start: "65% 10%",
				end: "100% 10%",
				scrub: true,
				// markers: true,
			},
		});
	});
	return (
		<section className="vd-pin-section">
			<div>
				<div
					className="video"
					style={{ clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)", width: "100vw", height: "100vh", overflow: "hidden" }}
				>
					<video src="/videos/video_matteo.mp4" muted loop autoPlay></video>
				</div>

				<div className="vd-section-text">
					<h2>
						I was not lying when I <br /> said since I was a baby
					</h2>
				</div>
			</div>
		</section>
	);
}
export default VideoSection;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
function AboutSection() {
	useGSAP(() => {
		const firstWord = new SplitText(".first-word", { type: "words" });
		const thirdWord = new SplitText(".third-word", { type: "chars" });
		const seventhWord = new SplitText(".seventh-word", { type: "words" });
		const ninthWord = new SplitText(".ninth-word", { type: "words" });
		const message = new SplitText(".msg-wrapper", { type: "words" });
		// const messageTL = gsap.timeline({
		// 	scrollTrigger: {
		// 		trigger: ".about-section",
		// 		start: "10% 70%",
		// 		end: "50% 70%",
		// 		scrub: true,
		// 		markers: true,
		// 	},
		// });
		gsap.from(message.words, {
			opacity: 0,
			stagger: 2.5,
			yPercent: 20,
			duration: 5.2,
			scrub: true,
			scrollTrigger: {
				trigger: ".about-section",
				start: "20% 70%",
				end: "50% 70%",
				scrub: true,
				// markers: true,
			},
		});
		const firstWordTL = gsap.timeline({
			scrollTrigger: {
				trigger: ".about-section",
				start: "top 70%",
				end: "50% 70%",
				scrub: true,
				// markers: true,
			},
		});
		gsap.to(firstWord.words, {
			scale: 2,
			ease: "power1.inOut",
			transformOrigin: "center center",
			color: "#be140b",
			stagger: 0.05,
			scrollTrigger: {
				trigger: ".about-section",
				start: "25% 70%",
				end: "50% 70%",
				scrub: true,
				// markers: true,
			},
			padding: "0.8em",
		});
		gsap.to(thirdWord.chars, {
			ease: "power1.inOut",
			transformOrigin: "bottom left",
			color: "#be140b",
			stagger: 0.2,
			scrollTrigger: {
				trigger: ".about-section",
				start: "35% 70%",
				end: "55% 70%",
				scrub: true,
				// markers: true,
			},
		
		});
		gsap.to(seventhWord.words, {
			scale: 1.5,
			ease: "power1.inOut",
			transformOrigin: "center center",
			color: "#ffb700ff",
			padding: "0.8em",
			scrollTrigger: {
				trigger: ".about-section",
				start: "45% 70%",
				end: "60% 70%",
				scrub: true,
				// markers: true,
			},
		});
		gsap.to(ninthWord.words, {
			scale: 0.3,
			ease: "power1.inOut",
			transformOrigin: "bottom left",
			color: "#E83A00",
			marginLeft: "-0.2em",
			y: "-0.15em",
			scrollTrigger: {
				trigger: ".about-section",
				start: "55% 70%",
				end: "70% 70%",
				scrub: true,
				// markers: true,
			},
		});
	});
	return (
		<section className="about-section overflow-hidden min-h-screen flex items-center justify-center">
			<div className="p-11 text-center">
				<div className="msg-wrapper flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
					<h1 className="first-word">Hey!</h1>
					<h1 className="second-word">I'm Matteo and I</h1>
					<h1 className="third-word">have </h1>
					<h1 className="fourth-word">a</h1>
					<h1 className="fifth-word">passion</h1>
					<h1 className="sixth-word">for</h1>
					<h1 className="seventh-word">music</h1>
					<h1 className="eighth-word">since I was a</h1>
					<h1 className="ninth-word">little</h1>
					<h1 className="tenth-word">baby</h1>
				</div>
			</div>
		</section>
	);
}
export default AboutSection;

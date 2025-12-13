import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

function HomeSection() {
	useGSAP(() => {
		const titleChars = new SplitText(".home-section h1", { type: "chars" });
		
		gsap.from(titleChars.chars, {
			yPercent: 30,
			opacity: 0,
			stagger: 0.05,
			duration: 1,
			ease: "power3.out"
		});

		gsap.from(".home-section p", {
			yPercent: 20,
			opacity: 0,
			duration: 1,
			delay: 0.5,
			ease: "power3.out"
		});

		gsap.from(".home-section .image", {
			scale: 1.1,
			opacity: 0,
			duration: 1.2,
			delay: 0.3,
			ease: "power2.out"
		});

		gsap.from(".social-icons img", {
			yPercent: 30,
			opacity: 0,
			stagger: 0.1,
			duration: 0.8,
			delay: 0.8,
			ease: "power2.out"
		});
	});
	return (
		<section className="home-section overflow-hidden">
			<div className="relative z-10 flex flex-col md:flex-row items-end justify-between w-full h-full pl-20">
				<div className="text-center md:text-left md:w-1/2 pb-20 relative">
					<h1>
						Matteo <br /> Giambarresi
					</h1>
					<p>Passionate musician that loves to create music</p>
				</div>
				<div className="image">
					<img src="/images/matteo_back.png" alt="" className="w-full h-[100vh] object-cover" />
				</div>
				<div className="social-icons absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
					<img src="/icons/instagram.webp" alt="Instagram" className="w-8 h-8" />
					<img src="/icons/spotify.png" alt="Spotify" className="w-8 h-8" />
					<img src="/icons/youtube.webp" alt="YouTube" className="w-8 h-8" />
				</div>
			</div>
		</section>
	);
}
export default HomeSection;

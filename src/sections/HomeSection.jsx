function HomeSection() {
	return (
		<section className="overflow-hidden">
			<div className="relative z-10 flex flex-col md:flex-row items-end justify-between w-full h-full pl-20">
				<div className="text-center md:text-left md:w-1/2 pb-20 relative">
					<h1>
						Matteo <br /> Giambarresi
					</h1>
					<p>Passionate musician that loves to create music</p>
				</div>
				<div className="">
					<img src="/images/matteo_back.png" alt="" className="w-full h-[100vh] object-cover" />
				</div>
				<div className="absolute right-20  top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
					<img src="/icons/instagram.webp" alt="Instagram" className="w-8 h-8" />
					<img src="/icons/spotify.png" alt="Spotify" className="w-8 h-8" />
					<img src="/icons/youtube.webp" alt="YouTube" className="w-8 h-8" />
				</div>
			</div>
		</section>
	);
}
export default HomeSection;

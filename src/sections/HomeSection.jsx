function HomeSection() {
	return (
		<section className="overflow-hidden relative h-dvh">
			<div className="flex flex-col md:flex-row items-end justify-between w-[100vw] h-full pl-20">
				<div className="text-center md:text-left md:w-1/2 pb-20 absolute">
					<h1>
						Matteo <br /> Giambarresi
					</h1>
					<h2>Passionate musician that loves to create music</h2>
				</div>
				<div className="">
					<img src="public/images/matteo_back.png" alt="" className="w-[70vw] h-[100vh] object-cover ml-130" />
				</div>
			</div>
			<div className="absolute right-20 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
				<img src="public/icons/instagram.webp" alt="Instagram" className="w-8 h-8" />
				<img src="public/icons/spotify.png" alt="Spotify" className="w-8 h-8" />
				<img src="public/icons/youtube.webp" alt="YouTube" className="w-8 h-8" />
			</div>
		</section>
	);
}
export default HomeSection;

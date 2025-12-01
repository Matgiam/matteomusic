import GlobeComponent from "../components/GlobeComponent";

function DiscoverSection() {
	return (
		<section className="discover-section">
			<div className="flex justify-around items-center h-full">
				<div className="flex-col ml-100 text-center">
					<h1>Want</h1>
					<h2>to discover</h2>
					<h2>my world ? </h2>
				</div>

				<GlobeComponent />
			</div>
		</section>
	);
}
export default DiscoverSection;

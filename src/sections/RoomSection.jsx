import Room from "../components/Room";

function RoomSection() {
	return (
		<section className="room-section">
			<div className="flex flex-col justify-center items-center h-full gap-20">
				<h1>Discover it here</h1>
				<Room />
			</div>
		</section>
	);
}

export default RoomSection;

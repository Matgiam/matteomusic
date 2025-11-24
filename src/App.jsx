import { useState } from "react";
import Room from "./sections/Room";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Room />
		</>
	);
}

export default App;

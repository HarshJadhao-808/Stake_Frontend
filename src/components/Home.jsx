import React, { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
	const [sideshow, setSideshow] = useState(false);
	return (
		<div onClick={() => setSideshow(false)} className=" w-screen h-full ">
			<Navbar setSideshow={setSideshow} sideshow={sideshow} />
		</div>
	);
};

export default Home;

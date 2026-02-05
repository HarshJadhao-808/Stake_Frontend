import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Stake from "./components/Stake";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";


function App() {
	return (
		<>
			<Router>
				<Home/>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Stake/>} />
					<Route path="/admin" element={<Dashboard/>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;

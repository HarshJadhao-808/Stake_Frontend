import React, { useState } from "react";
import logo from "/src/assets/Hcoin.svg";
import { Link, useNavigate } from "react-router-dom";
import downArrow from "/src/assets/arrow-down-3101.png";
import exit from "/src/assets/exit.png";
import { jwtDecode } from "jwt-decode";
import { decode } from "punycode";
import Swal from "sweetalert2";

const Navbar = ({ setSideshow, sideshow }) => {
	const Token = JSON.parse(localStorage.getItem("Token"));
	let decoded;
	let username;
	let email;
	let role;
	if (Token) {
		decoded = jwtDecode(Token);
		username = decoded.name;
		email = decoded.email;
		role = decoded.role;
	}
	const Navigate = useNavigate();
	const sideManager = (e) => {
		!sideshow ? setSideshow(true) : "";
		e.stopPropagation();
	};
	const [downarrow, setDownarrow] = useState(true);
	return (
		<div
			onClick={() => setSideshow(false)}
			className=" fixed z-3 w-full h-8 sm:h-14 bg-amber-700 flex  justify-between items-center "
		>
			{role == "user" ? (
				<Link to="/">
					<img
						src={logo}
						className=" w-5 sm:w-10 rounded-[50px] ml-3"
						alt="logo"
					/>
				</Link>
			) : (
				<Link to="/admin">
					<img
						src={logo}
						className=" w-5 sm:w-10 rounded-[50px] ml-3"
						alt="logo"
					/>
				</Link>
			)}
			{Token ? (
				<>
					{role == "user" ? (
						<div className="flex items-center justify-around w-40 sm:w-100 sm:w-60  text-white ">
							<Link to="/">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Gallery</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<Link to="/inventory">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Inventory</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<Link to="/trades">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Trades</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<div
								onClick={sideManager}
								className=" border-2 w-6 h-6 rounded-2xl sm:w-45 sm:h-8 sm:rounded-[8px] flex items-center bg-gray-600"
							>
								<div className="border-2 w-6 h-6 rounded-2xl sm:ml-1 flex items-center justify-center slidebar">
									<h1 className="text-amber-300 font-bold">{username[0]}</h1>
								</div>
								<h1 className="hidden sm:block text-[9px] ml-2">{email}</h1>
								<div>
									<img
										onClick={() => setDownarrow((prev) => !prev)}
										className={`hidden sm:block w-3 ml-1.5 transition-all ${!downarrow ? "rotate-180" : ""} `}
										src={downArrow}
										alt=""
									/>
									<div
										onClick={() => {
											(localStorage.removeItem("Token"),
												Swal.fire({
													text: "Logout Successfull !",
													icon: "success",
												}),
												Navigate("/"));
										}}
										className={`hidden border-2 fixed w-30 h-12 bg-black top-13 right-2 transition-all origin-top ${downarrow ? "scale-y-0" : "scale-y-100"} sm:flex justify-center items-center `}
									>
										<img className="w-7" src={exit} alt="" />
										<h1 className="text-[15px]">Logout</h1>
									</div>
								</div>
							</div>
							<div
								className={`fixed z-3  right-[-5%] top-0 border-2 w-50 h-full bg-gray-600 ${!sideshow ? "scale-x-0" : "scale-x-100"} sm:hidden scale-x-0 origin-right transition-all duration-300 slidebar-hover:scale-x-100`}
							>
								<ul className="text-center leading-15">
									<Link to="/">
										<li className="">Gallery</li>
									</Link>
									<Link to="/inventory">
										<li className="">Inventory</li>
									</Link>
									<Link to="/trades">
										<li className="">Trades</li>
									</Link>
									<li
										onClick={() => {
											(localStorage.removeItem("Token"),
												Swal.fire({
													text: "Logout Successfull !",
													icon: "success",
												}),
												Navigate("/"));
										}}
										className=""
									>
										logout
									</li>
								</ul>
							</div>
						</div>
					) : (
						<div className="flex items-center justify-around w-40 sm:w-150 sm:w-60  text-white ">
							<Link to="/admin">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Dashboard</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<Link to="/admin/publish">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Publish</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<Link to="/admin/remove">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Remove</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<Link to="/admin/trades">
								<div className="hidden sm:block cursor-pointer group">
									<h1>Trades</h1>
									<div className="border-2 w-0 transition-all duration-300 group-hover:w-full origin-left scale-0 group-hover:scale-100"></div>
								</div>
							</Link>
							<div
								onClick={sideManager}
								className=" border-2 w-6 h-6 rounded-2xl sm:w-25 sm:h-8 sm:rounded-[8px] flex items-center bg-gray-600"
							>
								<div className=" sm:hidden border-2 w-6 h-6 rounded-2xl sm:ml-1 flex items-center justify-center slidebar">
									<h1 className="text-amber-300 font-bold">{username[0]}</h1>
								</div>
								<h1 className="hidden sm:block text-[19px] ml-2">{username}</h1>
								<div>
									<img
										onClick={() => setDownarrow((prev) => !prev)}
										className={`hidden sm:block w-3 ml-1.5 transition-all ${!downarrow ? "rotate-180" : ""} `}
										src={downArrow}
										alt=""
									/>
									<div
										onClick={() => {
											(localStorage.removeItem("Token"),
												Swal.fire({
													text: "Logout Successfull !",
													icon: "success",
												}),
												Navigate("/"));
										}}
										className={`hidden border-2 fixed w-30 h-12 bg-black top-13 right-2 transition-all origin-top ${downarrow ? "scale-y-0" : "scale-y-100"} sm:flex justify-center items-center `}
									>
										<img className="w-7" src={exit} alt="" />
										<h1 className="text-[15px]">Logout</h1>
									</div>
								</div>
							</div>
							<div
								className={`fixed z-3  right-[-5%] top-0 border-2 w-50 h-full bg-gray-600 ${!sideshow ? "scale-x-0" : "scale-x-100"} sm:hidden scale-x-0 origin-right transition-all duration-300 slidebar-hover:scale-x-100`}
							>
								<ul className="text-center leading-15">
									<Link to="/admin">
										<li className="">Dashboard</li>
									</Link>
									<Link to="/admin/publish">
										<li className="">Publish</li>
									</Link>
									<Link to="/admin/remove">
										<li className="">Remove</li>
									</Link>
									<Link to="/admin/trades">
										<li className="">Trades</li>
									</Link>
									<li
										onClick={() => {
											(localStorage.removeItem("Token"),
												Swal.fire({
													text: "Logout Successfull !",
													icon: "success",
												}),
												Navigate("/"));
										}}
										className=""
									>
										logout
									</li>
								</ul>
							</div>
						</div>
					)}
				</>
			) : (
				<div className="flex items-center justify-around w-40 sm:w-60  text-white ">
					<Link to="/login">
						<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">
							Login
						</div>
					</Link>
					<Link to="/signup">
						<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">
							Signup
						</div>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;

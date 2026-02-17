import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";
import hide from "/src/assets/invisible.png";
import show from "/src/assets/view.png";

const Login = () => {
	const [blur, setBlur] = useState(true);
	const [view, setView] = useState(false);
	const [Login_Data, setLogin_Data] = useState({
		email: "",
		password: "",
	});
	const Navigate = useNavigate();
	const saveit = (e) => {
		setLogin_Data({ ...Login_Data, [e.target.name]: e.target.value });
	};

	const Sendit = async () => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"https://stake-backend-h8ba.vercel.app/user/login",
				Login_Data,
			);
            console.log(response)
			localStorage.setItem("Token", JSON.stringify(response.data.token));
			Swal.fire({
				text: "Login Successfull !",
				icon: "success",
			});
			const decoded = jwtDecode(response.data.token);
			const role = decoded.role;
			role == "user" ? Navigate("/") : Navigate("/admin");
		} catch (error) {
			Swal.fire({
				text: "Login Failed !",
				icon: "error",
			});
		}
	};
	useEffect(() => {
		blur == false ? Navigate("/") : "";
	}, [blur]);
	return (
		<div
			onClick={() => setBlur(false)}
			className="fixed z-4 backdrop-blur-[2px] bg-transparent h-screen w-screen flex justify-center items-center"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className=" h-90 sm:h-120 w-[90%] bg-[#F2F4F7] rounded-[15px] flex flex-col justify-center items-center gap-5"
			>
				<h1 className="text-[#1F2937] text-[18px] sm:text-[24px] font-medium ">
					Login
				</h1>
				<div className="border-1  border-[#E5E7EB] w-[80%]"></div>
				<form
					className="border- h-60 sm:h-80 w-[80%] flex flex-col gap-3 items-center justify-center"
					onSubmit={Sendit}
				>
					<label className="text-[#4B5563] sm:w-[50%] w-[100%] font-bold text-left ">
						E-mail
					</label>
					<input
						className="outline-none  border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 "
						onChange={saveit}
						type="email"
						name="email"
					/>
					<label className="text-[#4B5563] sm:w-[50%] w-[100%] font-bold text-left ">
						Password
					</label>
					<span className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 flex">
						<input
							className="outline-none h-8 sm:h-12 w-[90%]"
							onChange={saveit}
							type={!view ? "password" : "text"}
							name="password"
						/>
						<span
							onClick={() => setView(!view ? true : false)}
							className=" flex items-center justify-center "
						>
							{!view ? (
								<>
									<img className="w-6" src={hide} alt="" />
								</>
							) : (
								<>
									<img className="w-6" src={show} alt="" />
								</>
							)}
						</span>
					</span>
					<input
						className="bg-[#0D6EFD] hover:bg-[#0B5ED7] w-[100%] sm:w-[50%] text-white sm:h-10 h-10 rounded-[10px] mt-6 sm:mt-5 "
						value={"Login"}
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default Login;

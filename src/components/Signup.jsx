import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Signup = () => {
	const [blur, setBlur] = useState(true);
	const [Signup_Data, setSignup_Data] = useState({
		name: "",
		email: "",
		password: "",
		contact: "",
		address: "",
	});

	const saveit = (e) => {
		setSignup_Data({ ...Signup_Data, [e.target.name]: e.target.value });
	};
	const Navigate = useNavigate();

	const Sendit = async () => {
		event.preventDefault();
		try {
			const response = await axios.post(
				"https://stake-backend-h8ba.vercel.app/user/signup",
				Signup_Data,
			);
			console.log("Signup Successfull", response.data);

			Swal.fire({
				text: "Signup Successfull !",
				icon: "success",
			});
			Navigate("/");
		} catch (error) {
			console.log(error);
			Swal.fire({
				text: "Signup Failed !",
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
				className="sm:h-130 h-110 w-[90%] bg-[#F2F4F7] rounded-[15px] flex flex-col justify-center items-center gap-5"
			>
				<h1 className="text-[#1F2937] text-[18px] sm:text-[24px] font-medium ">
					Sign Up
				</h1>
				<div className="border-1 border-[#E5E7EB] w-[80%]"></div>
				<form
					className="boder-3 w-[80%] flex flex-col gap-3 items-center justify-center"
					onSubmit={Sendit}
				>
					<input
						className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 "
						onChange={saveit}
						placeholder="userName"
						type="text"
						name="name"
					/>
					<input
						className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 "
						onChange={saveit}
						placeholder="Email"
						type="text"
						name="email"
					/>
					<input
						className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 "
						onChange={saveit}
						placeholder="Password"
						type="password"
						name="password"
					/>
					<input
						className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 "
						onChange={saveit}
						placeholder="Phone no."
						type="text"
						name="contact"
					/>
					<input
						className=" border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-20 h-15 text-justify"
						onChange={saveit}
						placeholder="Address"
						type="text"
						name="address"
					/>
					<input
						className="bg-[#0D6EFD] hover:bg-[#0B5ED7] w-[100%] sm:w-[50%] text-white sm:h-10 rounded-[10px] h-10 mt-8 sm:mt-4"
						value={"Create Account"}
						type="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export default Signup;

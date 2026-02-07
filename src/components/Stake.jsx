import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Hcoin from "/src/assets/Hcoin.svg";

const Stake = () => {
	const [data, setData] = useState([]);
	const [stakeit, setStakeit] = useState(false);
	const [stakebutton, setStakebutton] = useState(false);
	const token = JSON.parse(localStorage.getItem("Token"));
	const [stakevalue, setStakevalue] = useState({
		stakeInput: "",
	});
	let id;
	if (token) {
		const decoded = jwtDecode(token);
		id = decoded.id;
	}

	const savestake = (e) => {
		setStakevalue({ ...stakevalue, [e.target.name]: e.target.value });
	};

	console.log(stakevalue);
	const getData = async () => {
		const res = await axios.get(`http://localhost:8888/user/getData/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setData(res.data.user);
		// console.log(res.data.user)
	};

	const SendStake = async () => {
		const res = await axios.post(
			`http://localhost:8888/user/stake/${id}`,
			{ stake: Number(stakevalue.stakeInput) },
			{ headers: { Authorization: `Bearer ${token}` } },
		);
		console.log(res);
		getData();
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			<div className="h-17 sm:h-22 bg-black "></div>
			<div className="h-800 sm:h-[500px] lg:h-[700px] bg-[rgb(0,0,0)] ">
				<div className="border- lg:w-[80%] h-full sm:h-150 m-auto flex flex-col items-center justify-around ">
					<div className="border- h-40  w-[99%] grid grid-cols-1 sm:grid-cols-3 gap-10 place-items-center">
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] h-[160px] w-[95%] xl:h-full xl:w-80 rounded-2xl  p-5">
							<div className="flex flex-col gap-4 text-center sm:text-left">
								<p className="text-gray-500">WALLET BLANCE</p>
								<div className="flex gap-2 justify-center sm:justify-start ">
									<p className="text-white text-[20px]">{data.wallet}</p>
									<img src={Hcoin} className="w-5" alt="" />
								</div>
								<p className="text-green-700">0.01% from last minute</p>
							</div>
						</div>
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] h-[160px] w-[95%] xl:h-full xl:w-80 rounded-2xl p-5">
							<div className="flex flex-col gap-4 text-center sm:text-left">
								<p className="text-gray-500">TOTAL STAKED</p>
								<div className="flex gap-2 justify-center sm:justify-start">
									<p className="text-white text-[20px]">{data.stake}</p>
									<img src={Hcoin} className="w-4" alt="" />
								</div>
								<p className="text-green-700">Active</p>
							</div>
						</div>
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] h-[160px] w-[95%] xl:h-full xl:w-80 rounded-2xl p-5">
							<div className="flex flex-col gap-4 text-center sm:text-left">
								<p className="text-gray-500">REWARD RATE</p>
								<div className="flex gap-2 justify-center sm:justify-start">
									<p className="text-white text-[20px]">0.01</p>
									<p className="text-[rgb(245,158,11)] text-[13px] mt-1">
										% /10 mins
									</p>
								</div>
								<p className="text-green-700">Fixed</p>
							</div>
						</div>
					</div>
					<div className="border- h-60 w-[99%] grid sm:grid-cols-2 ">
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] w-[95%] xl:h-85  rounded-2xl  p-8 ">
							<div className="flex flex-col gap-4 text-center sm:text-left">
								<div className="flex  gap-2 justify-center sm:justify-start">
									<p className="text-white text-[24px] ">Stake</p>
									<img src={Hcoin} className="w-6" alt="" />
								</div>
								<p className="text-[rgb(156,163,175)]">Amount to Stake</p>
								<div
									onClick={() => setStakeit(true)}
									onMouseOut={() => setStakeit(false)}
									className={`border-1 ${stakeit == false ? "border-[rgb(231,231,231)]" : "border-[rgb(177,48,246)]"}  text-white flex gap-2 justify-center `}
								>
									<input
										className="  w-[90%] text-[22px] border-none outline-none text-center"
										type="text"
										placeholder=" 500 "
										name="stakeInput"
										value={stakevalue.stakeInput}
										onChange={savestake}
									/>
									<img src={Hcoin} className="w-5 " alt="" />
								</div>
								<div className="text-white hidden sm:flex gap-5 justify-between ">
									<div
										onClick={() => {
											(setStakebutton("25"),
												setStakevalue((25 / 100) * data.wallet));
										}}
										onMouseOut={() => setStakebutton(false)}
										className={`border ${stakebutton == "25" ? "border-[rgb(245,158,11)]" : "border-[rgb(255,255,255)]"} hover:border-[rgb(245,148,11)] w-25 p-2 text-center`}
									>
										25%
									</div>
									<div
										onClick={() => {
											(setStakebutton("50"),
												setStakevalue((50 / 100) * data.wallet));
										}}
										onMouseOut={() => setStakebutton(false)}
										className={`border ${stakebutton == "50" ? "border-[rgb(245,158,11)]" : "border-[rgb(255,255,255)]"} hover:border-[rgb(245,148,11)] w-25 p-2 text-center`}
									>
										50%
									</div>
									<div
										onClick={() => {
											(setStakebutton("75"),
												setStakevalue((75 / 100) * data.wallet));
										}}
										onMouseOut={() => setStakebutton(false)}
										className={`border ${stakebutton == "75" ? "border-[rgb(245,158,11)]" : "border-[rgb(255,255,255)]"} hover:border-[rgb(245,148,11)] w-25 p-2 text-center`}
									>
										75%
									</div>
									<div
										onClick={() => {
											(setStakebutton("MAX"), setStakevalue(data.wallet));
										}}
										onMouseOut={() => setStakebutton(false)}
										className={`border ${stakebutton == "MAX" ? "border-[rgb(245,158,11)]" : "border-[rgb(255,255,255)]"} hover:border-[rgb(245,148,11)]  w-25 p-2 text-center`}
									>
										MAX
									</div>
								</div>
								<div
									onClick={SendStake}
									className="text-white rounded-[6px] mt-3 flex h-12 justify-center items-center gap-2 text-[20px] bg-amber-500 hover:shadow-[0_4px_12px_0px_rgba(217,119,6,0.4)] hover:scale-y-110 duration-200 transition-all"
								>
									<p>+</p>
									<p>Stake Now</p>
								</div>
							</div>
						</div>
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)]  w-[95%] xl:h-full  rounded-2xl  p-8  ">
							<div className="flex flex-col gap-4 text-center sm:text-left">
								<div className="flex  gap-2 justify-center sm:justify-between">
									<p className="text-white text-[20px] ">Active Stake</p>
									<p className="text-[rgb(16,185,129)] bg-[rgba(16,185,129,0.1)] p-1 px-3 ">
										running
									</p>
								</div>
								<div className="border-10 w-45 h-45 flex m-auto flex-col justify-center items-center rounded-[50%] border-[rgb(243,244,246)] border-t-[rgb(255,196,0)] border-r-[rgb(255,196,0)] ">
										<p className="text-white text-[28px]">42:55</p>
										<p className="text-[rgb(156,163,175)] ">until next</p>
									</div>
								<div>
									<div className="flex  gap-2 justify-center sm:justify-between">
										<p className="text-[rgb(156,163,175)] text-[18px] ">
											Amount Staked
										</p>
										<div className="flex gap-2 ">
											<p className="text-white text-[19px] ">{data.stake}</p>
											<img src={Hcoin} className="w-5" alt="" />
										</div>
									</div>
									<div className="flex  gap-2 justify-center mt-3 sm:justify-between">
										<p className="text-[rgb(156,163,175)] text-[18px] ">
											Est. Next Reward
										</p>
										<div className="flex gap-2 ">
											<p className="text-white text-[19px] ">
												{(data.stake / 100) * 10}
											</p>
											<img src={Hcoin} className="w-5" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stake;

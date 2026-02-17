import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Hcoin from '/src/assets/Hcoin.svg'

const Dashboard = () => {
  	const [data, setData] = useState([]);
  	const token = JSON.parse(localStorage.getItem("Token"));

      let id;
      if (token) {
        const decoded = jwtDecode(token);
        id = decoded.id;
      }

	const getUsers = async () => {
		const res = await axios.get("https://stake-backend-h8ba.vercel.app/admin/getusers",{ headers: { Authorization: `Bearer ${token}` } });
		setData(res.data.data);
	};
	useEffect(() => {
		getUsers();
	}, []);
  return (
		<div>
			<div className="h-17 sm:h-22 bg-black w-screen "></div>
      <div className='bg-black h-1000 w-screen  '>
        <div className='p-3'> 
          <p className='text-white text-[16px] sm:text-[24px] ml-6'>User Management</p>
        </div>
        <div className='text-white w-screen'>
          <table className='w-[96%] m-auto mt-10'>
            <thead className='text-[rgb(156,163,175)]'>
              <tr className='border-[rgb(156,163,175)] border-b h-20'>
                <th>USER</th>
                <th>WALLET <br/> BALANCE</th>
                <th>STAKED <br/> AMOUNT</th>
                <th>AVAILABLE <br/> CLAIM</th>
                <th>TOTAL <br/> CLAIM</th>
                <th>LAST <br/> UPDATE</th>
              </tr>
            </thead>
            <tbody>
                {data.map((el) => (
						<tr className="border-[rgb(156,163,175)] border-b h-20" key={el._id}>
							<td className="text-[10px] text-center sm:text-[18px] px-3">{el.name} <br/><p className="text-[rgb(156,163,175)]">{el.email}</p></td>
							<td className="text-[10px] text-center sm:text-[18px] px-2 ">{el.wallet} <img src={Hcoin} className="w-3 inline  " alt="" /> </td>
							<td className="text-[10px] text-center sm:text-[18px] px-1">{el.stake} <img src={Hcoin} className="w-3 inline  " alt="" /> </td>
							<td className="text-[10px] text-center sm:text-[18px] px-3">{el.AvailableClaim} <img src={Hcoin} className="w-3 inline  " alt="" /> </td>
							<td className="text-[10px] text-center sm:text-[18px] px-1">{el.TotalClaimed} <img src={Hcoin} className="w-3 inline  " alt="" /> </td>
							<td className="text-[10px] text-center sm:text-[18px] px-1">{el.lastStakeUpdated}</td>
						</tr>
					))}
            </tbody>
          </table>
        </div>
      </div>
		</div>
	);
}

export default Dashboard

import React from 'react'

const Stake = () => {
  return (
		<div>
			<div className="h-17 sm:h-22 bg-black "></div>
			<div className="h-screen bg-black">
				<div className="border- w-[80%] h-screen m-auto h-[540px] bg-gradient-to-br from-amber-400 via-amber-300 to-orange-200 flex flex-col items-center justify-center">
					<div className="border- h-40  w-[99%] grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,_rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] w-[80%] h-[120px] xl:h-full xl:w-80 rounded-2xl">
							<div>
								<p className="text-gray-500">WALLET BLANCE</p>
								<div>
									<p className="text-white">2300</p>
								</div>
								<p className='text-green-700'>available</p>
							</div>
						</div>
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,_rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] w-[80%] h-[120px] xl:h-full xl:w-80 rounded-2xl">
							<div>
								<p className="text-gray-500">WALLET BLANCE</p>
								<p className="text-white"></p>
								<p className='text-green-700'>available</p>
							</div>
						</div>
						<div className="bg-[rgb(22,22,26)]   shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,_rgba(0,0,0,0.06)_0px_2px_4px_-1px] border-[rgba(245,158,11,0.3)] w-[80%] h-[120px] xl:h-full xl:w-80 rounded-2xl">
							<div>
								<p className="text-gray-500">WALLET BLANCE</p>
								<p className="text-white"> </p>
								<p className='text-green-700'>available</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stake

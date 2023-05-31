"use client";

import Image from 'next/image'
import React from 'react'
import { BiLogOut } from "react-icons/bi"

const User = () => {
	return (
		<div
			className="
		                flex
		                flex-row
		                gap-5
		                bg-gradient-to-b from-[#13012B] to-[#13012B] , bg-[#F8F8F8]
				bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
		                rounded-[25px]
		                py-2
		                px-4
				my-1
	                "
		>
			<Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
			<div
			        className='
				        flex
					flex-row
					justify-between
					items-center
					w-full
				'
			>
				<div>
					<p className='text-xl'>Mugisha Yves</p>
					<p className='text-xs'>@broony189</p>
				</div>
				<BiLogOut />
			</div>
		</div>
	)
}

export default User
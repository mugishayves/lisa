"use client"

import Link from "next/link"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"

const Display = () => {
	const [activeTab, setActiveTab] = useState(0)
	const ThemeDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Theme Customization</p>
				<div className="h-[2px] bg-white w-full my-2" />
				<div>
					<p className="my-4">Choose your theme</p>
					<div className="flex flex-row gap-3 flex-wrap">
						<div className="h-10 w-10 rounded-full bg-inherit border-[#AD00FF] border-[2px] cursor-pointer" />
						<div className="h-10 w-10 rounded-full bg-white border-[#AD00FF] border-[2px] cursor-pointer" />
						<div className="h-10 w-10 rounded-full bg-black border-[#AD00FF] border-[2px] cursor-pointer" />
					</div>
					<p className="my-4 text-xs">Demonstration</p>
					<div className="h-[200px] w-[50%] bg-[white] my-5 rounded-md mx-auto"></div>
				</div>
			</div>
		)
	}
	const FontDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Font Customization</p>
				<div className="h-[2px] bg-white w-full my-2" />
			</div>
		)
	}

	const NotifDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage Your Notifications</p>
				<div className="h-[2px] bg-white w-full my-2" />
			</div>
		)
	}
	const AdDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage the ads you see</p>
				<div className="h-[2px] bg-white w-full my-2" />
			</div>
		)
	}
	const DidDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage your did you knows</p>
				<div className="h-[2px] bg-white w-full my-2" />
			</div>
		)
	}
	const tabs = [ThemeDisplay, FontDisplay, NotifDisplay, AdDisplay, DidDisplay]
	return (
		<div
			className='
					        flex
						flex-row
						gap-2
						h-[80%]
						w-full
					'
		>
			<div className='border-r-[2px] px-4'>
				<div
					className="
                                                                relative
                                                                my-2
                                                        "
				>
					<input type="text" placeholder="Find..." className="w-full bg-inherit border-[#FF00C7] border-[2px] rounded-full p-2 outline-none focus:outline-none pr-12" />
					<BiSearch className="absolute right-4 top-2" size={30} />
				</div>
				<div className="flex flex-col gap-3">
					<button onClick={() => setActiveTab(0)} >Theme</button>
					<button onClick={() => setActiveTab(1)} >Fonts</button>
					<button onClick={() => setActiveTab(2)} >Manage Notifications</button>
					<button onClick={() => setActiveTab(3)} >Manage Ads</button>
					<button onClick={() => setActiveTab(4)} >Manage Did you know</button>
				</div>
			</div>
			<div className='w-[75%]'>
				<div
					className='
						        my-2
							p-2
							border-[2px
							rounded-md
							h-full
							overflow-scroll
						        '
				>
					{tabs[activeTab]()}
				</div>
			</div>
		</div>
	)
}

export default Display
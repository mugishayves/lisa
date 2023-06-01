"use client"

import Link from "next/link"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import "../../../globals.css"

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
				<p className="text-xl">Choose your font settings</p>
				<div
					className="
					        flex
						flex-row
						gap-4
						my-2
					"
				>
					<p>Font</p>
					<select className="bg-inherit w-[90%] border-[2px] rounded-md" id="formSelect">
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
						<option value={"Tilt Neon"} className="bg-inherit w-full">Tilt Neon</option>
					</select>
				</div>
				<div
					className="
					        flex
						flex-row
						gap-4
						my-2
					"
				>
					<p>Font Size</p>
					<input type="number" className="bg-inherit text-left border-[2px] rounded-md" />
				</div>
				<div
					className="
					        flex
						flex-row
						gap-4
						my-2
					"
				>
					<p>Font Weight</p>
					<input type="number" className="bg-inherit text-left border-[2px] rounded-md" />
				</div>
				<div className="text-center my-5">
					<p className="text-3xl">This is the text display of how the text will be</p>
				</div>
			</div>
		)
	}

	const NotifDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage Your Notifications</p>
				<div className="h-[2px] bg-white w-full my-2" />
				<p>Choose the notifications</p>
				<div className="flex flex-row flex-wrap">
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Amigo Suggestions</div>
				</div>
			</div>
		)
	}
	const AdDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage the ads you see</p>
				<div className="h-[2px] bg-white w-full my-2" />
				<p>Choose your the ads you may see</p>
				<div className="flex flex-row flex-wrap">
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Cars</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Bars</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Jobs</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Hospital</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Shows</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Insurance</div>
				</div>
			</div>
		)
	}
	const DidDisplay = () => {
		return (
			<div>
				<p className="text-2xl">Manage your did you knows</p>
				<div className="h-[2px] bg-white w-full my-2" />
				<p>Choose some topics you would like to get some did you know from</p>
				<div className="flex flex-row flex-wrap">
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Life</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Health</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Mentality</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Society</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Foods</div>
					<div className="bg-[#AD00FF] p-2 m-2 rounded-md">Relationship</div>
				</div>
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
import Image from "next/image"
import Link from "next/link"
import { BiSearch } from "react-icons/bi"
import Display from "./components/Display"

const Settings = () => {
	return (
		<div
			className="
				p-4 
			"
		>
			<div
				className="
			                bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
			                rounded-md  
					h-[92vh] 
					p-2
			        "
			>
				<p className='text-2xl'>Settings</p>
				<div className="h-1 w-full bg-[#AD00FF] my-4" />
				<Display />
			</div>
		</div>
	)
}

export default Settings
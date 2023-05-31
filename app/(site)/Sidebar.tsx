import Image from "next/image"
import User from "./components/User"
import Link from "next/link"
import NavLink from "./components/NavLink"
import { BsGithub } from "react-icons/bs"

interface SidebarProps {
	children: React.ReactNode
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
	return (
		<div
			className="
			        flex
				flex-row
				gap-5
				text-white
			"
		>
			<div
				className="
			                flex
				        flex-col
				        w-[22vw]
					p-4
			        "
			>
				<h2
					className="
				                mt-1 
				                text-center 
					        text-[2em]
				                font-bold 
				                tracking-tight 
					        text-white
				        "
				>
					Lisa
				</h2>
				<User />
				<p>Menu</p>
				<div
					className="
		                                flex
		                                flex-col
		                                bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
		                                rounded-[25px]
		                                py-2
		                                px-4
						my-1
	                                "
				>
					<NavLink  label="Home" href="/"   />
					<NavLink  label="Messages" href="/messages" />
					<NavLink  label="Saved Posts" href="/savedposts" />
					<NavLink  label="Privacy" href="/privacy" />
					<NavLink  label="Settings" href="/settings" last/>
				</div>
				<p>Advertisement</p>
				<div>
                                        <Image alt="ad" src={"/images/ad.png"} width={500} height={200} className="w-[100%]" />
				</div>
			</div>
			<div className="w-[77vw]">
				{children}
			</div>
		</div>
	)
}

export default Sidebar
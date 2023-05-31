"use client"

import Link from "next/link"
import { BiSearch } from "react-icons/bi"

const Display = () => {
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
					<Link href="/settings/#theme">Theme</Link>
					<Link href="/settings/fonts">Fonts</Link>
					<Link href="/settings/">Manage Notifications</Link>
					<Link href="/settings">Manage Ads</Link>
					<Link href="/settings">Manage Did you know</Link>
				</div>
			</div>
			<div className='w-[75%]'>
				<p>Personal Information</p>
				<div
					className='
						        my-2
							p-2
							border-[2px]
							rounded-md
							h-full
							overflow-scroll
						        '
				>
				</div>
			</div>
		</div>
	)
}

export default Display
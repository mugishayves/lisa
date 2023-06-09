"use client"
import Link from 'next/link'
import React from 'react'
import clsx from "clsx"
import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
interface NavLinkProps{
	label:string
	href:string
	last?:boolean
}

const NavLink:React.FC<NavLinkProps> = ({label,href,last}) => {
	return (
		<Link 
		        href={href}
			className={clsx (`
			                hover:bg-[#AD00FF]
					rounded-t-[10px]
				        py-1	
				        border-b-[2px]
					flex
					flex-row
					gap-10
					px-4
					`,
					last && 'border-none'
					)}
		>
			<p>{label}</p>
		</Link>
	)
}

export default NavLink
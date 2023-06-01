import Link from 'next/link'
import React from 'react'
import Posts from './components/Posts'


const SavedPosts = () => {
	return (
		<div
			className="
				p-4 
				overflow-y-hidden
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
				<p className='text-2xl'>Saved Posts</p>
				<div className="h-1 w-full bg-[#AD00FF] my-4" />
				<div
					className="
				        flex
					flex-row
					justify-between
				"
				>
					<div
						className="
					        flex
						flex-row
						gap-3
					"
					>
						<Link href={""} className="active:border-b[2px]">Posts</Link>
						<Link href={""}>Twirls</Link>
					</div>
				</div>
				<div
					className="
				        w-full
					h-full
					overflow-y-scroll
				"
				>
					<Posts />
				</div>
			</div>
		</div>
	)
}

export default SavedPosts
import Link from 'next/link'
import React from 'react'
import SavedPost from './components/SavedPost'
import PostsPart from '../components/PostsPart'

const SavedPosts = () => {
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
				<p className='text-2xl'>Saved Posts</p>
				<div className="h-1 w-full bg-[#AD00FF] my-4" />
				<div
			        className="
				        w-full
					h-full
					overflow-y-scroll
				"
			>
				<PostsPart />
			</div>
			</div>
		</div>
	)
}

export default SavedPosts
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface SavedPostProps {
	href: string;
	post: string
}

const SavedPost:React.FC<SavedPostProps> = ({href,post}) => {
	return (
		<Link href={href} className='my-2 mx-4'>
			<Image alt='href' src={post} width={50} height={50} className='w-[300px] rounded-md' />
		</Link>
	)
}

export default SavedPost
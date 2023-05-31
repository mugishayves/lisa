import Link from "next/link"
import Status from "./Status"
import { BsPlusCircle } from "react-icons/bs"
import Posts from "./Posts"

const PostsPart = () => {
	return (
		<div
			className="
			        p-4
				h-[100vh]
				overflow-scroll
			"
		>
			<div
				className="
				        flex
					flex-row
					w-full
					gap-2
					overflow-x-scroll
					h-[30vh]
					py-1
					my-2
				"
			>
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
				<Status />
			</div>
			<div className="w-full h-[2px] bg-white my-6" />
			<div
				className="
					flex
					flex-row
					justify-between
					my-1
				"
			>
				<div>
				</div>
				<div
				        className="
					        flex
						flex-row
						items-center
						gap-2
					">
					<BsPlusCircle />
					<p>Create new post</p>
				</div>
			</div>
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
				<div
				        className="
					        flex
						flex-row
						gap-3
						text-[#6C6C6C]
					">
					<Link href={""}>All</Link>
					<Link href={""}>Popular</Link>
					<Link href={""}>Newest</Link>
					<Link href={""}>Following</Link>
				</div>
			</div>
			<Posts />
		</div>
	)
}

export default PostsPart
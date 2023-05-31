import Message from "./Message"


const MessagesPart = () => {
	return (
		<div
			className="
			        bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
			        rounded-md   
			"
		>
			<div
			        className="
				        w-full
					bg-[#AD00FF]
					rounded-t-[20px]
					p-4
				"
			>
				<p>Messages</p>
			</div>
			<div
			        className="
				        p-4
					h-[85vh]
					overflow-y-scroll
				"
			>
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
				<Message />
			</div>
		</div>
	)
}

export default MessagesPart
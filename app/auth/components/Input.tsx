"use client";

interface InputProps {
	type: string
	placeholder: string
	styles: string
}

const Input: React.FC<InputProps> = ({ type, placeholder, styles }) => {
	return (
			<input
				className="
			        bg-inherit 
				w-full
				border-b-2 
				border-[#D2D2D2] 
				text-white 
				py-2 
				px-4 
				outline-none 
				focus:outline-none
				my-2
			"
				placeholder={placeholder}
				type={type}
			/>
	)
}

export default Input
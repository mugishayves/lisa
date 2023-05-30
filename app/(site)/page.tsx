import AuthForm from "./components/AuthForm"

const Home = () => {
	return (
		<div
			className="
	                        flex
				flex-col
				justify-center
				items-center
				h-full
				bg-[#0d0d0d]
	                "
		>
			<h2
				className="
				        mt-6 
				        text-center 
					text-3xl
				        font-bold 
				        tracking-tight 
					text-white
				"
			>Lisa</h2>
			<AuthForm />
		</div>
	)
}

export default Home
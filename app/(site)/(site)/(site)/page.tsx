import DidUKnow from "./components/DidUKnow"
import PostsPart from "../../components/PostsPart"
import Suggestions from "./components/Suggestions"

const Home = () => {
	return (
		<div
		        className="
			        flex
				flex-row
				gap-2
				overflow-y-hidden
			"
		>
			<div
			        className="
				        w-[70%]
					h-full
					overflow-y-scroll
				"
			>
				<PostsPart />
			</div>
			<div 
			        className="
				        w-[30%]
					px-4
					py-2
				"
			>
				<DidUKnow />
				<Suggestions />
			</div>
		</div>
	)
}

export default Home
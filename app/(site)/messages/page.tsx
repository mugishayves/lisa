import React from 'react'
import MessagesPart from './components/MessagesPart'
import OnlinesChats from './components/OnlinesChats'

const Messages = () => {
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
					overflow-y-hidden
                                        p-4
				"
                        >
                                <MessagesPart />
                        </div>
                        <div
                                className="
				        w-[30%]
					px-4
					py-2
				"
                        >
                                <OnlinesChats />
                        </div>
                </div>
        )
}

export default Messages
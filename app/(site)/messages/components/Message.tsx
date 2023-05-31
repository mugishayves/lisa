import Image from "next/image"

const Message = () => {
        return (
                <div
                        className="
                                flex
                                flex-row
                                items-center
                                justify-between
                                my-4
                        "
                >
                        <div
                                className="
                                        flex
                                        flex-row
                                        gap-4
                                "
                        >
                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                <div>
                                        <p className='text-xl'>Mugisha Yves</p>
                                        <p className='text-xs'>@broony189</p>
                                </div>
                        </div>
                        <p>11:00</p>
                </div>
        )
}

export default Message
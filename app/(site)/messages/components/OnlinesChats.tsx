import Image from "next/image"
import { BiSearch } from "react-icons/bi"
import { BsPlusCircleFill, BsSearch, BsSearchHeart } from "react-icons/bs"

const OnlinesChats = () => {
        return (
                <div
                        className='
                        bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
                        rounded-md
                        p-2
                '
                >
                        <p className="my-2">Amigos</p>
                        <div
                                className="
                                        relative
                                        my-2
                                "
                        >
                                <input type="text" placeholder="Find..." className="w-full bg-inherit border-[#FF00C7] border-[2px] rounded-full p-2 outline-none focus:outline-none pr-12" />
                                <BiSearch className="absolute right-4 top-2" size={30} />
                        </div>
                        <div>
                                <div
                                        className="
                                                flex
                                                flex-row
                                                justify-between
                                                items-center
                                                my-2
                                        "
                                >
                                        <p>Around</p>
                                        <p className="text-xs underline">See all</p>
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                        </div>
                        <div>
                                <div
                                        className="
                                                flex
                                                flex-row
                                                justify-between
                                                items-center
                                                my-2
                                        "
                                >
                                        <p>Others</p>
                                        <p className="text-xs underline">See all</p>
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                        </div>
                        <div>
                                <div
                                        className="
                                                flex
                                                flex-row
                                                justify-between
                                                items-center
                                                my-2
                                        "
                                >
                                        <p>Clubs</p>
                                        <p className="text-xs underline">See all</p>
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                                <div
                                        className='
                                        flex
                                        flex-row
                                        justify-between
                                        items-center
                                        my-1
                                '
                                >
                                        <div
                                                className='
                                                flex
                                                flex-row
                                                gap-4
                                        '
                                        >
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src="/images/placeholder.jpg" />
                                                <div>
                                                        <p className='text-xl'>Mugisha Yves</p>
                                                        <p className='text-xs'>@broony189</p>
                                                </div>
                                        </div>
                                        <BsPlusCircleFill />
                                </div>
                        </div>
                </div>
        )
}

export default OnlinesChats
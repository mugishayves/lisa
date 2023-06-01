import Image from 'next/image'
import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import "../../../../globals.css"
const Suggestions = () => {
        return (
                <div
                        className='
                                bg-gradient-to-b from-[#0F0021] to-[#0F0021] , bg-[#F8F8F8]
                                rounded-[20px]
                                border-[#FF00C7]
				border-[2px]
                                p-3
                        '
                >
                        <p className="gradient_texts">Notifications</p>
                        <div>
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
                                        <BsPlusCircleFill  fill="#FF00C7"/>
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
                                        <BsPlusCircleFill  fill={"#FF00C7"}/>
                                </div>
                        </div>
                        <p className="gradient_texts">Suggestions</p>
                        <div>
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
                                        <BsPlusCircleFill  fill="#FF00C7"/>
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
                                        <BsPlusCircleFill  fill="#FF00C7"/>
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
                                        <BsPlusCircleFill  fill="#FF00C7"/>
                                </div>
                        </div>
                </div>
        )
}

export default Suggestions
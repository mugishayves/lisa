import Image from 'next/image'
import React from 'react'

const DidUKnow = () => {
        return (
                <div
                        className='
                                bg-[]
                        '
                >
                        <p>Did You Know?</p>
                        <Image alt="diduknow" width={500} height={500} src="/images/diduknow.png" className="w-full" />
                        <p className='text-xs mb-2'>Social influence describes how our thoughts, feelings, and behaviors ...</p>
                </div>
        )
}

export default DidUKnow
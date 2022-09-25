

import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
            <div>
                <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                    icon
                </div>
                <h3 className='text-xl font-bold py-4'>headling</h3>
                <p>
                    text
                </p>
            </div>
        </div>
    )
}

export default Card
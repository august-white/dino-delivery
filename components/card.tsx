import React from 'react'
interface CardProps {
    src: string;
    text: string;
}
const Card = ({src, text}: CardProps) => {
    return (
        <div className='border-2 border-red-500 rounded-md p-6 bg-[#333333] flex-col'>
            <img className='h-2/3 border-2' src={src} alt={src}/>
            <div className='h-1/3 border-2'>
                {text}
            </div>
        </div>
    )
}

export default Card
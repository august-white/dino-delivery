import React from 'react'

interface QuoteProps {
    person: any;
    title: any;
    quote: any;
}

const Quote = ({person, title, quote}: QuoteProps) => {
  return (
    <div className='relative py-6 px-2'>
        <h3 className='underline'>
            {person}
        </h3>
        <h4>
            {title}
        </h4>
        <h2 className='text-red-500 font-bold text-xl py-3 px-4'>
            "{quote}""
        </h2>
    </div>
  )
}

export default Quote
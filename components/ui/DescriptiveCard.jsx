import Image from 'next/image'
import React from 'react'

const DescriptiveCard = ({contentTitle, description, image}) => {

  return (
    <div className=' bg-slate-200 flex flex-col md:flex-row gap-4 rounded-xl p-6 '>
        <div className=' flex-none'>
            <Image src={image} width={300} height={300} alt='object' className=' rounded-xl' />
        </div>

        <div>
            <h3 className='text-lg font-semibold'>
                {contentTitle}
            </h3>
            <p>
                {description}
            </p>
        </div>

    </div>
  )
}

export default DescriptiveCard
import Image from 'next/image'
import React from 'react'

const CutCard = () => {
    const handleClick = () => {
         console.log("card clicked")
    }
  return (
    <button  onClick={handleClick} type='button' className=' border border-slate-50 hover:shadow-lg hover:-translate-y-1 delay-150 duration-300 hover:scale-105 transition ease-in-out rounded-xl p-6 flex flex-col gap-4'>
        <div>
            <Image src='/Images/image0_0.jpg' alt='product' width={300}  height={300} className=' rounded-xl'/>
        </div>

        <div className=''>
            <h2 className=' font-semibold text-lg'>Product Title</h2>
            <h3 className=' font-medium text-2xl' >R 1000</h3>
        </div>
    </button>
  )
}

export default CutCard
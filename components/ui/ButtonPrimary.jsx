import React from 'react'

export const ButtonPrimary = ({title, icon}) => {
  return (
    <button type='button' className=' bg-slate-950 rounded-full border-none text-slate-50 px-4 py-2 hover:shadow-xl hover:scale-105 hover:translate-y-1 ease-in-out duration-150 transition'>
        {icon ? <div className='flex gap-2 items-center'><span>{icon}</span><span>{title}</span></div> : <span>{title}</span> }    
    </button>
  )
}

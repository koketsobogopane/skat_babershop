import Link from 'next/link';
import React from 'react';
import { FaScissors } from "react-icons/fa6";
import { FaLocationArrow } from 'react-icons/fa6';
import { FaPiggyBank } from 'react-icons/fa6';

const DUMMYDATA = [{
  location: 'Services',
  description: 'Check out all the services we offer',
  icon: <FaScissors size={50}/>
},
{
  location: 'Location',
  description: 'Get our direction here.',
  
  icon: <FaLocationArrow size={50}/>
},
{
  location: 'Products',
  description: 'Check out our self care Products',
  icon: <FaPiggyBank size={50}/>
}
]
export default function QuickNav() {
  return (
    <div className="flex flex-col items-center mt-10 ">
        <h2 className=' font-bold text-3xl text-center md:text-left '>Pick what you want and lets go!</h2>
        <p>Quick travel to what we offer</p>
        <div className=' flex md:flex-row flex-col items-center content-center gap-6 pt-4 pb-4'>
        {DUMMYDATA.map(
          (element,i)=> {
            return (
              <QuickNavCard
                location= {element.location}
                description = { element.description}
                icon = {element.icon}
                key={element.location}
                />
            )
          }
        )}
        </div>
        {/* quick nav cards */}
        </div>
  );
}
const QuickNavCard = (props) => {
  
  const { location, description, icon } = props
  return (
    <Link href={'/construction'}>
      <div className=' flex flex-col items-center p-4 border-2 rounded-xl shadow-lg '>
        {icon}
      <h3>{location}</h3>
      <p>{description}</p>
    </div>
    </Link>
    
  )
}
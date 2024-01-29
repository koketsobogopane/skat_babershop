import React from 'react';

const DUMMYDATA = [{
  location: 'Products',
  description: 'Check out our self care Products'
},
{
  location: 'Products',
  description: 'Check out our self care Products'
},
{
  location: 'Products',
  description: 'Check out our self care Products'
}
]
export default function QuickNav() {
  return (
    <div className="flex flex-col items-center mt-10">
        <h2 className=' font-bold text-3xl '>Pick what you want and lets go!</h2>
        <p>Quick travel to what we offer</p>
        <div className=' flex items-center content-center gap-6 pt-4 pb-4'>
        {DUMMYDATA.map(
          (element)=> {
            return (
              <QuickNavCard
                location= {element.location}
                description = { element.description}
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

  const { location, description } = props
  return (
    <div className=' flex flex-col items-center p-4 border-2 rounded-xl shadow-lg '>
      <h3>{location}</h3>
      <p>{description}</p>
    </div>
  )
}
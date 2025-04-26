
      import React from 'react'
import EventCard from '../Profile/EventCard';


const Offers = () => {
  return (
    <div className="p-8 bg-black-50 min-h-screen">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">Current Offers 🎉</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <EventCard />
      </div>
    </div>
  )
}

export default Offers;
  
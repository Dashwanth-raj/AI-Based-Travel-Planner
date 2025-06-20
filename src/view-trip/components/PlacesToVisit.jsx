import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl'>Places to Visit</h2>
        <div>
            {/* Add a conditional check here */}
            {Array.isArray(trip.tripData?.itinerary) && trip.tripData.itinerary.map((item,index)=>(
                <React.Fragment key={`day-${index}`}>
                <div className='mt-5'>
                    <h2 className='font-bold text-lg'>{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                    {/* Add another conditional check for item.plan */}
                    {Array.isArray(item.plan) && item.plan.map((place, placeIndex)=> (
                        <div key={`place-${placeIndex}`} className='my-2'>
                            <h2 className='font-medium text-sm text-orange-600'>{place.time}</h2>
                            <PlaceCardItem place={place}/>
                        </div>
                    ))}
                    </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit
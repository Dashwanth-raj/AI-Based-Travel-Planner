import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({ trip }) {
  const [photoUrl, setPhotoUrl] = useState();

  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip])

  const GetPlacePhoto = async () => {
    try {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        };
        const resp = await GetPlaceDetails(data);

        const photos = resp.data?.places?.[0]?.photos;
        if (photos && photos.length > 0) {
            const photoName = photos[Math.min(3, photos.length - 1)].name; 
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
            setPhotoUrl(PhotoUrl);
        }
    } catch (error) {
        console.error("Failed to get place photo:", error);
        // Optionally set a fallback image or state here
    }
  };

  return (
    <Link to={`/view-trip/${trip?.id}`}>
      <div className='hover:scale-105 transition-all'>
        <img src={photoUrl ? photoUrl : '/placeholder.jpg'} alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
          <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
          <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} budget. </h2>
        </div>
      </div>
    </Link >
  )
}

export default UserTripCardItem
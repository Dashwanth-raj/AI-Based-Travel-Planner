import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'

function InfoSection({ trip }) {

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
        <div>
            <img src={photoUrl?photoUrl:'/placeholder.jpg'} alt="img" className='h-[340px] w-full object-cover rounded-xl' />
            <div>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md '>📅{trip.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>💰{trip.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md'>👥No. of traveler/s: {trip.userSelection?.traveler}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
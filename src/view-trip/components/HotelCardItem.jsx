import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        hotel&&GetPlacePhoto();
    }, [hotel])

    const GetPlacePhoto = async () => {
        try {
            const data = {
                textQuery: hotel?.name
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
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + "," + hotel?.address} target='_blank'>

            <div className='hover:scale-110 transition-all cursor-pointer mt-5 mb-8'>
                <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='rounded-xl h-[180px] w-full object-cover' />
                <div className='my-2'>
                    <h2 className='font-medium'>{hotel?.name}</h2>
                    <h2 className='text-xs text-gray-500'>📍{hotel?.address}</h2>
                    <h2 className='text-sm'>💰{hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>

                </div>
            </div></Link>
    )
}

export default HotelCardItem
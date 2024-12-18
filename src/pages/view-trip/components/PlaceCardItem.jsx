/* eslint-disable react/prop-types */
// import React from 'react'

import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const PlaceCardItem = ({ place }) => {
  const [photoUrl, setphotoUrl] = useState();

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName,
    };
    const result = await GetPlaceDetails(data).then((res) => {
      console.log(res.data.place[0].photos[3].name);
      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        res.data.place[0].photos[3].name
      );
      setphotoUrl(PhotoUrl);
    });
  };
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + place?.placeName}
      target="_blank"
    >
      <div className="border rounded-xl p-5 mt-2 flex gap-5 hover:scale-105 transition-all duration-300">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover "
          alt=""
        />
        <div className="">
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
          <div className="flex justify-between items-center">
            <h2 className="mt-2">⏱️{place.timeToTravel}</h2>
            <Button className="text-white" size="sm">
              <FaMapLocationDot />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaceCardItem;

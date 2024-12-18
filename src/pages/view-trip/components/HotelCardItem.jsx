/* eslint-disable react/prop-types */
import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HotelCardItem = ({ hotel }) => {
  const [photoUrl, setphotoUrl] = useState("");

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
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
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div className="hover:scale-110 transition-all duration-300 cursor-pointer bg-gray-100 ">
        <img
          src={photoUrl ? photoUrl : "/placeholder.jpg"}
          className="rounded-xl h-[180px] w-full object-cover"
          alt=""
        />
        <div className="my-2 flex flex-col gap-2 p-2">
          <h2>{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm font-semibold">💰 {hotel?.price}</h2>
          <h2 className="text-sm font-semibold">⭐ {hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCardItem;

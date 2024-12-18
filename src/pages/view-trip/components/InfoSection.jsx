/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
// import React from "react";
import { IoIosSend } from "react-icons/io";

const InfoSection = ({ trip }) => {
  const [photoUrl, setphotoUrl] = useState();
  useEffect(() => {
    trip && GetPlacePhoto();
  }, [trip]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: trip?.userSelection?.location,
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
    <div>
      <img
        src={photoUrl ? photoUrl : "/placeholder.jpg"}
        className="h-[300px] w-full object-cover rounded-xl"
        alt=""
      />
      <div className="flex items-center justify-between">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 rounded-full text-gray-500 text-sm bg-gray-200  md:text-md">
              📅 {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 rounded-full text-gray-500 text-sm bg-gray-200  md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 rounded-full text-gray-500 text-sm bg-gray-200  md:text-md">
              🧑‍🤝‍🧑 No. of Traveller : {trip?.userSelection?.traveller}
            </h2>
          </div>
        </div>
        <Button>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;

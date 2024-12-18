/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// import React from 'react'{}

import PlaceCardItem from "./PlaceCardItem";

const PlacesToVisit = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-lg mt-5">Places To Visit</h2>
      <div className="">
        {trip?.tripData?.itinerary.map((item, index) => (
          <div className="">
            <h2 className="font-semibold text-lg"> Day {item.day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.plan.map((place, index) => (
                <div className="">
                  <h2 className="font-medium text-sm text-rose-600">
                    {place.time}
                  </h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;

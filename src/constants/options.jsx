export const selectTravelList = [
  {
    id: 1,
    title: "Solo Trip",
    desc: "Perfect for solo travelers looking for adventure and self-discovery.",
    icon: "🧳",
    people: "1 Person",
  },
  {
    id: 2,
    title: "Couple Trip",
    desc: "Ideal for couples seeking a romantic getaway.",
    icon: "💑",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family Trip",
    desc: "Great for families wanting to spend quality time together.",
    icon: "👨‍👩‍👧‍👦",
    people: "3-5 People",
  },
  {
    id: 4,
    title: "Friends Trip",
    desc: "Best for groups of friends or colleagues looking for fun and bonding.",
    icon: "👥",
    people: "5-10 People",
  },
];

export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Affordable travel options for budget-conscious travelers.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balanced budget with comfort and quality in mind.",
    icon: "💳",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Top-tier travel experiences for those who prefer to indulge.",
    icon: "💰",
  },
];

// export const AI_PROMPT =
//   "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing,rating, Time  travel each of the location for {totalDays} days with each day plan with best timings to visit in JSON format.";

export const AI_PROMPT =
  "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveller} with a {budget} budget, give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Rating, Time, Time travel for each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";

import { db } from "@/services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

const ViewTrip = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState([]);
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  //   Used to get trip info from firebase
  const GetTripData = async () => {
    const docRef = doc(db, "AiTrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document : ", docSnap.data());
      setTrip(docSnap.data());
    } else {
      toast("No Trip Found");
    }
  };
  return (
    <div className="p-10 sm:px-20 md:px-44 xl:px-56">
      {/* Info Section */}
      <InfoSection trip={trip} />
      {/* Recommendation Hotels */}
      <Hotels trip={trip} />
      {/* Daily plans */}
      <PlacesToVisit trip={trip} />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ViewTrip;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  selectBudgetOptions,
  selectTravelList,
} from "@/constants/options";
import { chatSession } from "@/services/AIModel";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }
    if (
      (formData?.noOfDays > 5 && !formData?.location) ||
      !formData?.budget ||
      !formData?.traveller
    ) {
      toast("Please Fill All Details");

      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveller}", formData?.traveller)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    console.log(FINAL_PROMPT);
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();
    await setDoc(doc(db, "AiTrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate("/view-trip/" + docId);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${tokenInfo?.access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setOpenDialog(false);
        onGenerateTrip();
      });
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56  px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🏝️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-9">
        <div className="">
          <h2 className="text-xl my-3 font-semibold">
            What is destination of choice?
          </h2>
          {/* <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (e) => {
                setPlace(e);
                handleInputChange("location", e);
              },
            }}
          /> */}
          <Input
            type="text"
            placeholder="Enter the city names"
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </div>
        <div className="">
          <h2 className="text-xl my-3 font-semibold">
            How many days are you planning your trip
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
        <div className="">
          <h2 className="text-xl my-3 font-semibold"> What is Your Budget?</h2>
          {/* The budget is exclusively allocated for activities and dining
          purposes. */}
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleInputChange("budget", item.title)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg *:
                  ${formData?.budget == item.title && "shadow-lg border-black"}
                  `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="text-xl my-3 font-semibold">
            Who do you plan on traveling with on your next adventure?
          </h2>
          {/* The budget is exclusively allocated for activities and dining
          purposes. */}
          <div className="grid grid-cols-3 gap-5 mt-5">
            {selectTravelList.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleInputChange("traveller", item.people)}
                  className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg *:
                  ${
                    formData?.traveller == item.people &&
                    "shadow-lg border-black"
                  }
                  `}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button onClick={onGenerateTrip} disabled={loading}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="" />
              <h2 className="font-bold text-lg mt-7">Sign In with Google</h2>
              <p>Sign in to the app with Google Authentication securely</p>
              <Button
                className="w-full mt-5 flex gap-4 items-center font-semibold"
                onClick={login}
              >
                <>
                  <FcGoogle className="h-7 w-7" />
                  Sign In with Google
                </>
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;

import { Button } from "../ui/button";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5 w-full">
      <img src="/logo.svg" alt="" />
      {user ? (
        <div className="flex gap-5 items-center">
          <Button variant="outline" className="rounded-full">
            My Trips
          </Button>
          <img
            src={user?.picture}
            className="h-[35px] w-[35px] rounded-full"
            alt=""
          />
        </div>
      ) : (
        <Button>Sign Up</Button>
      )}
    </div>
  );
};

export default Header;

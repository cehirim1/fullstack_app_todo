import React from "react";
import Navbutton from "./Navbutton";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useSelector, useDispatch } from "react-redux";
import { resetToken } from "@/store/slice/userSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const handleSignout = () => {
    dispatch(resetToken());
    toast.success("Signed out successfully");
  };

  return (
    <nav className="border-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Navbutton />
        </span>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          {token ? (
            <Link to="/login" onClick={handleSignout}>
              <Button>Signout</Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

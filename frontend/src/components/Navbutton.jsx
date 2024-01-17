import React from 'react'
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { LuMoonStar } from "react-icons/lu";
import { makeItToDark, makeItToLight } from "@/store/slice/systemSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbutton = () => {
    const dispatch = useDispatch();

    const theme = useSelector((state) => state.system.mode);
   
  
    useEffect(() => {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);
    return (
      <div>
        <Button className=""
          onClick={() => {
            if (theme === "dark") {
              dispatch(makeItToLight());
            } else {
              dispatch(makeItToDark());
            }
          }}
          variant="default"
        >
          <LuMoonStar className="w-8 h-8" />
        </Button>
      </div>
    );
}

export default Navbutton

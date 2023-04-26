import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { TiInfoLarge } from "react-icons/ti";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import MenuItem from "./MenuItem";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div
        className="flex justify-between mx-2
    max-w-4xl sm:mx-auto item-center py-6 backdrop-blur
    "
      >
        <div className="flex">
          <MenuItem title="Home" address="/" Icon={AiFillHome} />
          <MenuItem title="About" address="/about" Icon={TiInfoLarge} />
        </div>

        <div className="flex items-center space-x-5">
          <DarkMode />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg ">
                Ocean
              </span>
              <span className="text-xl hidden sm:inline font-semibold ">
                Of Movies
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

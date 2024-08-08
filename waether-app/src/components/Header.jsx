import React from "react";
import { IoSettings } from "react-icons/io5";
import WeatherLogo from "../assets/weatherLogo.png";
function Header() {
  return (
    <header className="bg-blue-500">
      <nav className="flex justify-between shadow-md py-2">
        <div
          name="logo"
          className="text-white flex items-center pl-2 cursor-pointer"
        >
          <img className="w-14" src={WeatherLogo} alt="weather-logo" /> Weather
          Spike
        </div>
        <div name="settings" className="pr-2 pt-2 cursor-pointer">
          <IoSettings className="text-white text-xl" />
        </div>
      </nav>
      {/* <div className="bg-blue-500 text-center text-xs p-1 text-white">
        Note : make sure your spelling of a city are correct
      </div> */}
    </header>
  );
}

export default Header;

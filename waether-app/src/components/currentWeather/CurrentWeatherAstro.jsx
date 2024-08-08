import React, { useState } from "react";
import { useSelector } from "react-redux";
import { WiMoonrise } from "react-icons/wi";
import { GiMoon } from "react-icons/gi";
import { BsFillSunriseFill } from "react-icons/bs";
import { BsSunsetFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const CurrentWeatherAstro = () => {
  const WEATHER_DATA = useSelector((store) => store.currentWeather);
  const [astroDisplay, setAstroDisplay] = useState(true);
  function astroDownArrowHandler() {
    setAstroDisplay(!astroDisplay);
  }
  return (
    <div className="mx-4">
      <div
        name="location and astro section"
        className="bg-white bg-opacity-15 max-w-md  mt-4 mx-auto  text-white  rounded-xl p-3 lg:max-w-xl"
      >
        <div className="text-xs text-red-600">
          Searched for : {WEATHER_DATA.location.name} ,
          {WEATHER_DATA.location.region} , {WEATHER_DATA.location.country}
        </div>
        <hr className="my-2" />
        <h3 className="text-xs font-bold flex items-center">
          Current Day Astro({WEATHER_DATA.forecast.forecastday[0].date})
          {astroDisplay ? (
            <IoIosArrowDown
              className="ml-2 text-lg hover:rotate-180 cursor-pointer"
              onClick={astroDownArrowHandler}
            />
          ) : (
            <IoIosArrowUp
              className="ml-2 text-lg hover:rotate-180 cursor-pointer"
              onClick={astroDownArrowHandler}
            />
          )}
        </h3>
        {!astroDisplay ? (
          ""
        ) : (
          <div className="bg-black bg-opacity-20 text-white rounded-xl  py-2 mt-2">
            {" "}
            <div className="flex justify-between items-center px-2 mt-5 text-sm">
              <span className="flex items-center">
                Moon Rise <WiMoonrise className="text-3xl text-blue-700" />
              </span>
              <span>{WEATHER_DATA.forecast.forecastday[0].astro.moonrise}</span>
            </div>
            <div className="flex justify-between items-center px-2 text-sm">
              <span className="flex items-center">
                Moon Set
                <GiMoon className="text-xl ml-3 text-blue-700" />
              </span>
              <span>{WEATHER_DATA.forecast.forecastday[0].astro.moonset}</span>
            </div>
            <div className="flex justify-between items-center px-2 text-sm mt-1">
              <span className="flex items-center">
                Sun Rise
                <BsFillSunriseFill className="text-xl ml-4 text-yellow-500" />
              </span>
              <span>{WEATHER_DATA.forecast.forecastday[0].astro.sunrise}</span>
            </div>
            <div className="flex justify-between items-center px-2 text-sm mt-1">
              <span className="flex items-center">
                Sun Set
                <BsSunsetFill className="text-xl ml-5 text-yellow-500" />
              </span>
              <span>{WEATHER_DATA.forecast.forecastday[0].astro.sunset}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherAstro;

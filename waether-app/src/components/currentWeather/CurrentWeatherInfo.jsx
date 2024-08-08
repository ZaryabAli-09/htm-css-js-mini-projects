import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TbTemperatureCelsius } from "react-icons/tb";
import { GoArrowUp } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const CurrentWeatherInfo = () => {
  const WEATHER_DATA = useSelector((store) => store.currentWeather);
  const [detailBtn, setDetailBtn] = useState(true);
  function detailBtnHandler(event) {
    event.preventDefault();
    setDetailBtn(!detailBtn);
  }
  return (
    <div className="mx-4">
      <div className="bg-white bg-opacity-20 text-white  max-w-md mt-4 mx-auto px-4  p-10 rounded-xl lg:max-w-2xl">
        <div className="flex justify-between">
          <span>Current Weather</span>
          <span className="bg-white bg-opacity-15 p-1 rounded font-bold text-sm">
            {WEATHER_DATA.location.localtime}
          </span>
        </div>
        <hr className="mb-10" />
        <aside className=" space-y-3">
          <div className="flex flex-col items-center m-auto p-2 rounded bg-black bg-opacity-20 w-fit">
            <span>
              <img
                className="w-20"
                src={WEATHER_DATA.current.condition.icon}
                alt=""
              />
            </span>
            <span className="font-bold">
              {WEATHER_DATA.current.condition.text}
            </span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className=" bg-black bg-opacity-20 text-white flex font-bold p-2 rounded">
              {WEATHER_DATA.current.temp_c}
              <TbTemperatureCelsius className="text-lg font-bolder" />
            </span>

            <span className=" bg-black bg-opacity-20 text-white flex font-bold p-2 rounded">
              Real Feel Like {WEATHER_DATA.current.feelslike_c}{" "}
              <TbTemperatureCelsius className="text-lg font-bolder" />
            </span>
          </div>
        </aside>
        <div>
          {detailBtn ? (
            <button
              className="flex items-center justify-between w-36 p-1 mt-6  bg-black bg-opacity-20 text-white rounded-md text-xs hover:bg-gray-800 "
              onClick={detailBtnHandler}
            >
              More Details
              <IoIosArrowDown className="ml-1 text-lg hover:rotate-180 cursor-pointer" />
            </button>
          ) : (
            <button
              className="flex items-center justify-between w-36 p-1 mt-6 bg-black bg-opacity-20 text-white rounded-md text-xs hover:bg-gray-800 "
              onClick={detailBtnHandler}
            >
              More Details{" "}
              <IoIosArrowUp className="ml-1 text-lg hover:rotate-180 cursor-pointer" />
            </button>
          )}
        </div>
        {!detailBtn ? (
          ""
        ) : (
          <div className="table mt-6 w-full space-y-4 bg-black bg-opacity-20 text-white p-2 rounded-lg text-sm">
            <div className="flex justify-between items-center">
              <span>Wind</span>
              <span>{WEATHER_DATA.current.gust_kph} kph</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>Wind Gusts</span>
              <span>{WEATHER_DATA.current.gust_kph} kph</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>Humidity</span>
              <span>{WEATHER_DATA.current.humidity}%</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>Cloud Cover</span>
              <span>{WEATHER_DATA.current.cloud}% sky covered</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>Pressure</span>
              <span className="flex items-center">
                <GoArrowUp /> {WEATHER_DATA.current.pressure_mb}
                mb
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <span>Visibility</span>
              <span>{WEATHER_DATA.current.vis_km} km</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherInfo;

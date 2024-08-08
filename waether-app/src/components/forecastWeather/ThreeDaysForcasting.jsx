import React from "react";
import { useSelector } from "react-redux";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";

function ThreeDaysForcasting() {
  const dayForcastData = useSelector((store) => store.forecastWeather);

  return (
    <div className="mx-4">
      <div className="p-2 bg-white bg-opacity-20 text-white mx-auto rounded-xl   mb-2 max-w-md lg:max-w-xl ">
        <div className="ml-4 flex items-center">
          <FaRegCalendarAlt className="text-sm text-black mr-1" />
          <h3 className=" text-sm font-bold text-gray-600">3-day forecast</h3>
        </div>
        {dayForcastData.map((data, i) => {
          return (
            <div
              key={i}
              className="flex justify-between items-center p-2 bg-black bg-opacity-20 text-white m-1 rounded-lg h-10 lg:p-2 lg:h-auto"
            >
              <div className="flex items-center">
                <img src={data.day.condition.icon} alt="" className="w-10" />{" "}
                <div className="flex gap-2">
                  <span className="font-bold text-xs l">
                    {i === 0 ? (
                      <span className="text-red-700 ">Today</span>
                    ) : i === 1 ? (
                      "Tommorow"
                    ) : (
                      "Overmorrow"
                    )}
                  </span>
                  <span className="text-sm font-extrabold text-gray-600">
                    {data.day.condition.text}
                  </span>
                </div>
              </div>
              <div className="flex font-bold text-gray-100">
                <span className="flex">
                  {data.day.maxtemp_c}
                  <TbTemperatureCelsius />
                </span>
                /{" "}
                <span className="flex">
                  {data.day.mintemp_c}
                  <TbTemperatureCelsius />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThreeDaysForcasting;

import React from "react";
import { useSelector } from "react-redux";
import nightCMImg from "../../assets/nightCM.webp";
import { TbTemperatureCelsius } from "react-icons/tb";

const CurrentHourlyForecast = () => {
  let date = new Date().getHours().toString();

  const DATA = useSelector((store) => store.forecastWeather);
  const currentDayData = DATA[0].hour;
  const filterHours = currentDayData.filter((hourlyData) => {
    let hdata = hourlyData.time.split(" ")[1].split(":")[0].split("");
    if (hdata[0] == "0") {
      hdata.shift();
    }
    return hdata.join("") >= date;
  });

  return (
    <div className="mx-4">
      <div className="mt-4  mb-4 p-2 bg-white bg-opacity-20 text-white  flex overflow-y-hidden overflow-x-scroll space-x-8 max-w-md mx-auto rounded-xl lg:max-w-xl">
        {currentDayData.map((hourlyData) => {
          return (
            <div
              key={hourlyData.time}
              className="rounded  bg-black bg-opacity-20 text-white    px-6 py-2 flex flex-col justify-between items-center "
            >
              <div className=" text-sm ">
                {hourlyData.time.split(" ")[1]}-
                {hourlyData.time.split(" ")[1] < "12:00" ? "AM" : "PM"}
              </div>
              {hourlyData.condition.text == "Clear " ||
              (hourlyData.condition.text == "Mist" &&
                hourlyData.is_day == 0) ? (
                <img className="" src={nightCMImg} alt="img" />
              ) : (
                <img className="" src={hourlyData.condition.icon} alt="img" />
              )}

              <div className="  w-full flex space-x-2">
                <span className="flex ">
                  {hourlyData.temp_c} <TbTemperatureCelsius />
                </span>
                <span className="flex text-gray-300">
                  {hourlyData.feelslike_c}
                  <TbTemperatureCelsius />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentHourlyForecast;

import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import CurrentWeatherInfo from "./currentWeather/CurrentWeatherInfo";
import CurrentWeatherAstro from "./currentWeather/CurrentWeatherAstro";
import CurrentHourlyForecast from "./forecastWeather/CurrentHourlyForecast";
import ThreeDaysForcasting from "./forecastWeather/ThreeDaysForcasting";
function Weather() {
  const WEATHER_DATA = useSelector((store) => store.currentWeather);
  const loader = useSelector((state) => state.loader);

  return (
    <>
      {loader === true ? <Loader /> : ""}

      {WEATHER_DATA.length === 0 || loader === true ? (
        ""
      ) : (
        <>
          <CurrentWeatherAstro />
          <CurrentWeatherInfo />
          <CurrentHourlyForecast />
          <ThreeDaysForcasting />
        </>
      )}
    </>
  );
}

export default Weather;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  currentWeatherAction,
  forecastWeatherAction,
  loaderAction,
} from "../store/store";
import { TbWorldSearch } from "react-icons/tb";

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  function handleInput(e) {
    setSearch(e.target.value);
  }
  function handleInputButton() {
    if (!search) {
      alert("please enter location");
    } else {
      fetchData(search);
    }
  }

  async function fetchData(param) {
    const options = {
      params: { q: param, days: "3" },
      headers: {
        "X-RapidAPI-Key": "bcc0fc0619mshe4d11683bba1ec0p1c62f0jsn965ee90d1f5e",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    try {
      dispatch(loaderAction.setLoaderTrue());

      const response = await axios.get(
        "https://weatherapi-com.p.rapidapi.com/forecast.json",
        options
      );

      dispatch(currentWeatherAction.addingFetchedData(response.data));
      dispatch(
        forecastWeatherAction.addFetchedData(response.data.forecast.forecastday)
      );
      dispatch(loaderAction.setLoaderFalse());
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData("islamabad");
  }, []);

  return (
    <div className="mx-4">
      <div className="flex justify-center  bg-white bg-opacity-15 max-w-md  mt-4 mx-auto  text-white  rounded-xl p-3 lg:max-w-xl">
        <div className="relative">
          <TbWorldSearch className="absolute text-lg top-4 text-blue-900" />
          <input
            className="text-gray-700 bg-white focus:outline-none py-4 pl-6 text-xs shadow-md w-64 lg:w-96"
            placeholder="Search your Address, City or Zip Code"
            type="text"
            onChange={handleInput}
          />
        </div>

        <button
          className=" text-white bg-blue-900  h-13 px-4 hover:bg-blue-600 text-xs font-bold  "
          onClick={handleInputButton}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;

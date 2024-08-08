import { configureStore, createSlice } from "@reduxjs/toolkit";

const currentWeatherSlice = createSlice({
  name: "currentWeatherinfo",
  initialState: [],
  reducers: {
    addingFetchedData: (store, action) => {
      return action.payload;
    },
  },
});

const forecastWeatherSlice = createSlice({
  name: "forecastWeatherinfo",
  initialState: [],
  reducers: {
    addFetchedData: (store, action) => {
      return action.payload;
    },
  },
});
const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    setLoaderTrue: (state, action) => {
      return !state;
    },
    setLoaderFalse: (state, action) => {
      return (state = false);
    },
  },
});
const weatherDataStore = configureStore({
  reducer: {
    currentWeather: currentWeatherSlice.reducer,
    loader: loaderSlice.reducer,
    forecastWeather: forecastWeatherSlice.reducer,
  },
});

export const currentWeatherAction = currentWeatherSlice.actions;
export const forecastWeatherAction = forecastWeatherSlice.actions;
export const loaderAction = loaderSlice.actions;

export default weatherDataStore;

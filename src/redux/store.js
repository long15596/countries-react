import {configureStore} from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";

export const store = configureStore({
    reducer: {
        countries: countriesReducer
    }
})
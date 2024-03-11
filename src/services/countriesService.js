import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
    'countries/getCountries',
    async () => {
        const response = await axios.get(` https://restcountries.com/v3.1/all`)
        return response.data
    }
)
export const searchCountries = createAsyncThunk(
    'countries/search',
    async (searchText) => {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${searchText}`)
        return response.data
    }
)
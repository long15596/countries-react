import {createSlice} from "@reduxjs/toolkit";
import {getCountries, searchCountries} from "../../services/countriesService";
const initialState = {
    countries: [],
    searchResult: [],
    searchText: '',
}
const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setSearchResult: (state, action) => {
            state.searchResult = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getCountries.fulfilled, (state, action) =>{
            state.countries = action.payload
        })
        builder.addCase(searchCountries.fulfilled, (state, action) =>{
            state.countries = action.payload
        })
    }
})
export const {setSearchResult} = countriesSlice.actions;
export default countriesSlice.reducer
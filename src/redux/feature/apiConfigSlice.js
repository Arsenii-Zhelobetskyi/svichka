/*
import {
    createAsyncThunk,
    createSlice,

} from "@reduxjs/toolkit";
import {useGetConfigurationQuery} from "../../utils/apiFetching.js";
// import {fetchMovies} from "./homeSlice.js";
/!*export const fetchSettings = createAsyncThunk('settings/fetchSettings', async () => {
    const response = await useGetConfigurationQuery();
    console.log(response)
    return response.resu    lt
})*!/
    const apiConfigSlice = createSlice({
        name: 'settings',
        initialState: {},
        reducers: {
            settingFetched(state, action) {
                return  action.payload;
            }
        },
    /!*    extraReducers(builder) {
            builder.addCase(fetchSettings.fulfilled, (state, action) => {
                return action.payload
            })
        }*!/
    })
export default apiConfigSlice.reducer
export const { settingFetched } = apiConfigSlice.actions
export const selectSettings = (state) => state.config*/

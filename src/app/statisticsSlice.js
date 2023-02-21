import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
    name: "statistics",
    initialState: {
        statistics: [],
    },
    reducers: {
        setStatistics: (state, action) => {
            return { ...state, statistics: [...action.payload] };
        }
    },
});

export const { setStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;

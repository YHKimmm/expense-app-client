import { createSlice } from '@reduxjs/toolkit';

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: '',
        isAuthenticated: false,
    },
    reducers: {
        userAuthenticated: (state, action) => {
            sessionStorage.setItem('token', action.payload.token);
            return { ...state, token: action.payload.token, isAuthenticated: true };
        },
        userLoggedOut: () => {
            sessionStorage.clear();
        }
    },
});

export const { userAuthenticated, userLoggedOut } = authenticationSlice.actions;

export default authenticationSlice.reducer;
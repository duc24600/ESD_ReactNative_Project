import { createSlice } from "@reduxjs/toolkit"

type profile = {
    username: string,
    isActive?: boolean,
    role?: string,
    email?: string,
    fullName?: string,
    contactName?: string
}

const initialState = {
    user: {},
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

    }
});

export default authSlice.reducer
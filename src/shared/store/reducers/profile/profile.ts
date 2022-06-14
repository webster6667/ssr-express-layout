import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AuthDataPayloadI} from './types'


const authToken = ''

const initialState = {
    isAuth: !!authToken,
    isGuest: !authToken
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<AuthDataPayloadI>) {
            const {id} = action.payload
        },
        logout(state, action) {

        },
    },
})

export const ProfileActionCreators = profileSlice.actions
export const ProfileReducer = profileSlice.reducer

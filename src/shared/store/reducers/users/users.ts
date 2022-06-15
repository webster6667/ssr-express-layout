import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AuthDataPayloadI} from './types'

const initialState = {
    users: [],
    isLoading: false,
    isError: false
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userFetching(state, action) {
            const {isLoading, isError = false, users = []} = action.payload

            return {...state, isLoading, isError, users}
        }
    },
})

export const usersActions = usersSlice.actions
export const usersReducer = usersSlice.reducer

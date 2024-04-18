import {createSlice} from '@reduxjs/toolkit'

const chatGptSlice = createSlice({
    name:' chatGptSearchView',
    initialState: false,
    reducers:{
        toogleChatGptSearchView: (state, action) => {
            return !state;
        }
    }
})


export const {toogleChatGptSearchView} = chatGptSlice.actions;

export default chatGptSlice.reducer;
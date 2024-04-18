import { createSlice } from '@reduxjs/toolkit';

const userLanguageSlice = createSlice({
    name: 'userLanguage',
    initialState: {
        selectedLanguage: "en",
    },
    reducers:{
        SelectUserLanguage: (state,action) => {
            state.selectedLanguage = action.payload
        }

    },
});

export const { SelectUserLanguage} = userLanguageSlice.actions;

export default userLanguageSlice.reducer;
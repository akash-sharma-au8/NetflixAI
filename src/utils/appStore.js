import {configureStore} from '@reduxjs/toolkit'
import  userReducer from './userSlice';
import movieReducer from './movieSlice';
import chatGptSearchViewReducer from './chatGptSlice';
import userLanguageReducer from './languageSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        chatGptSearchView: chatGptSearchViewReducer,
        userLanguage: userLanguageReducer
    }
})

export default appStore;
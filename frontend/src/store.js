import { configureStore } from '@reduxjs/toolkit'
import NewNoteReducer from './features/createNewNote/createNewNoteSlice'

const store = configureStore({
    reducer:{
        newNote:NewNoteReducer,

    }
})

export default store
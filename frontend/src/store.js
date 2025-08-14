import { configureStore } from '@reduxjs/toolkit'
import NewNoteReducer from './features/createNewNote/createNewNoteSlice'
import AllNotes from './features/allNotes/listNotesSlice'

const store = configureStore({
    reducer:{
        newNote:NewNoteReducer,
        notes:AllNotes,

    }
})

export default store
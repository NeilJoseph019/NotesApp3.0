import { configureStore } from '@reduxjs/toolkit'
import NewNoteReducer from './features/createNewNote/createNewNoteSlice'
import AllNotes from './features/allNotes/listNotesSlice'
import IndividualNoteReducer from './features/individualNotes/individualNoteSlice'


const store = configureStore({
    reducer:{
        newNote:NewNoteReducer,
        notes:AllNotes,
        individualNote:IndividualNoteReducer,

    }
})

export default store
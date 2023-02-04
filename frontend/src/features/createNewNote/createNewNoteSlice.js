import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading:"false",
    data :{},
    errors: ""
}

export const create_newNote = createAsyncThunk("createNewNote/addNewNote", async (data={}, { rejectWithValue })=>{
    try{
        const config = {
            headers:{
                'Content-Type':'application/json',
            }
        }
        const api_link = await axios.post("/api/notes/create",data,config)
        return api_link.data
    }catch(error){
        return rejectWithValue(error.response.data)
    }
    
})

const createNewNoteSlice = createSlice({
    name : "createNewNote",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(create_newNote.pending, (state)=>{
            state.loading = "true"
        })
        .addCase(create_newNote.fulfilled, (state)=>{
            state.loading = "false"
        })
        .addCase(create_newNote.rejected, (state, {payload})=>{
            state.loading = "false"
            state.errors = payload
        })
    }
})

export default createNewNoteSlice.reducer

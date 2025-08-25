import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    note: {},
    loading: false,
    errors: "",
}

export const fetchSpecificNote = createAsyncThunk(
    "individualNote/fetchParticularNote",
    async (noteId, { rejectWithValue }) => {
        try {
           
            const response = await axios.get(`/api/notes/${noteId}/`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Error fetching notes")
        }
    }
)

const individualNoteSlice = createSlice({
    name : "individualNote",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchSpecificNote.pending, (state) => {
                state.loading = true;
              })
              .addCase(fetchSpecificNote.fulfilled, (state, action) => {
                state.loading = false;
                state.note = action.payload;
              })
              .addCase(fetchSpecificNote.rejected, (state, { payload }) => {
                state.loading = false;
                state.errors = payload;
              })
    }
    
})

export default individualNoteSlice.reducer;
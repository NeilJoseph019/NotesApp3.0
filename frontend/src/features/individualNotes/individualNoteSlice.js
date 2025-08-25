import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    note: {},
    loading: false,
    errors: "",
}

//fetch note
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

// Update Note
export const updateNote = createAsyncThunk(
  "individualNote/updateNote",
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/notes/${id}/update`, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error updating note");
    }
  }
)

// Delete Note
export const deleteNote = createAsyncThunk(
  "individualNote/deleteNote",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/notes/${id}/delete`);
      return id; // return deleted note id so you can clear it in state
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error deleting note");
    }
  }
)

const individualNoteSlice = createSlice({
    name : "individualNote",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder

        // fetch note
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

         // Update Note
        .addCase(updateNote.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateNote.fulfilled, (state, action) => {
            state.loading = false;
            state.note = action.payload; // update with new note data
        })
        .addCase(updateNote.rejected, (state, { payload }) => {
            state.loading = false;
            state.errors = payload;
        })

        // Delete Note
        .addCase(deleteNote.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteNote.fulfilled, (state, action) => {
            state.loading = false;
            state.note = {}; // clear note from state
        })
        .addCase(deleteNote.rejected, (state, { payload }) => {
            state.loading = false;
            state.errors = payload;
        });
    }
    
})

export default individualNoteSlice.reducer;
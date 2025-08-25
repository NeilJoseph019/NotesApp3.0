import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from "axios"

const initialState = {
    notes: [],
    loading: false,
    errors: ""
};

// Thunk to fetch all notes
export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/notes");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching notes");
    }
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, { payload }) => {
        state.loading = false;
        state.errors = payload;
      });
  }
});

export default notesSlice.reducer;

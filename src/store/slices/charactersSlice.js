import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "../thunks/fetchCharacters";

const charactersSlice = createSlice({
  name: "characters",
  // type: TCharacter = {
  //   id?: Number,
  //   name?: String,
  //   tribe?: String,
  //   rank?: String,
  //   power?: Number,
  //   bio?: String
  // },
  initialState: {
    data: [{ id: Number, name: String, tribe: String, rank: String, power: Number, bio: String }],
    isLoading: false,
    error: null
  },
  extraReducers(builder) {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export const charactersReducer = charactersSlice.reducer;

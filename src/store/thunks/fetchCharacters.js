import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk string can be literally anything. Just a named string the Thunk uses
const fetchCharacters = createAsyncThunk("characters/fetch", async () => {
  const res = await axios.get("http://localhost:3005/characters");

  //   Dev mode only
  await pause(2000);

  return res.data;
});

// Dev mode only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchCharacters };

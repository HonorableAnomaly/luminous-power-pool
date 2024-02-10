import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { charactersApi } from "./apis/charactersApi";
import { charactersReducer } from "./slices/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [charactersApi.reducerPath]: charactersApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(charactersApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchCharactersQuery } from "./apis/charactersApi";
export * from "./thunks/fetchCharacters";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Dev mode only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const charactersApi = createApi({
  reducerPath: "characters",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // Dev mode only
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    }
  }),
  endpoints(builder) {
    return {
      fetchCharacters: builder.query({
        providesTags: (result, error, character) => {
          const tags = result.map((character) => {
            return {
              type: "Character",
              id: character.id
            };
          });
          tags.push({ type: "UsersAlbums", id: character.id });
          return tags;
        },
        query: (character) => {
          return {
            url: "/albums",
            params: {
              characterId: character.id
            },
            method: "GET"
          };
        }
      })
    };
  }
});

export const { useFetchCharactersQuery } = charactersApi;
export { charactersApi };

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRootInterface} from "../../models/models";

const API_KEY = '96247RS-TJFM1NK-HAJWE0Q-RMZJJR8';

export const filmApi = createApi({
	reducerPath: 'api/films',
	baseQuery: fetchBaseQuery({
		baseUrl: `https://api.kinopoisk.dev/`,
		prepareHeaders: (headers) => {
      headers.set('X-API-KEY', API_KEY);
      return headers;
    },
	}),
	endpoints: build =>({
		getFilms: build.query<IRootInterface, string>({query: () => `v1.4/movie?&lists=bestofamediateka`}),
		searchFilms: build.query<IRootInterface, string>({query: (searchValue) => `v1.4/movie/search?query=${searchValue}`}),
		getList: build.query<IRootInterface, string>({query: () => `v1.4/list?&limit=100`}),
	}),
})


export const {useGetFilmsQuery, useSearchFilmsQuery, useGetListQuery, useLazyGetListQuery} = filmApi;
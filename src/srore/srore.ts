import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from "./films/films.api";
import { detailReducer } from "./detail/detail.slice";

export const store = configureStore({
	reducer: {
		[filmApi.reducerPath]: filmApi.reducer, detail: detailReducer
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(filmApi.middleware)
})


export type TypeRootState = ReturnType<typeof store.getState>
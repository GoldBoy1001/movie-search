import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Doc } from '../../models/models';

const initialState: Doc[] = []


export const detailSlice = createSlice({
	name: 'detail',
	initialState,
	reducers: {
		detailFilm: (state, action: PayloadAction<Doc>) => {
			state.push(action.payload)
		}
	}
})

export const detailReducer = detailSlice.reducer
export const detailActions = detailSlice.actions

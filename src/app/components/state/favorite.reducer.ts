import { addFavorite, deleteFavorite, getAllFavorite } from './favorite.action';
import { createReducer, on } from '@ngrx/store';

export const initialState: Array<string> = [];

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { garbageId }) => {
    if (state.indexOf(garbageId) > -1) return state;

    return [...state, garbageId];
  }),
  on(deleteFavorite, (state, { garbageId }) => {
    return state.filter((id) => id !== garbageId);
  }),
  on(getAllFavorite, (state) => {
    return [...state];
  })
);

import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[GarbageItemComponent] AddFavorite',
  props<{ garbageId: string }>()
);
export const deleteFavorite = createAction(
  '[GarbageItemComponent] DeleteFavorite',
  props<{ garbageId: string }>()
);
export const getAllFavorite = createAction(
  '[GarbageItemComponent] GetAllFavorite'
);

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectFavorite = createFeatureSelector<Array<string>>('favorites');
export const selectCollectionState =
  createFeatureSelector<Array<string>>('collection');

export const selectFavoriteCollection = createSelector(
  selectFavorite,
  selectCollectionState,
  (favorites, collection) => {
    return collection.map(
      (id) => favorites.find((favorite) => favorite === id)!
    );
  }
);

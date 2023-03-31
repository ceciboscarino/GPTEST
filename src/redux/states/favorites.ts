import { LocalStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState : Person[]= [];







export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addFavorites: (state, action) => {
            setLocalStorage(LocalStorageTypes.FAVORITES, state)
            return action.payload;
        },
        removeFavorites: (state, action) => {
            const filteredState = state.filter ((p: Person)=> p.id!==action.payload.id) ;
            setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
            return filteredState;
        }
    }}) ;

export const { addFavorites , removeFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
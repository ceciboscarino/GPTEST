import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSplice } from './states/favorites';
import { peopleSplice } from "./states/people";


export interface AppStore {
    people: Person[];
    favorites: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSplice.reducer,
        favorites:favoritesSplice.reducer
}});
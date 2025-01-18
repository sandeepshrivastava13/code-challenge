import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../src/features/pokemon/pokemonSlice'

export const Store=configureStore({
    reducer:pokemonReducer
})
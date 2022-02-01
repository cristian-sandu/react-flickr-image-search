import { combineReducers } from '@reduxjs/toolkit'

import { galleryReducer } from './gallery-reducer'

export const rootReducer = combineReducers({
  gallery: galleryReducer,
})

export type RootState = ReturnType<typeof rootReducer>

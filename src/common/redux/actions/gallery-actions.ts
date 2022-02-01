import { createAction } from '@reduxjs/toolkit'

import { GalleryActionType } from './action-types'

export const fetchGalleryImages = createAction(
  GalleryActionType.FETCH,
  (searchQuery: string) => ({
    payload: {
      searchQuery,
    },
  }),
)

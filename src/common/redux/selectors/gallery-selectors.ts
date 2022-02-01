import { createSelector } from '@reduxjs/toolkit'
import { isEmpty, prop } from 'ramda'

import { FetchState } from 'common/enums'

import { GalleryState } from '../reducers/gallery-reducer'
import { RootState } from '../reducers/root-reducer'
import {
  getAllIds,
  getById,
  getItems,
  getPageInfo,
} from '../utils/redux-selector-utils'

export const getGalleryState = (state: RootState): GalleryState => state.gallery

export const getGalleryFetchState = createSelector(
  getGalleryState,
  prop('fetchState'),
)

export const getIsGalleryFetching = createSelector(
  getGalleryFetchState,
  fetchState => fetchState === FetchState.FETCHING,
)

export const getGalleryItems = createSelector(getGalleryState, galleryState =>
  getItems(galleryState),
)
export const getGalleryPageInfo = createSelector(getGalleryItems, getPageInfo)

export const getImagesIds = createSelector(getGalleryItems, items =>
  getAllIds(items),
)
export const getImagesById = createSelector(getGalleryItems, items =>
  getById(items),
)

export const getImages = createSelector(
  getImagesIds,
  getImagesById,
  (ids, byId) => ids.map(id => byId[id]),
)

export const getIsImagesEmpty = createSelector(getImages, isEmpty)

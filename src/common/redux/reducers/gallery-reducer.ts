import { createReducer } from '@reduxjs/toolkit'

import { FetchState } from 'common/enums'
import { FetchGallerySuccessAction, RawPhoto } from 'common/types'
import { indexById, pluckIds } from 'common/utils'

import {
  GalleryActionType,
  GalleryResponseActionType,
} from '../actions/action-types'
import ReduxPhotoModel from '../models/redux-photo-model'
import { itemsInitialState, ItemsState } from './utils/items-reducer-utils'

export type GalleryState = ItemsState<RawPhoto> & {
  fetchState: FetchState
}

const initialState: GalleryState = {
  fetchState: FetchState.NOT_FETCHED,
  items: itemsInitialState.items,
}

export const galleryReducer = createReducer<GalleryState>(initialState, {
  [GalleryActionType.FETCH]: state => {
    state.fetchState = FetchState.FETCHING
  },
  [GalleryResponseActionType.FETCH_SUCCEEDED]: (
    state,
    { payload: { photo, ...pageInfo } }: FetchGallerySuccessAction,
  ) => {
    const reduxPhotosShape = photo.map(image => ReduxPhotoModel(image))
    state.items.allIds = pluckIds(reduxPhotosShape)
    state.items.byId = indexById(reduxPhotosShape)
    state.items.pageInfo = pageInfo
    state.fetchState = FetchState.FETCH_SUCCEEDED
  },
  [GalleryResponseActionType.FETCH_FAILED]: state => {
    state.fetchState = FetchState.FETCH_FAILED
  },
})

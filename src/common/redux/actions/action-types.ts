import { failedActionType, successActionType } from '../utils/redux-saga-utils'

export enum GalleryActionType {
  FETCH = 'GALLERY.FETCH_IMAGES',
}

export const GalleryResponseActionType = {
  FETCH_SUCCEEDED: successActionType(GalleryActionType.FETCH),
  FETCH_FAILED: failedActionType(GalleryActionType.FETCH),
} as const

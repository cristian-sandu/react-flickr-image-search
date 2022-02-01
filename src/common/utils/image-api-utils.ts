import { BooleanNumber } from '../enums'
import axiosInstance from './axios'

enum FlickrContentType {
  PHOTOS = 1,
}
const REST_ENDPOINT = 'services/rest/'
const PHOTO_SEARCH_METHOD = 'flickr.photos.search'

export const createImageSearchAxios = (searchQuery: string) =>
  axiosInstance.get(REST_ENDPOINT, {
    params: {
      content_type: FlickrContentType.PHOTOS,
      is_getty: BooleanNumber.True,
      method: PHOTO_SEARCH_METHOD,
      safe_search: BooleanNumber.True,
      text: searchQuery,
    },
  })

import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { fetchGalleryImages } from 'common/redux/actions'

const useGalleryFetch = () => {
  const dispatch = useDispatch()

  const fetchImages = useCallback(
    (searchQuery: string) => {
      dispatch(fetchGalleryImages(searchQuery))
    },
    [dispatch],
  )

  return {
    fetchImages,
  }
}

export default useGalleryFetch

import { useSelector } from 'react-redux'

import { getIsGalleryFetching, getIsImagesEmpty } from 'common/redux/selectors'

import { GalleryHeader, GalleryList, GalleryEmptyFallback } from './components'
import useGalleryFetch from './hooks/use-gallery-fetch'

const GalleryScreen = () => {
  const { fetchImages } = useGalleryFetch()
  const isGalleryFetching = useSelector(getIsGalleryFetching)
  const isImagesEmpty = useSelector(getIsImagesEmpty)

  return (
    <div>
      <GalleryHeader onChange={fetchImages} isFetching={isGalleryFetching} />
      {isImagesEmpty ? <GalleryEmptyFallback /> : <GalleryList />}
    </div>
  )
}

export default GalleryScreen

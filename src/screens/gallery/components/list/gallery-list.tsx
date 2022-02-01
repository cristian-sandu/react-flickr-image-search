import { useSelector } from 'react-redux'

import { getImages } from 'common/redux/selectors'

import GalleryImage from './components/gallery-image'
import styles from './gallery-list.module.scss'

const GalleryList = () => {
  const images = useSelector(getImages)

  return (
    <div className={styles.gallery}>
      {images.map(image => (
        <GalleryImage key={image.id} src={image.url} alt={image.title} />
      ))}
    </div>
  )
}

export default GalleryList

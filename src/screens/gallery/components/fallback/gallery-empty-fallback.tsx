import emptyFallback from './assets/empty-state.gif'
import styles from './gallery-empty-fallback.module.scss'

const GalleryEmptyFallback = () => (
  <div className={styles.container}>
    <p>Type in the input to search images by keyword</p>
    <img
      className={styles.image}
      data-testid="fallback-image"
      alt="Gallery not fetched"
      src={emptyFallback}
      width="100%"
    />
  </div>
)

export default GalleryEmptyFallback

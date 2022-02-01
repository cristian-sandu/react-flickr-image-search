import { FC } from 'react'

import { LazyImage } from 'common/components'

import styles from './gallery-image.module.scss'

type Properties = {
  alt: string
  src: string
}

const GalleryImage: FC<Properties> = ({ alt, src }) => (
  <div className={styles.card}>
    <LazyImage src={src} alt={alt} />
  </div>
)

export default GalleryImage

import { FC, useCallback } from 'react'
import { useTrackVisibility } from 'react-intersection-observer-hook'

import styles from './lazy-image.module.scss'

type Properties = {
  alt: string
  src: string
}

const IMAGE_FALLBACK =
  'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOM/QQAAbIBUeSou7cAAAAASUVORK5CYII='

const LazyImage: FC<Properties> = ({ src, alt }) => {
  const [reference, { entry, rootRef, wasEverVisible }] = useTrackVisibility()

  const handleLoad = useCallback(event => {
    event?.target.classList.add(styles.loaded)
  }, [])

  return (
    <img
      className={styles.image}
      ref={wasEverVisible ? rootRef : reference}
      src={entry?.isIntersecting ? src : IMAGE_FALLBACK}
      alt={alt}
      onLoad={handleLoad}
    />
  )
}

export default LazyImage

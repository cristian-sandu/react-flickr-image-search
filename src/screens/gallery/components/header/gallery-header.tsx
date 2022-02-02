import { ChangeEventHandler, FC, useCallback, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import styles from './gallery-header.module.scss'

type Properties = {
  onChange: (keyword: string) => void
  isFetching?: boolean
}

const SEARCH_INPUT_DEBOUNCE_TIME_MS = 1000

const GalleryHeader: FC<Properties> = ({ isFetching, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const callback = useDebouncedCallback(onChange, SEARCH_INPUT_DEBOUNCE_TIME_MS)

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    ({ target: { value } }) => {
      const normalizedValue = value.trim()
      setSearchQuery(normalizedValue)
      callback(normalizedValue)
    },
    [callback],
  )

  return (
    <div className={styles['input-container']}>
      <input
        className={styles.input}
        data-testid="gallery-header-input"
        onChange={handleChange}
        disabled={isFetching}
        placeholder="Search image"
        value={isFetching ? `Fetching images for: ${searchQuery}` : searchQuery}
      />
    </div>
  )
}

export default GalleryHeader

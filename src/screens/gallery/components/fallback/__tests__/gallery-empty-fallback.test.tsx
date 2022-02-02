import { render } from '@testing-library/react'
import React from 'react'

import { GalleryEmptyFallback } from '../..'

describe('<GalleryEmptyFallback/>', () => {
  test('should have a fallback title', () => {
    const { getByText } = render(<GalleryEmptyFallback />)

    expect(
      getByText('Type in the input to search images by keyword'),
    ).toBeInTheDocument()
  })

  test('should contain an image element', () => {
    const { getByTestId } = render(<GalleryEmptyFallback />)

    expect(getByTestId('fallback-image')).toBeInTheDocument()
  })

  test('should contain an image with an alt text', () => {
    const { getByTestId } = render(<GalleryEmptyFallback />)

    expect(getByTestId('fallback-image')).toHaveAttribute('alt')
  })

  test('should contain an image with an src attribute', () => {
    const { getByTestId } = render(<GalleryEmptyFallback />)

    expect(getByTestId('fallback-image')).toHaveAttribute('src')
  })
})

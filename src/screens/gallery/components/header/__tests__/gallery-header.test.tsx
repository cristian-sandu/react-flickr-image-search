import { fireEvent, render } from '@testing-library/react'

import { GalleryHeader } from '../..'

describe('<GalleryHeader/>', () => {
  let inputTestID = 'gallery-header-input'

  const setup = () => {
    const handleChange = jest.fn()
    const utils = render(<GalleryHeader onChange={handleChange} />)
    const inputElement = utils.getByTestId(inputTestID)

    return {
      ...utils,
      inputElement,
      handleChange,
    }
  }

  test('renders correctly', () => {
    // Act
    const { container } = setup()

    // Assert
    expect(container).toBeInTheDocument()
  })

  test('has an <input/> DOM element with correct data-testid', () => {
    // Act
    const { inputElement } = setup()

    // Assert
    expect(inputElement).toBeInTheDocument()
  })

  test('has an empty string value when not changed', () => {
    // Act
    const { inputElement } = setup()

    // Assert
    expect(inputElement).toHaveValue('')
  })

  test('has correct event target value', () => {
    // Arrange
    const inputChangeValue = 'lorem-input-value'

    // Act
    const { inputElement } = setup()

    fireEvent.change(inputElement, { target: { value: inputChangeValue } })

    // Assert
    expect(inputElement).toHaveValue(inputChangeValue)
  })
})

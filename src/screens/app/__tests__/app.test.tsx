import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from '@reduxjs/toolkit'

import { rootReducer } from 'common/redux/reducers/root-reducer'
import App from '../app'

describe('<App/>', () => {
  it('renders App without crashing', () => {
    const result = render(
      <Provider store={createStore(rootReducer)}>
        <App />
      </Provider>,
    )
    expect(result.baseElement).toBeInTheDocument()
  })
})

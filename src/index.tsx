import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { redux } from 'common/redux/store'

import App from './screens/app/app'
import './styles/index.scss'

const store = redux()
const MOUNT_NODE = document.querySelector('#root')

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  MOUNT_NODE,
)

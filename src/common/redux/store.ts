import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { isDevelopment } from '../utils'
import { rootReducer } from './reducers/root-reducer'
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  middleware: [sagaMiddleware],
  devTools: isDevelopment(),
  reducer: rootReducer,
})

sagaMiddleware.run(rootSaga)

export const redux = () => store

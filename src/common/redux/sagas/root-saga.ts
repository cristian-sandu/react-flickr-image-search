import { all, call } from 'redux-saga/effects'

import imageGallerySaga from './gallery/image-gallery-saga'

function* rootSaga() {
  yield all([call(imageGallerySaga)])
}

export default rootSaga

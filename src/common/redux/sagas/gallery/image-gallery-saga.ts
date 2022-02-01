import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { call, put, takeEvery } from 'redux-saga/effects'

import { PhotosType } from 'common/types'
import { createImageSearchAxios } from 'common/utils'

import { GalleryActionType } from '../../actions/action-types'
import { apiFailedAction, apiSuccessAction } from '../../utils/redux-saga-utils'

type Data = {
  stat?: string
  photos?: PhotosType
}

function* workImagesFetchSaga({
  type,
  payload: { searchQuery },
}: PayloadAction<{ searchQuery: string }>) {
  try {
    const response: AxiosResponse<Data> = yield call(
      createImageSearchAxios,
      searchQuery,
    )
    yield response?.status === 200 && response?.data?.stat === 'ok'
      ? put(apiSuccessAction(type, response.data.photos))
      : put(apiFailedAction(type))
  } catch (error) {
    yield put(apiFailedAction(type, error as Error))
  }
}

function* watchImageGallerySaga() {
  yield takeEvery(GalleryActionType.FETCH, workImagesFetchSaga)
}

export default watchImageGallerySaga

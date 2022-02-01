import { ItemsTypes } from 'common/types'

import { pageInfoInitialState } from './page-info-reducer-utils'

export type ItemsState<T> = {
  items: ItemsTypes<T>
}

export const itemsInitialState = {
  items: {
    allIds: [],
    byId: {},
    pageInfo: pageInfoInitialState.pageInfo,
  },
}

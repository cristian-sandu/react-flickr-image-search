import { Key } from 'react'

import { PageInfo } from './page-info-types'

export type AllIdsType = Key[]
export type ByIdType<T> = { [key: string]: T }

export type ItemsTypes<T> = {
  allIds: AllIdsType
  byId: ByIdType<T>
  pageInfo: PageInfo
}

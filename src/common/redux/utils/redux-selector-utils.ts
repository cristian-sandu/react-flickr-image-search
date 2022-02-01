import { prop } from 'ramda'
import { Key } from 'react'

import { ItemsTypes, PageInfo } from 'common/types'

interface StateSlice<T> {
  items: ItemsTypes<T>
  selectedItems?: Key[]
}

export const getData = prop('data')
export const getAllIds = prop('allIds')
export const getFetchState = prop('FetchState')

export const getPageInfo = prop('pageInfo')
export const getPageInfoTotalCount = (pageInfo: PageInfo) => pageInfo.total

export const getById = <T>(source: ItemsTypes<T>) => source.byId
export const getItems = <T>(source: StateSlice<T>) => source.items

export const getModal = prop('modal')
export const getFilter = prop('filter')
export const getSorter = prop('sorter')

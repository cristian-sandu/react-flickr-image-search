import { PageInfo } from 'common/types'

export type PageInfoState = {
  pageInfo: PageInfo
}

export const pageInfoInitialState: PageInfoState = {
  pageInfo: {
    page: -1,
    pages: -1,
    perpage: -1,
    total: -1,
  },
} as const

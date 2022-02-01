import { pluck, indexBy, prop } from 'ramda'

export const indexById = <T extends { id: string }>(items: T[] = []) =>
  indexBy(prop('id'), items)

export const pluckIds = <T extends { id: string }>(items: T[] = []) =>
  pluck('id', items)

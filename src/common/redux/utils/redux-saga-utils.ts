import { __, concat } from 'ramda'

export const successActionType = concat(__, '_SUCCEEDED')
export const failedActionType = concat(__, '_FAILED')

export const apiSuccessAction = <P>(type: string, payload?: P) => ({
  type: successActionType(type),
  payload,
})

export const apiFailedAction = <E extends Error = Error>(
  type: string,
  error?: E,
) => ({
  type: failedActionType(type),
  payload: {
    error: error?.toString() || error?.message,
  },
  error: true,
})

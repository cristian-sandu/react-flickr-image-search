import { AppMode } from '../enums'

/**
 * Returns true if `process.env.NODE_ENV` equals to provided value
 *
 * @returns Boolean
 * */
const isNodeEnvironment = (environment: string) =>
  process.env.NODE_ENV === environment

/**
 * Returns true if `process.env.NODE_ENV` equals `development`.
 *
 * @returns Boolean
 * */
export const isDevelopment = () =>
  isNodeEnvironment(AppMode.DEVELOPMENT.toString())

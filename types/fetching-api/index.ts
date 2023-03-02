import { PaginationType } from '../components'

export type StatusProcessType =
  | 'FETCHING'
  | 'SUCCESS'
  | 'FAILED'
  | 'ERROR'
  | 'DEFAULT'

export interface DeleteRequest {
  uuid: string
}
export interface APIStateType<T> {
  data: T | null | undefined
  isLoading: boolean
  pagination?: PaginationType
  notFound?: boolean
  status?: StatusProcessType | string
  code?: number
}

export interface APIResponseType<T> {
  code: number
  data: T
  message: string
  pagination?: PaginationType
}

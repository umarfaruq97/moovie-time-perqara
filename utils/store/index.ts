import { APIStateType, StatusProcessType } from '~/types/fetching-api'

type MutateParams<T> = {
  statusProcess: StatusProcessType
  data: T
}

function mutateHelper<T>(params: MutateParams<T>): APIStateType<T> {
  let isLoading = false
  if (params.statusProcess === 'FETCHING') {
    isLoading = true
  } else {
    isLoading = false
  }
  return {
    isLoading,
    data: params.data,
    status: params.statusProcess,
  }
}

export { mutateHelper }

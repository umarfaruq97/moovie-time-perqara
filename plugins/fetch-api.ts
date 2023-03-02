import { Plugin, Context } from '@nuxt/types'
import Vue from 'vue'
// eslint-disable-next-line import/no-named-as-default
import VueCookies from 'vue-cookies-reactive'
Vue.use(VueCookies)

export interface ParameterType {
  url: string
  data?: any
  params?: string
  responseType?: string
  method?: string
}
export interface ResponseAPIType<T> {
  code: number
  data?: T
  message?: string
}
declare module 'vue/types/vue' {
  interface Vue {
    $fetchAPI<T>(args: ParameterType): ResponseAPIType<T>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $fetchAPI<T>(args: ParameterType): ResponseAPIType<T>
  }
  interface Context {
    $fetchAPI<T>(args: ParameterType): ResponseAPIType<T>
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $fetchAPI<T>(args: ParameterType): ResponseAPIType<T>
  }
}
const fetchAPIFunction = async <T>(
  ctx: Context,
  args: ParameterType
): Promise<ResponseAPIType<T>> => {
  const config: any = {}
  config.method = args.method ? args.method : 'POST'
  config.url = args.url
  if (Vue.$cookies.get('user_session')) {
    config.headers = {
      Authorization: `Bearer ${Vue.$cookies.get('user_session')}`,
    }
  }
  if (typeof args.data !== 'undefined') {
    config.data = args.data
  }
  if (typeof args.params !== 'undefined') {
    config.params = args.params
  }
  if (typeof args.responseType !== 'undefined') {
    config.responseType = args.responseType
  }
  const result = await ctx
    .$axios(config)
    .then(function (res: any) {
      return res.data
    })
    .catch(function (err: any) {
      return err
    })
  return result
}
const fetchAPIPlugin: Plugin = (context, inject) => {
  inject(
    'fetchAPI',
    async (args: ParameterType) => await fetchAPIFunction(context, args)
  )
}

export default fetchAPIPlugin

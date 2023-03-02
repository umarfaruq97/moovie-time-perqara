import { Plugin } from '@nuxt/types'

export interface AlertArgs {
  show: boolean
  variant?: 'success' | 'warning' | 'danger' | 'info'
  size?: 'lg' | 'sm'
  message?: string
  actionAlert?: boolean
  actionText?: string
  action?: () => void
  timer?: number
}

export type AlertAction = (args: AlertArgs) => void

declare module 'vue/types/vue' {
  // this.$alert inside Vue components
  interface Vue {
    $alert: AlertAction
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$alert inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $alert: AlertAction
  }
  // nuxtContext.$alert
  interface Context {
    $alert: AlertAction
  }
}

declare module 'vuex/types/index' {
  // this.$alert inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $alert: AlertAction
  }
}

const alertPlugin: Plugin = (context, inject) => {
  context.store.registerModule('alert', {
    namespaced: true,
    state: (): AlertArgs => ({
      show: false,
      variant: 'success',
      size: 'lg',
      message: 'Proses sukses',
      actionAlert: false,
      actionText: '',
      action: () => {},
      timer: 0
    }),
    getters: {
      alertState(state: AlertArgs) {
        return { ...state }
      }
    },
    mutations: {
      SET_ALERT: (state: AlertArgs, payload: AlertArgs) => {
        state.show = payload.show
        state.variant = payload.variant || 'success'
        state.size = payload.size || 'lg'
        state.message = payload.message
        state.actionAlert = payload.actionAlert || false
        state.actionText = payload.actionText || ''
        state.action = payload.action || function () {}
        state.timer = payload.timer || 0
      }
    },
    actions: {
      pushAlert: ({ commit }, payload: AlertArgs) => {
        commit('SET_ALERT', payload)
      }
    }
  })
  inject('alert', (args: AlertArgs) => {
    context.store.dispatch('alert/pushAlert', args)
  })
}

export default alertPlugin

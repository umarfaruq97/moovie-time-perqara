import { Plugin } from '@nuxt/types'

export interface LoaderArgs {
  show: boolean
}

export type LoaderAction = (args: LoaderArgs) => void

declare module 'vue/types/vue' {
  interface Vue {
    $loader: LoaderAction
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $loader: LoaderAction
  }
  interface Context {
    $loader: LoaderAction
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $loader: LoaderAction
  }
}

const loader: Plugin = (context, inject) => {
  context.store.registerModule('loader', {
    namespaced: true,
    state: (): LoaderArgs => ({
      show: false
    }),
    getters: {
      loaderState(state: LoaderArgs) {
        return { ...state }
      }
    },
    mutations: {
      SET_LOADER: (state: LoaderArgs, payload: LoaderArgs) => {
        state.show = payload.show
      }
    },
    actions: {
      pushloader({ commit }, payload: LoaderArgs) {
        commit('SET_LOADER', payload)
      }
    }
  })
  inject('loader', (args: LoaderArgs) => {
    context.store.dispatch('loader/pushLoader', args)
  })
}

export default loader

import { Plugin } from '@nuxt/types'

export interface SignInModalArgs {
  show: boolean
  routeBack?: string | any
  handleSignInResult?: object | null
}

export type SignInModalAction = (args: SignInModalArgs) => void

declare module 'vue/types/vue' {
  interface Vue {
    $signInModal: SignInModalAction
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $signInModal: SignInModalAction
  }
  interface Context {
    $signInModal: SignInModalAction
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $signInModal: SignInModalAction
  }
}

const signInPlugin: Plugin = (context, inject) => {
  context.store.registerModule('signInModal', {
    namespaced: true,
    state: (): SignInModalArgs => ({
      show: false,
      routeBack: null,
      handleSignInResult: null,
    }),
    getters: {
      signInModalState(state: SignInModalArgs) {
        return { ...state }
      },
    },
    mutations: {
      SET_SIGN_IN_MODAL: (state: SignInModalArgs, payload: SignInModalArgs) => {
        state.show = payload.show
        state.routeBack = payload.routeBack || null
        state.handleSignInResult = payload.handleSignInResult
      },
    },
    actions: {
      pushSignInModal({ commit }, payload: SignInModalArgs) {
        commit('SET_SIGN_IN_MODAL', payload)
      },
    },
  })
  inject('signInModal', (args: SignInModalArgs) => {
    context.store.dispatch('signInModal/pushSignInModal', args)
  })
}

export default signInPlugin

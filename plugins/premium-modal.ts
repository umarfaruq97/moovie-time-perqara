import { Plugin } from '@nuxt/types'

export interface PremiumModalArgs {
  show: boolean
}

export type PremiumModalAction = (args: PremiumModalArgs) => void

declare module 'vue/types/vue' {
  interface Vue {
    $premiumModal: PremiumModalAction
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $premiumModal: PremiumModalAction
  }
  interface Context {
    $premiumModal: PremiumModalAction
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $premiumModal: PremiumModalAction
  }
}

const premiumModal: Plugin = (context, inject) => {
  context.store.registerModule('premiumModal', {
    namespaced: true,
    state: (): PremiumModalArgs => ({
      show: false
    }),
    getters: {
      premiumModalState(state: PremiumModalArgs) {
        return { ...state }
      }
    },
    mutations: {
      SET_PREMIUM_MODAL: (
        state: PremiumModalArgs,
        payload: PremiumModalArgs
      ) => {
        state.show = payload.show
      }
    },
    actions: {
      pushPremiumModal({ commit }, payload: PremiumModalArgs) {
        commit('SET_PREMIUM_MODAL', payload)
      }
    }
  })
  inject('premiumModal', (args: PremiumModalArgs) => {
    context.store.dispatch('premiumModal/pushPremiumModal', args)
  })
}

export default premiumModal

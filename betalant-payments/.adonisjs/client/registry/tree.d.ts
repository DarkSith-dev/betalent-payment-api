/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
      destroy: typeof routes['auth.access_token.destroy']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
  payments: {
    store: typeof routes['payments.store']
  }
  products: {
    index: typeof routes['products.index']
    create: typeof routes['products.create']
    store: typeof routes['products.store']
    show: typeof routes['products.show']
    edit: typeof routes['products.edit']
    update: typeof routes['products.update']
    destroy: typeof routes['products.destroy']
  }
}

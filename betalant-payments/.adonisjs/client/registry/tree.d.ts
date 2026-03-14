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
  clients: {
    index: typeof routes['clients.index']
    create: typeof routes['clients.create']
    store: typeof routes['clients.store']
    show: typeof routes['clients.show']
    edit: typeof routes['clients.edit']
    update: typeof routes['clients.update']
    destroy: typeof routes['clients.destroy']
  }
  gateways: {
    index: typeof routes['gateways.index']
    create: typeof routes['gateways.create']
    store: typeof routes['gateways.store']
    show: typeof routes['gateways.show']
    edit: typeof routes['gateways.edit']
    update: typeof routes['gateways.update']
    destroy: typeof routes['gateways.destroy']
  }
}

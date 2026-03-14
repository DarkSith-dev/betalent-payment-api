/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.access_token.destroy']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
  'payments.store': {
    methods: ["POST"],
    pattern: '/api/v1/payments',
    tokens: [{"old":"/api/v1/payments","type":0,"val":"api","end":""},{"old":"/api/v1/payments","type":0,"val":"v1","end":""},{"old":"/api/v1/payments","type":0,"val":"payments","end":""}],
    types: placeholder as Registry['payments.store']['types'],
  },
  'products.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products',
    tokens: [{"old":"/api/v1/products","type":0,"val":"api","end":""},{"old":"/api/v1/products","type":0,"val":"v1","end":""},{"old":"/api/v1/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.index']['types'],
  },
  'products.create': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products/create',
    tokens: [{"old":"/api/v1/products/create","type":0,"val":"api","end":""},{"old":"/api/v1/products/create","type":0,"val":"v1","end":""},{"old":"/api/v1/products/create","type":0,"val":"products","end":""},{"old":"/api/v1/products/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['products.create']['types'],
  },
  'products.store': {
    methods: ["POST"],
    pattern: '/api/v1/products',
    tokens: [{"old":"/api/v1/products","type":0,"val":"api","end":""},{"old":"/api/v1/products","type":0,"val":"v1","end":""},{"old":"/api/v1/products","type":0,"val":"products","end":""}],
    types: placeholder as Registry['products.store']['types'],
  },
  'products.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.show']['types'],
  },
  'products.edit': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/products/:id/edit',
    tokens: [{"old":"/api/v1/products/:id/edit","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id/edit","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id/edit","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id/edit","type":1,"val":"id","end":""},{"old":"/api/v1/products/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['products.edit']['types'],
  },
  'products.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.update']['types'],
  },
  'products.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/products/:id',
    tokens: [{"old":"/api/v1/products/:id","type":0,"val":"api","end":""},{"old":"/api/v1/products/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/products/:id","type":0,"val":"products","end":""},{"old":"/api/v1/products/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['products.destroy']['types'],
  },
  'clients.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clients',
    tokens: [{"old":"/api/v1/clients","type":0,"val":"api","end":""},{"old":"/api/v1/clients","type":0,"val":"v1","end":""},{"old":"/api/v1/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['clients.index']['types'],
  },
  'clients.create': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clients/create',
    tokens: [{"old":"/api/v1/clients/create","type":0,"val":"api","end":""},{"old":"/api/v1/clients/create","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/create","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['clients.create']['types'],
  },
  'clients.store': {
    methods: ["POST"],
    pattern: '/api/v1/clients',
    tokens: [{"old":"/api/v1/clients","type":0,"val":"api","end":""},{"old":"/api/v1/clients","type":0,"val":"v1","end":""},{"old":"/api/v1/clients","type":0,"val":"clients","end":""}],
    types: placeholder as Registry['clients.store']['types'],
  },
  'clients.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clients.show']['types'],
  },
  'clients.edit': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clients/:id/edit',
    tokens: [{"old":"/api/v1/clients/:id/edit","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id/edit","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id/edit","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id/edit","type":1,"val":"id","end":""},{"old":"/api/v1/clients/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['clients.edit']['types'],
  },
  'clients.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clients.update']['types'],
  },
  'clients.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/clients/:id',
    tokens: [{"old":"/api/v1/clients/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clients/:id","type":0,"val":"clients","end":""},{"old":"/api/v1/clients/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clients.destroy']['types'],
  },
  'gateways.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/gateways',
    tokens: [{"old":"/api/v1/gateways","type":0,"val":"api","end":""},{"old":"/api/v1/gateways","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways","type":0,"val":"gateways","end":""}],
    types: placeholder as Registry['gateways.index']['types'],
  },
  'gateways.create': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/gateways/create',
    tokens: [{"old":"/api/v1/gateways/create","type":0,"val":"api","end":""},{"old":"/api/v1/gateways/create","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways/create","type":0,"val":"gateways","end":""},{"old":"/api/v1/gateways/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['gateways.create']['types'],
  },
  'gateways.store': {
    methods: ["POST"],
    pattern: '/api/v1/gateways',
    tokens: [{"old":"/api/v1/gateways","type":0,"val":"api","end":""},{"old":"/api/v1/gateways","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways","type":0,"val":"gateways","end":""}],
    types: placeholder as Registry['gateways.store']['types'],
  },
  'gateways.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/gateways/:id',
    tokens: [{"old":"/api/v1/gateways/:id","type":0,"val":"api","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"gateways","end":""},{"old":"/api/v1/gateways/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['gateways.show']['types'],
  },
  'gateways.edit': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/gateways/:id/edit',
    tokens: [{"old":"/api/v1/gateways/:id/edit","type":0,"val":"api","end":""},{"old":"/api/v1/gateways/:id/edit","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways/:id/edit","type":0,"val":"gateways","end":""},{"old":"/api/v1/gateways/:id/edit","type":1,"val":"id","end":""},{"old":"/api/v1/gateways/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['gateways.edit']['types'],
  },
  'gateways.update': {
    methods: ["PUT","PATCH"],
    pattern: '/api/v1/gateways/:id',
    tokens: [{"old":"/api/v1/gateways/:id","type":0,"val":"api","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"gateways","end":""},{"old":"/api/v1/gateways/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['gateways.update']['types'],
  },
  'gateways.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/gateways/:id',
    tokens: [{"old":"/api/v1/gateways/:id","type":0,"val":"api","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/gateways/:id","type":0,"val":"gateways","end":""},{"old":"/api/v1/gateways/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['gateways.destroy']['types'],
  },
  'payments.refund': {
    methods: ["POST"],
    pattern: '/api/v1/payments/refund/:id',
    tokens: [{"old":"/api/v1/payments/refund/:id","type":0,"val":"api","end":""},{"old":"/api/v1/payments/refund/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/payments/refund/:id","type":0,"val":"payments","end":""},{"old":"/api/v1/payments/refund/:id","type":0,"val":"refund","end":""},{"old":"/api/v1/payments/refund/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['payments.refund']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}

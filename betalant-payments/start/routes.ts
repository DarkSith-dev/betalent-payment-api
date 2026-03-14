import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

import PaymentsController from '#controllers/payments_controller'
import ProductsController from '#controllers/products_controller'
import ClientsController from '#controllers/clients_controller'
import GatewaysController from '#controllers/gateways_controller'
import TransactionsController from '#controllers/transactions_controller'


router.get('/', () => {
  return { hello: 'world' }
})


router
  .group(() => {


    router
      .group(() => {

        router.post('signup', [controllers.NewAccount, 'store'])

        router.post('login', [controllers.AccessToken, 'store'])

        router
          .post('logout', [controllers.AccessToken, 'destroy'])
          .use(middleware.auth())

      })
      .prefix('auth')
      .as('auth')



    router
      .group(() => {

        router.get('/profile', [controllers.Profile, 'show'])

      })
      .prefix('account')
      .as('profile')
      .use(middleware.auth())



    router
      .post('payments', [PaymentsController, 'store'])
      .use(middleware.role(['USER', 'ADMIN']))


    router
      .post('payments/refund/:id', [PaymentsController, 'refund'])
      .use(middleware.role(['ADMIN', 'FINANCE']))



    router
      .group(() => {
        router.resource('products', ProductsController)
      })
      .use(middleware.role(['ADMIN', 'MANAGER']))


    router
      .group(() => {
        router.resource('clients', ClientsController)
      })
      .use(middleware.role(['ADMIN', 'MANAGER']))



    router
      .group(() => {
        router.resource('gateways', GatewaysController)
      })
      .use(middleware.role(['ADMIN']))




    router
      .get('transactions', [TransactionsController, 'index'])
      .use(middleware.role(['ADMIN', 'FINANCE']))

    router
      .get('transactions/:id', [TransactionsController, 'show'])
      .use(middleware.role(['ADMIN', 'FINANCE']))

    router
      .get(
        'clients/:clientId/transactions',
        [TransactionsController, 'byClient']
      )
      .use(middleware.role(['ADMIN', 'FINANCE']))

    router
      .patch(
         'gateways/:id/toggle',
         [GatewaysController, 'toggle']
     )
       .use(middleware.role(['ADMIN']))


    router
       .patch(
        'gateways/:id/priority',
         [GatewaysController, 'setPriority']
      )
      .use(middleware.role(['ADMIN']))  
  })
  .prefix('/api/v1')
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'
import PaymentsController from '#controllers/payments_controller'
import ProductsController from '#controllers/products_controller'
import ClientsController from '#controllers/clients_controller'
import GatewaysController from '#controllers/gateways_controller'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    

    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessToken, 'store'])
        router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
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



    router.post('payments', [PaymentsController, 'store'])

    router.resource('products', ProductsController)

    router.resource('clients', ClientsController)

    router.resource('gateways', GatewaysController)

    

  })
  .prefix('/api/v1')
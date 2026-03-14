import type { HttpContext } from '@adonisjs/core/http'

export default class RoleMiddleware {
  async handle(
    { auth, response }: HttpContext,
    next: () => Promise<void>,
    roles: string[]
  ) {
    const user = auth.user

    if (!user) {
      return response.unauthorized()
    }

    if (!roles.includes(user.role)) {
      return response.forbidden({
        message: 'No permission',
      })
    }

    await next()
  }
}
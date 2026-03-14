import type { HttpContext } from '@adonisjs/core/http'
import Gateway from '#models/gateway'

export default class GatewaysController {
  async index() {
    return await Gateway.all()
  }

  async store({ request }: HttpContext) {
    const data = request.body()

    const gateway = await Gateway.create({
      name: data.name,
      isActive: data.isActive ?? true,
      priority: data.priority,
    })

    return gateway
  }

  async show({ params }: HttpContext) {
    return await Gateway.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const gateway = await Gateway.findOrFail(params.id)

    const data = request.body()

    gateway.name = data.name ?? gateway.name
    gateway.isActive = data.isActive ?? gateway.isActive
    gateway.priority = data.priority ?? gateway.priority

    await gateway.save()

    return gateway
  }

  async destroy({ params }: HttpContext) {
    const gateway = await Gateway.findOrFail(params.id)

    await gateway.delete()

    return { message: 'deleted' }
  }
}
import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'

export default class ClientsController {
  async index() {
    return await Client.all()
  }

  async store({ request }: HttpContext) {
    const data = request.body()

    const client = await Client.create({
      name: data.name,
      email: data.email,
    })

    return client
  }

  async show({ params }: HttpContext) {
    return await Client.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const client = await Client.findOrFail(params.id)

    const data = request.body()

    client.name = data.name ?? client.name
    client.email = data.email ?? client.email

    await client.save()

    return client
  }

  async destroy({ params }: HttpContext) {
    const client = await Client.findOrFail(params.id)

    await client.delete()

    return { message: 'deleted' }
  }
}
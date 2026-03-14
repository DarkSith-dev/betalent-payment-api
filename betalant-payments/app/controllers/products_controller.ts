import type { HttpContext } from '@adonisjs/core/http'
import Product from '#models/product'

export default class ProductsController {
  async index() {
    return await Product.all()
  }

  async store({ request }: HttpContext) {
    const data = request.body()

    const product = await Product.create({
      name: data.name,
      amount: data.amount,
    })

    return product
  }

  async show({ params }: HttpContext) {
    return await Product.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    const data = request.body()

    product.name = data.name ?? product.name
    product.amount = data.amount ?? product.amount

    await product.save()

    return product
  }

  async destroy({ params }: HttpContext) {
    const product = await Product.findOrFail(params.id)

    await product.delete()

    return { message: 'deleted' }
  }
}
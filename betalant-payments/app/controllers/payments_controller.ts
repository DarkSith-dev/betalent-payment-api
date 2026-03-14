import type { HttpContext } from '@adonisjs/core/http'
import PaymentService from '../Services/PaymentService.js'

export default class PaymentsController {
  private paymentService = new PaymentService()

  async store({ request, response }: HttpContext) {
    try {
      const data = request.body()

      const result = await this.paymentService.createPayment({
        clientId: data.clientId,
        products: data.products,
        cardNumber: data.cardNumber,
        cvv: data.cvv,
      })

      return response.ok(result)
    } catch (error) {
      return response.badRequest({
        message: 'Payment error',
        error,
      })
    }
  }

  async refund({ params, response }: HttpContext) {
    try {
      const transactionId = params.id

      const result = await this.paymentService.refundPayment(transactionId)

      return response.ok(result)
    } catch (error) {
      return response.badRequest({
        message: 'Refund error',
        error,
      })
    }
  }
}
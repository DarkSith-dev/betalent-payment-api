import Transaction from '#models/transaction'
import TransactionProduct from '#models/transaction_product'
import Product from '#models/product'
import Client from '#models/client'
import GatewayManager from '../Gateways/GatewayManeger.js'

export default class PaymentService {
  private gatewayManager = new GatewayManager()

  async createPayment(data: {
    clientId: number
    products: { productId: number; quantity: number }[]
    cardNumber: string
    cvv: string
  }) {

    const client = await Client.findOrFail(data.clientId)

    let totalAmount = 0

    for (const item of data.products) {
      const product = await Product.findOrFail(item.productId)

      totalAmount += product.amount * item.quantity
    }

    const gatewayResult = await this.gatewayManager.createTransaction({
      amount: totalAmount,
      name: client.name,
      email: client.email,
      cardNumber: data.cardNumber,
      cvv: data.cvv,
    })


    const transaction = await Transaction.create({
      clientId: client.id,
      gatewayId: gatewayResult.gateway?.id,
      externalId: gatewayResult.externalId,
      status: gatewayResult.success ? 'success' : 'error',
      amount: totalAmount,
      cardLastNumbers: data.cardNumber.slice(-4),
    })

    for (const item of data.products) {
      await TransactionProduct.create({
        transactionId: transaction.id,
        productId: item.productId,
        quantity: item.quantity,
      })
    }

    return transaction
  }
}
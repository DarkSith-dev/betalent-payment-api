import type { HttpContext } from '@adonisjs/core/http'
import Transaction from '#models/transaction'
import TransactionProduct from '#models/transaction_product'

export default class TransactionsController {

  async index() {
    return await Transaction.all()
  }

  async show({ params }: HttpContext) {
    const transaction = await Transaction.findOrFail(params.id)

    const products = await TransactionProduct
      .query()
      .where('transaction_id', transaction.id)

    return {
      transaction,
      products,
    }
  }

  async byClient({ params }: HttpContext) {
    const transactions = await Transaction
      .query()
      .where('client_id', params.clientId)

    return transactions
  }

}
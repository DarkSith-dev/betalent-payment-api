import axios from 'axios'
import { GatewayInterface } from './GatewayInterface.js'

export default class Gateway2 implements GatewayInterface {
  name = 'gateway2'

  private baseUrl = 'http://localhost:3002'

  private headers = {
    'Gateway-Auth-Token': 'tk_f2198cc671b5289fa856',
    'Gateway-Auth-Secret': '3d15e8ed6131446ea7e3456728b1211f',
  }

  async createTransaction(data: {
    amount: number
    name: string
    email: string
    cardNumber: string
    cvv: string
  }) {
    try {
      const response = await axios.post(
        `${this.baseUrl}/transacoes`,
        {
          valor: data.amount,
          nome: data.name,
          email: data.email,
          numeroCartao: data.cardNumber,
          cvv: data.cvv,
        },
        {
          headers: this.headers,
        }
      )

      return {
        success: true,
        externalId: response.data.id,
      }
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message,
      }
    }
  }

  async refund(externalId: string) {
    try {
      await axios.post(
        `${this.baseUrl}/transacoes/reembolso`,
        {
          id: externalId,
        },
        {
          headers: this.headers,
        }
      )

      return { success: true }
    } catch (error: any) {
      return {
        success: false,
        message: error.message,
      }
    }
  }
}
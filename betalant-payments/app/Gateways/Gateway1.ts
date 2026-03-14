import axios from 'axios'
import { GatewayInterface } from './GatewayInterface.js'

export default class Gateway1 implements GatewayInterface {
  name = 'gateway1'

  private baseUrl = 'http://localhost:3001'

  private token: string | null = null

  async login() {
    const response = await axios.post(`${this.baseUrl}/login`, {
      email: 'dev@betalent.tech',
      token: 'FEC9BB078BF338F464F96B48089EB498',
    })

    this.token = response.data.token
  }

  async createTransaction(data: {
    amount: number
    name: string
    email: string
    cardNumber: string
    cvv: string
  }) {
    try {
      if (!this.token) {
        await this.login()
      }

      const response = await axios.post(
        `${this.baseUrl}/transactions`,
        {
          amount: data.amount,
          name: data.name,
          email: data.email,
          cardNumber: data.cardNumber,
          cvv: data.cvv,
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
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
      if (!this.token) {
        await this.login()
      }

      await axios.post(
        `${this.baseUrl}/transactions/${externalId}/charge_back`,
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
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
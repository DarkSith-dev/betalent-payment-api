import Gateway1 from './Gateway1.js'
import Gateway2 from './Gateway2.js'
import Gateway from '#models/gateway'

export default class GatewayManager {
  private gatewaysMap = {
    gateway1: new Gateway1(),
    gateway2: new Gateway2(),
  }

  async getActiveGateways() {
    const gateways = await Gateway.query()
      .where('is_active', true)
      .orderBy('priority', 'asc')

    return gateways
  }

  async createTransaction(data: {
    amount: number
    name: string
    email: string
    cardNumber: string
    cvv: string
  }) {
    const gateways = await this.getActiveGateways()

    for (const gw of gateways) {
      const gatewayInstance = this.gatewaysMap[gw.name as 'gateway1' | 'gateway2']

      if (!gatewayInstance) continue

      const result = await gatewayInstance.createTransaction(data)

      if (result.success) {
        return {
          success: true,
          gateway: gw,
          externalId: result.externalId,
        }
      }
    }

    return {
      success: false,
      message: 'All gateways failed',
    }
  }

  async refund(gatewayName: string, externalId: string) {
    const gatewayInstance =
      this.gatewaysMap[gatewayName as 'gateway1' | 'gateway2']

    if (!gatewayInstance) {
      return { success: false }
    }

    return gatewayInstance.refund(externalId)
  }
}
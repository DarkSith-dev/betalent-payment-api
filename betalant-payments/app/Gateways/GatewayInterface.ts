export interface GatewayInterface {
  name: string

  createTransaction(data: {
    amount: number
    name: string
    email: string
    cardNumber: string
    cvv: string
  }): Promise<{
    success: boolean
    externalId?: string
    message?: string
  }>

  refund(externalId: string): Promise<{
    success: boolean
    message?: string
  }>
}
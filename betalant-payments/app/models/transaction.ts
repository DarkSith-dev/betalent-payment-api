import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({ columnName: 'client_id' })
  declare clientId: number

  @column({ columnName: 'gateway_id' })
  declare gatewayId: number | null

  @column({ columnName: 'external_id' })
  declare externalId: string | null

  @column()
  declare status: string

  @column()
  declare amount: number

  @column({ columnName: 'card_last_numbers' })
  declare cardLastNumbers: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
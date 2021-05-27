export class BankAccount {
  constructor() {
    this.activo = false
  }

  open() {
    this.failIfCondition(this.activo)
    this.plata = 0
    this.activo = true
  }

  close() {
    this.failIfCondition(!this.activo)
    this.activo = false
  }

  deposit(monto) {
    this.failIfCondition(!this.activo || monto < 0)
    this.plata = this.plata + monto
  }

  withdraw(monto) {
    this.failIfCondition(!this.activo || monto > this.plata || monto < 0)
    this.plata = this.plata - monto
  }

  set balance(monto) {
    this.failIfCondition(!this.activo)
    this.plata = this.plata + monto
  }

  get balance() {
    this.failIfCondition(!this.activo)
    return this.plata
  }

  failIfCondition(condicion) {
    if(condicion) throw new ValueError()
  }
}

export class ValueError extends Error {
  constructor() {
    super('Error en la cuenta bancaria');
  }
}

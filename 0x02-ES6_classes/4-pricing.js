export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amt) {
    this._amount = amt;
  }

  // getter and setter for currency
  get currency() {
    return this.currency;
  }

  set currency(cur) {
    this._currency = cur;
  }

  /* Implement a method named displayFullPrice that
  returns the attributes in the following format */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

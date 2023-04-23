export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  // getter
  get code() {
    return this._code;
  }

  // setter
  set code(symbol) {
    this._code = symbol;
  }

  // name getter
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    const s = this._code;
    const c = this._name;
    const t = `${c} (${s})`;
    return (t);
  }
}

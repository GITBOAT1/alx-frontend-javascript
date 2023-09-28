export default class Airport {
  constructor(name, code) {
    this._name = this._checkString(name, 'Name');
    this._code = this._checkString(code, 'code');
  }

  // eslint-disable-next-line class-methods-use-this
  _checkString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
    return value;
  }

}
export default class Building {
  constructor(sqft) {
    this._sqft = this._checkNumber(sqft, 'Name');
  }

  get sqft() {
    return this._sqft;
  }

  // eslint-disable-next-line class-methods-use-this
  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  // eslint-disable-next-line class-methods-use-this
  _checkNumber(value, name) {
    if (typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    }
    return value;
  }
}

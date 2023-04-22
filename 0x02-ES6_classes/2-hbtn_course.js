export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._checkString(name, 'Name');
    this._length = this._checkNumber(length, 'Length');
    this._students = this._checkArray(students, 'Students');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._checkString(value, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = this._checkNumber(value, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(value) {
    this._students = this._checkArray(value, 'Students');
  }

  // eslint-disable-next-line class-methods-use-this
  _checkString(value, name) {
    if (typeof value !== 'string') {
      throw new TypeError(`${name} must be a string`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkNumber(value, name) {
    if (typeof value !== 'number') {
      throw new TypeError(`${name} must be a number`);
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  _checkArray(value, name) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${name} must be an array`);
    }
    return value;
  }
}

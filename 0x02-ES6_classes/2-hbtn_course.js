export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students) || !students.every((s) => typeof s === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._student = students;
  }

  /* getters */
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  /* setters */
  set name(name) {
    this._name = name;
  }

  set length(l) {
    this._length = this.length;
  }

  set students(stu) {
    this.students = stu;
  }
}

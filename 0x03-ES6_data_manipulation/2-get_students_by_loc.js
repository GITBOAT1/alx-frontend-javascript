export default function (students, city) {
  return students.filter((student) => student.location === city);
}

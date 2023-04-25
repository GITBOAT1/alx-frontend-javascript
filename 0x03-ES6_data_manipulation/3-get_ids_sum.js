export default function (students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

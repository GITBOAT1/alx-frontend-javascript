export default function createEmployeesObject(departmentName, employees) {
  const company = { [departmentName]: employees };
  return (company);
}

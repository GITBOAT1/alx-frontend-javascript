export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const employee of employeesList) {
    const department = employee.department;
    if (!allEmployees[department]) {
      allEmployees[department] = [];
    }
    allEmployees[department].push(employee.name);
  }

  return {
    allEmployees,
    getNumberOfDepartments: function() {
      return Object.keys(allEmployees).length;
    },
  };
}

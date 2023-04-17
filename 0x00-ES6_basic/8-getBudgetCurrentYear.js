function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
With this modification, the properties of the budget object are defined using computed property names, which allows us to use an expression to compute the property name. In this case, we're using the getCurrentYear function to compute the year and include it in the property name. This makes the code more concise and easier to read.

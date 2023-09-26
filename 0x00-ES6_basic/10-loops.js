export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const myarray = [...array];
  for (const value of myarray) {
    myarray[index] = appendString + value;
    index += 1;
  }

  return myarray;
}

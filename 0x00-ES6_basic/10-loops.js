export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const value of array) {
    array[index] = appendString + value;
    index = index + 1;
  }

  return array;
}

export default function hasValuesFromArray(set, arr) {
  for (const val of arr) {
    if (!set.has(val)) {
      return false;
    }
  }
  return true;
}

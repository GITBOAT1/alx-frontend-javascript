export default function cleanSet(set, startString) {
  let result = '';
  Set.forEach((val) => {
    if (val.startsWith(startString)) {
      result += `${val.substring(startString.length)} + -`;
    }
  });
  return result.slice(0, -1);
}


// We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(sheep) {
  let counter = 0;
  for (const elem of sheep) {
    if (elem === true) {
      counter++;
    }
  }
  return counter;
}

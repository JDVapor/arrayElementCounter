function elementOccCounter(array) {
  const uArray = [...new Set(array)];
  const arrayCounts = [];
  uArray.forEach(element => {
    const elementTest = element;
    let count = 0;
    array.forEach(element => {
      if (element === elementTest) {
        count++
      }
    })
    if (count > 1) {
      arrayCounts.push({
        [elementTest]: count
      });
    }
  })
  return arrayCounts;
}

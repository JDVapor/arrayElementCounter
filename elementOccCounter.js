function elementOccCounter(array) {
  const uArray = [...new Set(array)];
  const arrayCounts = [];
  uArray.forEach(num => {
    const numTest = num;
    let count = 0;
    array.forEach(num => {
      if (num === numTest) {
        count++
      }
    })
    if (count > 1) {
      arrayCounts.push({
        [numTest]: count
      });
    }
  })
  return arrayCounts;
}

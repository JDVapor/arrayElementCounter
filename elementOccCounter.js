function elementOccCounter(array) {
  const uArray = [...new Set(array)];
  const arrayCounts = {};
  uArray.forEach(element => {
    const elementTest = element;
    let count = 0;
    array.map(element => {
      if (element === elementTest) {
        count++
      }
    })
    arrayCounts[elementTest]= count
  })
  return arrayCounts;
}

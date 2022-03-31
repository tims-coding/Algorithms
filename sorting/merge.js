const array = [6, 22, 1, 13, 104, 6, 63, 39, 14, 70, 19, 2, 8, 45];

const len = array.length;

const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let leftArr = array.slice(0, middleIndex);
  let rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));

  function merge(leftArr, rightArr) {
    let results = [];
    let leftIdx = 0;
    let rightIdx = 0;

    while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
      let leftVal = leftArr[leftIdx];
      let rightVal = rightArr[rightIdx];
      if (leftVal < rightVal) {
        results.push(leftVal);
        leftIdx++;
      } else {
        results.push(rightVal);
        rightIdx++;
      }
    }
    return [...results, ...leftArr.slice(leftIdx), ...rightArr.slice(rightIdx)];
  }
}

console.log(mergeSort(array));

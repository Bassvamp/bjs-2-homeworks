function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce(function(acc, val){
    return acc + val;
  });
  const avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  return arr.reduce(function(acc, val) {
    return acc + val;
  });
}

function differenceMaxMinWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  let sumEvenElements = 0;
  let sumOddElements = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
    } else {
      sumOddElements += arr[i];}
  }
  return sumEvenElements - sumOddElements;
}

function averageEvenElementsWorker(...arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  let sumEvenElements = 0;
  let counterEvenElements = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      counterEvenElements++;
    }
  }
  return sumEvenElements / counterEvenElements;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++) {
    const sum = func(...arrOfArr[i]);
    if(sum > maxWorkerResult) {
      maxWorkerResult = sum;
    }
  }
  return maxWorkerResult;
}

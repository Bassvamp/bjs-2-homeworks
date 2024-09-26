"use strict"
function solveEquation(a, b, c) {
  let discriminant = (Math.pow(b, 2)) - (4 * a * c);
  let arr = [];
  
  if(discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  }

  if(discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const percentInMonth = percent / 100 / 12;
  let body = amount - contribution;
  let payment = body * (percentInMonth + (percentInMonth / ((Math.pow((1 + percentInMonth), countMonths) - 1))));
  return parseFloat((countMonths * payment).toFixed(2));
}



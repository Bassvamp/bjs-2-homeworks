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
  percent = percent / 100 / 12;
  let body = amount - contribution;
  let payment = body * (percent + (percent / ((Math.pow((1 + percent), countMonths) - 1))));
  let total = parseFloat((countMonths * payment).toFixed(2));
  return total
}



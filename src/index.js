module.exports = function getZerosCount(number, base) {
  var ins = base;
  var multiples = [];
  var collectsNumber = [];
  for (i = 2; i <= base; i++) {
    /* цикл для определения множителей*/
    if (ins % i == 0) {
      ins = ins / i;
      multiples.push(i);
      i = i - 1;
    }
  }
  console.log(multiples);
  var gg = 0;
  simils = 1;
  i = 1;
  do {
    if (multiples[gg] == multiples[i]) {
      simils = simils + 1;
      i = i + 1;
    } else {
      collectsNumber.push(multiples[gg]);
      collectsNumber.push(simils);
      gg = gg + simils;
      simils = 1;
      i = i + 1;
    }
  } while (i <= multiples.length);
  console.log(collectsNumber);
  var min = undefined;
  var degree = 0;
  for (i = 0; i < collectsNumber.length; i = i + 2) {
    for (z = 1; Math.floor(number / Math.pow(collectsNumber[i], z)) >= 1; z++) {
      degree = degree + Math.floor(number / Math.pow(collectsNumber[i], z));
    }
    var potential = Math.floor(degree / collectsNumber[i + 1]);
    if (potential < min || min == undefined) {
      min = potential;
      degree = 0;
    }
    degree = 0;
  }
  return min;
};

// Create a function that calculates the number of ways you can get the sum n with coins

const getSum = function(amount) {
  let ways = 0;
  const denoms = [25, 10, 5, 1];

  const calculate = function(amount, index) {
    if(index >= denoms.length - 1) {
      ways++;
      return;
    }
    currentDenom = denoms[index];
    for(let i = 0; i * currentDenom <= amount; i++){
      remainingAmount = amount - i * currentDenom;
      calculate(remainingAmount, index + 1 )
    }
  }

  calculate(amount, 0);
  return ways;
}

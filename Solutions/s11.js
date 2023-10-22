//https://edabit.com/challenge/tYHkTdFrEmWfxpPKF

function matchHouses(step){
    if (step=== 0) {
      return 0;
    } else if (step < 0 || typeof step !== "number") {
      return "The input (step) will always be a non-negative integer."
    } else {
      let result;
      result= (5 * step) + 1;
      return result;
    }
    
  };
  
  console.log(matchHouses(0));
  console.log(matchHouses(1));
  console.log(matchHouses(5));
  console.log(matchHouses(76));
  console.log(matchHouses("9"));
  console.log(matchHouses("hello"));


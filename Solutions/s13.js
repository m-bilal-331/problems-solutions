//https://edabit.com/challenge/Q3n42rEWanZSTmsJm

function minMax(arr) {
    if (arr.length === 0) {
      return [undefined, undefined];
    }
  
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return [min, max];
  }
  
  // Example usage:
  const arr = [12,74,929,3,0,83];
  const [min, max] = minMax(arr);
  console.log([min,max]);
  
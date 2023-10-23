//https://edabit.com/challenge/hPWnaSckJke5FXNEH

function isChristmasEve(date) {
    const month = date.getMonth(); 
    const day = date.getDate();
  
    return month === 11 && day === 24;
  }
 
  const today = new Date();
  const isItChristmasEve = isChristmasEve(today);
  console.log(isItChristmasEve); 
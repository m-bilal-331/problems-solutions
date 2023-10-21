//https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
	let sum = 0;
	for(let i =1; i<=num; i++){
		sum += i;
	}
	return sum;
}

const add = addUp(4);
console.log(add);
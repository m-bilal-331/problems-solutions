//https://edabit.com/challenge/vvuAkYEAArrZvmp6X


function bitwiseAND(n1, n2) {
	return n1 & n2;
}

function bitwiseOR(n1, n2) {
	return n1 | n2;
}

function bitwiseXOR(n1, n2) {
	return n1 ^ n2;
}
const num = bitwiseAND(6,23);
console.log(num.toString(2));

const num1 = bitwiseOR(6,23);
console.log(num1.toString(2));

const num2 = bitwiseXOR(6,23);
console.log(num2.toString(2));
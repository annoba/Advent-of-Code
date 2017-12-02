/* given several rows of numbers, 
find the two numbers where one evenly divides the other,
add the result of each row = result */

/* test array
const matrix = [
[5,9,2,8],
[9,4,7,3],
[3,8,6,5]
];
*/
let prevResult=0;
let result=0;
let matrixRow;
let dividend;
let divisor;
for (var x = 0; x<matrix.length;x++){
	matrixRow = matrix[x];
	for (var y = 0; y<matrixRow.length;y++){
		dividend=matrixRow[y];
		for (var y2 = 0; y2<matrixRow.length;y2++){
			divisor=matrixRow[y2];
			if ((dividend !== divisor) &&  (dividend%divisor) === 0) {
				result+=(dividend/divisor);
				
			}
			if (result > prevResult){
				prevResult = result;
				break;
			}
		}
	}
}

console.log(result);

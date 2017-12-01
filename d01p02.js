let input = "12344321"; 	// input number as string
let sum=0; 	// initialze a variable to store the result
let length = input.length;	// store string length in var
let jump = length/2;	// define jump length
input+=input.substr(0,(jump-1));	// add first half of string to end, to enable checking of all chars
/* loop over string to check char with the one that is exactly (length/2) steps ahead, and if match, add current number value to sum */
for (let i=0; i<(length);i++){
    if (input[i] === input[i+(jump)]){
        sum+=Number(input[i]);
    }
}
    console.log(sum); // print result

// 3. Count digits in Number 

// Time Complexity -> O(n)
let num = 1234;

const numLengthOn = num => {
    num = Math.abs(num)
    let count = 0;
    if(num===0){
        return 1;
    }
    while (num > 0) {
        num = Math.floor(num / 10)
        count++;
    }
    return count;
}
console.log(numLengthOn(num));

// using Log10
// Time Complexity - > O(1)
const numLengthO1 = num => (Math.floor(Math.log10(num)) + 1);
console.log(`length of ${num} is ${numLengthO1(num)}`);

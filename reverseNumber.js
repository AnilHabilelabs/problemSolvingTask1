// 4. Print Reverse of a number 
const reverseNum = num => {
    let reverse = 0;
    while (num > 0) {
        reverse = reverse * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reverse;
}
let num = 1234
console.log(`Reverse of ${num} is ${reverseNum(num)}`);
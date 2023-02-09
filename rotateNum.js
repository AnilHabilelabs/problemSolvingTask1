// 5. Rotate a number. 
let n = 12345;
k = -8;

const rotateNUM = (n, k) => {
    count = 0;
    let temp = n;
    while (temp > 0) {
        temp = parseInt(temp / 10);
        count++;
    }
    if (k > count || k < count) {
        k %= count;
    }
    if (k < 0) {
        k = count + k;
    }
    let div = 1;
    let mul = 1;
    for (let i = 1; i <= count; i++) {
        if (i <= k) {
            div *= 10;
        }
        else {
            mul *= 10;
        }
    }
    let q = n / div;
    let r = n % div;
    let result = parseInt(r * mul + q);
    return result;
}

console.log(rotateNUM(n, k));
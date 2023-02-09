// 2.Print Fibonacci series till N value. 
const fib = n => {
    let a = 0;
    let b = 1;
    if (n === 0) {
        console.log(a);
        return
    }
    if (n === 1) {
        console.log(a, b);
        return
    }
    else {
        for (let i = 0; i < n; i++) {
            console.log(a);
            let c = a + b;
            a = b;
            b = c;
        }
    }

}
console.log(fib(5));
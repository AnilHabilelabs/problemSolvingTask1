const normalStarPattern = n => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(`*`);
        }
        console.log();
    }
}
console.log("1. pattern");
normalStarPattern(5);
console.log();
const ReverseNormalStarPattern = n => {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            process.stdout.write(`*`);
        }
        console.log();
    }
}
console.log("2. pattern");
ReverseNormalStarPattern(5);

const nPattern = n => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
}
console.log("3. pattern");
nPattern(5);

const DownNPattern = n => {
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(`${j}`);
        }
        console.log();
    }
}
console.log("4. pattern");
DownNPattern(5);

const pyramidPattern = n => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < n - i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            process.stdout.write("*")
        }
        console.log();
    }
}
console.log("5. pattern");
pyramidPattern(5)

reversePyramid = n => {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            process.stdout.write(" ");
        }
        for (let k = 0; k <= 2 * (n-i) ; k++) {
            process.stdout.write("*")
        }
        console.log();
    }
}
console.log("6. pattern");
reversePyramid(5);
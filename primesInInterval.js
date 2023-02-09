// Print all primes number between these inputs. 
// Take two inputs 
// Input1 
// Input2 

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimesInInterval(start,end){
    const primes = [];
    for(let i=start;i<=end;i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

let primesIn100to200 = findPrimesInInterval(100,200);
console.log(primesIn100to200);
const fs = require('fs');
setTimeout(() => console.log('Timeout'), 0);

function fibo(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        setImmediate(() =>
            Promise.all([fibo(n - 1), fibo(n - 2)]).then(([fib1, fib2]) =>
                resolve(fib1 + fib2)
            )
        );
    });
}

// Heap out of memory
fibo(40).then((res) => console.log(res));

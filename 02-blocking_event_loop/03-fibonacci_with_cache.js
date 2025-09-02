setTimeout(() => console.log('Timeout'), 0);

const cache = new Map();

function fibo(n) {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }
        if (cache.has(n)) {
            return resolve(cache.get(n));
        }
        setImmediate(() =>
            fibo(n - 1).then((fib1) =>
                fibo(n - 2).then((fib2) => {
                    cache.set(n, fib1 + fib2);
                    resolve(fib1 + fib2);
                })
            )
        );
    });
}

fibo(100).then((res) => console.log(res));

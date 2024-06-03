/* 
    手写一个 Promise.all 方法需要实现一个函数，该函数接收一个包含多个 Promise 对象的数组，并返回一个新的 Promise。
    这些 Promise 对象全部完成后，新 Promise 将解析为包含每个输入 Promise 结果的数组。
    如果任何一个 Promise 被拒绝，新 Promise 也会被拒绝，并返回第一个被拒绝的 Promise 的原因。
*/
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        let resolvedCount = 0;
        const results = [];
        const promiseCount = promises.length;

        if (promiseCount === 0) {
            return resolve(results); // If the input array is empty, resolve immediately with an empty array
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    resolvedCount++;
                    if (resolvedCount === promiseCount) {
                        resolve(results); // Resolve the main Promise when all Promises are resolved
                    }
                })
                .catch(error => {
                    reject(error); // Reject the main Promise if any Promise is rejected
                });
        });
    });
}

// Example usage:
const promise1 = Promise.resolve(3);
const promise2 = 42; // This will be treated as Promise.resolve(42)
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

myPromiseAll([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [3, 42, "foo"]
    })
    .catch(error => {
        console.error(error);
    });

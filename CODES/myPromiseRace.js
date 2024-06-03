/* 
    Promise.race 是一个静态方法，它接受一个包含多个 Promise 的可迭代对象，并返回一个新的 Promise。
    一旦可迭代对象中的一个 Promise 解决或拒绝，新的 Promise 就会解决或拒绝，且该 Promise 的结果是第一个完成的 Promise 的结果。
*/

function myPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        for (let promise of promises) {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        }
    });
}

// Example usage:
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

myPromiseRace([promise1, promise2])
    .then(value => {
        console.log(value); // "two" - because promise2 resolves first
    })
    .catch(error => {
        console.error(error);
    });

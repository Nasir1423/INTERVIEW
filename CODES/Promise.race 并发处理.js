// 创建三个模拟任务的Promise
const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 1 completed");
    }, Math.random() * 2000); // 模拟一个随机时间的任务
});

const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 2 completed");
    }, Math.random() * 2000);
});

const task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 3 completed");
    }, Math.random() * 2000);
});

// 使用Promise.race()来并发执行任务
Promise.race([task1, task2, task3])
    .then((result) => {
        console.log("First task completed:", result);
        // 在这里可以处理第一个完成的任务的结果
    })
    .catch((error) => {
        console.error("Error occurred:", error);
        // 如果有任何一个任务失败，会在这里处理错误
    });

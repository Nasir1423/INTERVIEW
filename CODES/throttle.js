/* 节流 */
function throttle(func, wait) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
            lastTime = now;
            func()
            // func.apply(this, args);
        }
    }
}

// 示例：窗口滚动事件处理
window.addEventListener("scroll", throttle(() => {
    // 执行滚动处理操作
    console.log("Scrolling");
}))
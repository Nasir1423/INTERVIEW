/* 防抖 */
function debounce(func, wait) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        // timer = setTimeout(() => func.apply(this, args), wait);
        timer = setTimeout(func, wait);
    }
}

// 示例：实时搜索输入框
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(() => {
    // 执行搜索查询操作
    console.log("Searching");
}, 3000))
/* 实现思路1：将查询字符串转换为一个对象 queryObj，然后通过 queryObj[key] 的方式获取键值 */
/**
 * @param {String} url 网址
 * @param {String} key 查询字符串的键
 * @returns {String} url 中查询字符串中键名为 key 的值 value
 */
// const getUrlQuery = (url, key) => {
//     const queryString = url.split("?")[1]; // e.g. a=1&b=2
//     if (!queryString) return undefined; // 确保包含查询字符串
//     const queryStrArr = queryString.split("&"); // e.g. [ 'a=1', 'b=2' ]
//     const queryObj = {};

//     queryStrArr.forEach(qStr => {
//         let [k, v] = qStr.split("=");
//         queryObj[k] = v;
//     })
//     return queryObj[key];
// };

/* 实现思路2：使用内置 Web API URLSearchParams 处理 URL 查询字符串，可以用于解析、构建和操作查询字符串中的参数 */
/* 首先，创建 URLSearchParams 对象：const params = new URLSearchParams(queryString) */
/* 该对象可以调用 params.get("键名") 获取特定参数的值，params.set("键名", "键值") 添加和修改参数，params.delete("键名") 删除参数 */
/**
 * @param {String} url 网址
 * @param {String} key 查询字符串的键
 * @returns {String} url 中查询字符串中键名为 key 的值 value
 */
const getUrlQuery = (url, key) => {
    const queryString = url.split("?")[1]; // e.g. a=1&b=2
    if (!queryString) return undefined; // 确保包含查询字符串
    
    const params = new URLSearchParams(queryString); // 使用 URLSearchParams 解析查询字符串
    return params.get(key) || undefined;
};

// 测试用例
const testCases = [
    { url: "http://example.com?a=1&b=2", key: "a", expected: "1" },
    { url: "http://example.com?a=1&b=2", key: "b", expected: "2" },
    { url: "http://example.com?a=1&b=2", key: "c", expected: undefined },
    { url: "http://example.com", key: "a", expected: undefined },
    { url: "http://example.com?a=hello&b=world", key: "a", expected: "hello" },
    { url: "http://example.com?a=hello&b=world", key: "b", expected: "world" },
    { url: "http://example.com?name=John&Doe=Jane", key: "name", expected: "John" },
    { url: "http://example.com?name=John&Doe=Jane", key: "Doe", expected: "Jane" }
];

testCases.forEach(({ url, key, expected }, index) => {
    const result = getUrlQuery(url, key);
    console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected}, got ${result}`);
});

console.log("All test cases passed!");

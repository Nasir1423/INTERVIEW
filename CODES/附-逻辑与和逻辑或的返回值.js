/* a || b 表示 “如果 a 为真，则返回 a；否则返回 b”。 */
/* 对于 ||，一旦找到真值，它就会立即返回，不再评估后面的操作数。 */
console.log(0 || "default");       // 输出 "default"（0 是假值）
console.log("non-empty" || "default"); // 输出 "non-empty"（非空字符串是真值）
console.log(false || true);        // 输出 true（false 是假值）
console.log(undefined || "fallback"); // 输出 "fallback"（undefined 是假值）
console.log(null || 0 || "foo");   // 输出 "foo"（null 和 0 都是假值）

/* a && b 表示 “如果 a 为假，则返回 a；否则返回 b”。 */
/* 对于 &&，一旦找到假值，它就会立即返回，不再评估后面的操作数。 */
console.log(true && "value");       // 输出 "value"（true 是真值）
console.log(false && "value");      // 输出 false（false 是假值）
console.log("text" && null);        // 输出 null（"text" 是真值，但 null 是假值）
console.log("first" && "second");   // 输出 "second"（"first" 是真值）
console.log(0 && 1);                // 输出 0（0 是假值）
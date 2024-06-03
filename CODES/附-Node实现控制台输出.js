const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('请输入内容：', (input) => {
    console.log(`你输入了：${input}`);
    readline.close();
});
# 浏览器端不用第三方包也可以获取md5值

## 双主角

### crypto

### FileReader

## 隐藏的孪生兄弟

### atob和btoa

## 关键代码
``` javascript
// 将reader方法封装成Promisify 
async readFileData(fileReader, file) {
  return new Promise((resolve, reject) => {
    fileReader.addEventListener('load', (ev) => {
      resolve(ev.target.result);
    });
    fileReader.readAsArrayBuffer(file);
  });
}

// 代码调用
const reader = new FileReader();
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
let fileBuff = await that.readFileData(reader, file);
fileBuff = Buffer.from(fileBuff);
md5Str = md5.update(fileBuff).digest('hex');
```
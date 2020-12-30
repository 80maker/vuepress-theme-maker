---
date: 2020-11-26
category: frontend
title: 浏览器端不用第三方包也可以获取md5值
desc: <blockquote>
        <p>利益于JS的同构特性,crypto虽然是Node.js的自带模块,但同时也能用于Web浏览器端。</p>
      </blockquote>
---

[[toc]]

## 双主角

### crypto

::: warning
这家伙是nodejs自带模块,测试了下在浏览器端也能正常使用
:::

### FileReader

## 隐藏的孪生兄弟

### atob和btoa

## 关键代码
``` js {5}
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
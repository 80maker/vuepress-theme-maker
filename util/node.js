const { path, fileToPath } = require('@vuepress/shared-utils')
const fs = require("fs");
function listFile(dir){
  const list = [];
  const arr = fs.readdirSync(dir);
  arr.forEach(function(item){
    const fullpath = path.join(dir,item);
    const stats = fs.statSync(fullpath);
    if(stats.isFile()){
      list.push(fileToPath(item));
    }
  });
  return list;
}

module.exports = {
  listFile
}
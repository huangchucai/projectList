const colorMap = {
    "Black": "\x1b[30m",
    "Red": "\x1b[31m",
    "Green": "\x1b[32m",
    "Yellow": "\x1b[33m",
    "Blue": "\x1b[34m",
    "Magenta": "\x1b[35m",
    "Cyan": "\x1b[36m",
    "White": "\x1b[37m"
};
// 得到集合
let colors = (function(){
  let result = [];
  Object.keys(colorMap).forEach((key)=>{
     result.push(colorMap[key]) 
  })
  return result;
})()

//获取随机的颜色
function pickRandomColor() {
  let index =parseInt(Math.random() * colors.length);
  return colors[index];
}

module.exports = {
  // ...rest参数
  colorLog: function(...args) {
    let color = pickRandomColor();
    // 数组解构
    console.log(color,...args);
  }
}

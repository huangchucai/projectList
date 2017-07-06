### 浏览器的bug

1. 浏览器会默认模拟的是980px  （所以需要设置<meta name="viewport" content="width=device-width ,....）

### 动态REM移动端方案

#### 1. 把html的font-size设置成设计稿的宽度

```html
<meta name="viewport" content="width=device-width ,initial-scale=1,maximum-scale=1,minimum-scale=1" >  <!--如果不设置width= device-width,则浏览器默认模拟的是980px-->
<script>
  var css = `html{
	font-size: 320px
  }`	
  document.write(`<style>${css}</style>`)
<script>  
```

1. 设计稿页面的宽度 === 320px === html的font-size
2. 1rem === html的font-size
3. 由1和2 推出 1rem = 设计稿页面的宽度

#### 2. 根据设备的尺寸调正html的font-size

把html的font-size*修改后的数据

```html
<meta name="viewport" content="width=device-width ,initial-scale=1,maximum-scale=1,minimum-scale=1" >  <!--如果不设置width= device-width,则浏览器默认模拟的是980px-->
<script>
  var width = document.documentElement.clientWidth  //如果不设置宽度，浏览器默认模拟的是980px
  var scale = width/320;
  console.log(scale)
  var css = `html{
	font-size: ${320*scale}px
  }`	
  document.write(`<style>${css}</style>`)
</script>  
```

1. 实际页面的宽度 === ? === html的font-size
2. 1rem === 实际页面的宽度

#### 3. 设置好font-size后根据比例换成rem

统一根据`自身尺寸/设计稿尺寸`来设置rem




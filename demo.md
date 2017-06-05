title: null
speaker: 胡文哲
url: https://github.com/ksky521/nodePPT
transition: ""
files: /js/demo.js,/css/demo.css

[slide data-transition="horizontal3d"]

# es6基础
## 演讲者：胡文哲

[slide data-transition="horizontal"]

url:https://zhufengnodejs.github.io/doc/
# 封面样式2 {:&.flexbox.vleft}
## 左对齐

[slide style="background-image:url('/img/bg1.png')" data-transition="vertical3d"]

## 使用背景

[slide data-transition="zoomin"]
## 使用.class/#id/自定义属性样式
----

```javascript
alert('nodeppt');
```

[slide data-transition="zoomout"]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.2

Github：https://github.com/ksky521/nodePPT

[slide data-transition="cards"]

## 结束
[code]
<div class="file-setting">
	这是html
</div>
<p id="css-demo">这是css样式</p>
使用[code][/code]包裹的代码，会直接插入到页面
具体看下项目中 ppts/demo.md 代码
<script>
	function testScriptTag(){

	}
	console.log(typeof testScriptTag);
</script>
<style>
#css-demo{
	color: red;
}
</style>
[/code]

[slide data-outcallback="outcallback" data-incallback="incallback"]

## 当进入此页，就执行incallback函数
## 当离开此页面，就执行outcallback函数
[code]
<script>
function incallback(){
  alert("进来了")
}

function outcallback(){
  alert("出去了")
}
</script>
[/code]

[slide]

<iframe data-src="http://www.google.com/doodle4google/resources/history.html" src="about:blank;"></iframe>

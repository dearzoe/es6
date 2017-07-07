title: es6基础
speaker: 胡文哲
url: http://es6.ruanyifeng.com/
transition: "code"
files: /js/demo.js,/css/demo.css
theme: color
highlightStyle: monokai_sublime
usemathjax: yes
date:2017-5-51

[slide style="background-image:url('/img/bg1.png')" data-transition="horizontal3d"]

# ECMAScript 6 入门
## 参考：ECMAScript 6 入门（阮一峰）
http://es6.ruanyifeng.com/

[slide data-transition="horizontal"]

# 作用域变量  {:&.flexbox.vleft}
## var的问题
- var没有块级作用域，定义后在当前闭包中都可以访问，如果变量名重复，就会覆盖前面定义的变量，并且也有可能被其他人更改。
```
if (true) {
     var a = "a"; // 期望a是某一个值
 }
console.log(a);
```
[slide]

# let实现块级作用域
- 现在用了**let**，不仅仅可以通过闭包隔离，还增加了一些块级作用域隔离。 块级作用用一组大括号定义一个块,使用 let 定义的变量在大括号的外面是访问不到的

## 实现块级作用域
```
if(true){
    let name = 'huwenzhe';
}
console.log(name);// ReferenceError: name is not defined
```
## for循环中也可以使用i
```
// 嵌套循环不会相互影响
    for (let i = 0; i < 3; i++) {
        console.log("out", i);
        for (let i = 0; i < 2; i++) {
            console.log("in", i);
        }
    }
```

[slide]

## 重复定义会报错
```
if(true){
    let a = 1;
    let a = 2; //Identifier 'a' has already been declared
}
```

## 不存在变量的预解释
```
for (let i = 0; i < 2; i ++){
    console.log('inner',i);//结果 i is not defined
    let i = 100;
}
```

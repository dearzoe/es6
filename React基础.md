title: React基础
speaker: 胡文哲
url: https://github.com/ksky521/nodePPT
transition: cards
files: /js/demo.js,/css/demo.css
theme: color
highlightStyle: monokai_sublime
usemathjax: yes
date:2017-6-19

[slide style="background-image:url('/img/bg1.png')"]

# React基础
## 演讲者：胡文哲

[slide]

# 1. 什么是react {:&.flexbox.vleft}
## React 是一个用于构建用户界面的JavaScript库;

[slide]

# 2. 安装react {:&.flexbox.vleft}
```
$ bower install react babel --save
```

[slide]

# 3. 直接在浏览器中使用React {:&.flexbox.vleft}
```
//react.js 是 React 的核心库
<script src="./bower_components/react/react.js"></script>
//react-dom.js 是提供与DOM相关的功能,会在window下增加ReactDOM属性
<script src="./bower_components/react/react-dom.js"></script>
//browser.js 的作用是将JSX语法转为JavaScript语法
<script src="./bower_components/babel/browser.js"></script>
```
**script中的type属性为text/babel,因为React独有的JSX语法,跟JavaScript不兼容**

[slide]

# 4. ReactDOM.render {:&.flexbox.vleft}
```
<div id="app"></div>
<script type="text/babel" src="js/1.react.js"/>
```
```
ReactDOM.render(
<h1>广州大麦电商</h1>,
	document.getElementById('app');
);
```
**上面代码将一个h1标题，插入app元素内部**

[slide]

# 5. JSX 语法 {:&.flexbox.vleft}
**是一种JS和HTML混合的语法,将组件的结构、数据甚至样式都聚合在一起定义组件,会编译成普通的Javascript。**
-遇到HTML标签(以 < 开头)，就用HTML规则解析
-遇到代码块(以 { 开头)，就用JavaScript规则解析
-使用样式时可以让style等于一个样式对象
-使用样式类时只能使用className=类名,因为class是Javascript关键字
```
var persons = ['刘德华', '范冰冰', '郭跃'];
var style = {color:'red','font-size':'20px'};
ReactDOM.render(
<div>
{
	persons.map(function (person) {
	return <div style={style}>Hello, {person}!</div>
})
}
</div>,
	document.getElementById('app')
);
```

[slide]

# 6. 定义组件
[magic]
====
**React允许将代码封装成组件，然后像插入普通HTML标签一样，在网页中插入这个组件**
- 组件类的第一个字母必须大写
- 组件类能且只能包含一个顶层标签
```
var Message = React.createClass({
	render: function() {
		return <h1>HelloWorld!</h1>;
	}
});
ReactDOM.render(
<Message/>,
	document.getElementById('app')
);
```
====
## 6.1 组件的属性
- 属性一般用作组件的数据源，一般由父组件传入,比如你的名字一般是由你父母取的
- 属性可以通过**this.props**中取出
- **propTypes**可以用来定义传入组件属性的名称和类型
- **getDefaultProps**函数可以用来定会引起组件的默认属性
```
var Person = React.createClass({
    //类似于约定了一个接口文档,用于这是验证传递给组件的属性.
    propTypes: {
        //定义msg的属性类型为字符串，必须传入
        name: React.PropTypes.string.isRequired,
        gender: React.PropTypes.string.isRequired,
        age:React.PropTypes.number.isRequired
    },
    getDefaultProps:function(){
        return {name:'无名氏'}
    },
    render: function() {
        //属性可以通过属性对象this.props中取出
        return (<div>
                     {this.props.name}
                     {this.props.gender}
                     {this.props.age}
                </div>);
    }
});
var props = {
    gender:'男',
    age:18
}
ReactDOM.render(
    <Person {...props} />,//属性可以在使用组件时传入
    document.getElementById('app')
);
```
====
## 6.2 this.props.children
**this.props**对象的属性与组件实例的属性一一对应,但**this.props.children**属性表示组件的所有子节点 **React.Children.map**是一个工具方法，用于实现对数组元素的映射
```
var Person = React.createClass({
    render: function() {
      return (
            <ol>
                {
                    React.Children.map(this.props.children,
                      function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
      );
    }
});

ReactDOM.render(
    <Person>
        <span>大毛</span>
        <span>二毛</span>
        <span>三毛</span>
    </Person>,
    document.getElementById('app')
);
```
====
## 6.3 state状态
- 组件的状态就像人的心情，会经常变化，而且只能由自己来改变
- 组件一开始有一个初始状态,然后用户互动,导致状态变化，从而触发界面重新渲染
- **getInitialState**用来定义初始状态
- 可以给按钮绑定事件，当事件发生的时候调用对应的方法改变组件的状态
```
var Person = React.createClass({
    getInitialState: function() {
        return {happy: true};
    },
    getDefaultProps:function(){
        return {name:'无名氏'};
    },
    handleClick: function(event) {
        this.setState({happy: !this.state.happy});
    },
    render: function() {
        var heart = this.state.happy ? '开心' : '不开心';
        return (
            <p >
                 {this.props.name} {heart} <br/>
                 <button onClick={this.handleClick}>变心</button>
            </p>
        );
    }
});
ReactDOM.render(
    <Person name="张三" />,
    document.getElementById('app')
);
```
====
## 6.4 表单元素双向数据绑定
### 注意: 如果给表单元素设置了**value**属性，则必须指定**onChange**事件处理函数，否则此字段会变成只读状态
```
var Input = React.createClass({
    getInitialState: function() {//获取初始状态
        return {value: '大麦电商'};
    },
    handleChange: function(event) { //处理改变事件
        this.setState({value: event.target.value});
    },
    render: function () {
        var value = this.state.value;
        return (
            <div>
                <input style={{color:'red'}} type="text"
                value={value} onChange={this.handleChange} />
                <p style={{color:'blue'}}>{value}</p>
            </div>
        );
    }
});
ReactDOM.render(<Input/>, document.getElementById('app'));
```
[/magic]

[slide]

# 7. 复合组件 {:&.flexbox.vleft}
**多个简单的组件嵌套，可构成一个复杂的复合组件，从而完成复杂的交互逻辑**
```
var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head}/>
                <PanelBody body={this.props.body}/>
            </div>
        );
    }
});
var PanelHead = React.createClass({
    render: function () {
        return (
            <div className="panel-heading">
                {this.props.head}
            </div>
        );
    }
});
var PanelBody = React.createClass({
    render: function () {
        return (
            <div className="panel-body">
                {this.props.body}
            </div>
        );
    }
});
ReactDOM.render(
    <Panel
        head="头部"
        body="正文"
    />,
    document.getElementById('app')
);
```

[slide]
[magic]
# 8. 组件的生命周期
React中可以指定在组件的生命周期的不同阶段执行的函数
**渲染前**
- **getDefaultProps** 在组件类创建的时候调用一次,则此处返回的对象中的相应属性将会合并到**this.props**
- **getInitialState** 在组件挂载之前调用一次。返回值将会作为**this.state**的初始值。
- **componentWillMount** 在首次渲染之前触发
渲染
- **render** 当调用的时候，会检测**this.props**和**this.state**，返回一个组件
渲染后
- **componentDidMount** 在初始化渲染执行之后立刻调用一次
- **shouldComponentUpdate** 在接收到新的**props**或者**state**，将要渲染之前调用,返回**false**则不更新组件
- **componentWillUpdate** 做一些更新之前的准备工作
- **componentDidUpdate** 更新之后触发
- **componentWillReceiveProps** 在组件接收到新的**props**的时候调用
移除
- **componentWillUnmount** 在组件从DOM中移除的时候立刻被调用
- **componentDidUnmount** 组件移除之后调用
====
```
var MessageBox = React.createClass({
    getInitialState: function () {
        console.log('MessageBox.getInitialState');
        return {
            count: 0,
        }
    },
    getDefaultProps: function () {
        console.log('MessageBox.getDefaultProps');
    },
    componentWillMount: function () {
        console.log('MessageBox.componentWillMount');
    },
    componentDidMount: function () {
        console.log('MessageBox.componentDidMount');
    },
    componentWillUnmount: function () {
        console.log('MessageBox.componentWillUnmount');
    },
    shouldComponentUpdate: function (nextProp, nextState) {
        console.log('MessageBox.shouldComponentUpdate');
        if (nextState.count > 10) return false;
        return true;
    },
    componentWillUpdate: function (nextProp, nextState) {
        console.log('MessageBox.componentWillUpdate');
    },
    componentDidUpdate: function () {
        console.log('MessageBox.componentDidUpdate');
    },
    killMySelf: function () {
        ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    },
    render: function () {
        return (
            <div>
                <h1> 计数： {this.state.count}</h1>
            </div>
        )
    }
});
ReactDOM.render(<MessageBox/>, document.getElementById('app'));
```
[/magic]

[slide]

# 9. DOM操作
给组件加上**ref="xxx"**后，可在父组件中通过**this.refs.xxx**获取该DOM元素
```
var Focus = React.createClass({
    handleClick: function() {
        this.refs.msg.focus();
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="msg" />
                <input type="button" value="获得焦点"
                onClick={this.handleClick} />
            </div>
        );
    }
});

ReactDOM.render(
    <Focus />,
    document.getElementById('app')
);
```

[slide]

# 10.通过Ajax获取数据
[**运行**](https://dearzoe.github.io/es6/)
```
var Suggestion = React.createClass({
    getInitialState:function(){
      return {}
    },
    handleChange: function () {
        var value = this.refs.input.value;
        $.ajax({
            url: 'http://www.baidu.com/su',
            type: 'get',
            jsonp: 'cb',
            dataType: 'jsonp',
            data: {wd: value},
            processData: true,
            context:this,
            success: function (result) {
                var data = result.s;
                data = data.map(function(item，index){
                    return <li key={index}>{item}</li>
                });
                this.setState({content:data});
            }
        })
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="input"
                onChange={this.handleChange}/>
                <ul>
                    {this.state.content}
                </ul>
            </div>
        )
    }
});

ReactDOM.render(<Suggestion></Suggestion>, document.getElementById('app'));
```
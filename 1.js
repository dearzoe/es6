var throttle = function(fn,interval){
	var _self = fn;//保存需要被延时执行的函数引用
	var timer;//定时器
	var firstTime = true;//是否是第一次调用
	return function(){
		//将参数列表和this都先保存下来，以备延时函数调用
		var args = arguments;
		var _me = this;
		console.log(_me);//追踪this的指向
		if(firstTime){//如果是第一次调用，不需要延迟执行
			_self.apply(_me,args);//调用函数
			firstTime = false;//将标志位置为假
			return;//执行完函数后返回，下面的代码无需执行
		}
		if(timer){//如果定时器还在，说明前一次延迟执行还没完成，直接返回，下面的代码无需执行
			return;
		}

		timer = setTimeout(function(){
			clearTimeout(timer);//清空timer
			timer = null;
			_self.apply(_me,args);//调用函数
		},interval || 500);
	};
};

//测试一下节流吧~~
window.onresize = throttle(function(){
	console.log('hello');//这里要注意this作用域问题，这里是指向外面的window
});
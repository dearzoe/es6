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
				data = data.map(function(item,index){
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
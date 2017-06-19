var Message = React.createClass({
	render: function() {
		return <h1>HelloWorld!</h1>;
	}
});
ReactDOM.render(
<Message/>,
	document.getElementById('app')
);
function Name(props){
	return(
		<p>{props.textToDisplay}</p>
	)
}

var MyForm = React.createClass({
	getInitialState: function(){
		return {

		}
	},

	handleChange: function(event){
		this.setState({
			value: event.target.value
		})
	},
		


	render: function(){
		return(
			<form>
				<label>Name:</label>
				<input type="text" value={this.state.value} onChange={this.handleChange}/>
				<Name textToDisplay={this.state.value} />
			</form>	
		)
	}
});

ReactDOM.render(
	<MyForm />,
	document.getElementById('form-container')
)
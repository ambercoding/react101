function Application(props){
	// capital letters in react means componenet,
	// components return a single virtual document
		return(
			<div className="application">
				<h1>{props.title}</h1>
				{props.message}
			</div>
		)
}

ReactDOM.render(
	<Application message="Hello, Class"title="React Day!" />,
	document.getElementById('container')
)
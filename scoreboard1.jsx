
// make a component called Application
// components are uppercase
// the app works but its huge and no different than if we pasted it in ourselves
// added prop parameter so render can send stuff to the compnent
// the app in compinenets is 1. header 2. several teams 3. each team has a counter
// props are immutable so they dont change 
// state is a piece of data that does change
// state also has an initial value that changes when x happens
// in the case of the national championship it starts at 0 initial state


var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide",
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers",
	}

]
function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)	
}

function Team(props){
	return(
			<div className="team">
 					<div className="team-name">{props.name}</div>
 					{/* remove counter, make it a component*/}
 					<Counter score={props.score}/>
 				</div>
	)

}

// React.createClass is a React component class that takes an Object
// the only required property is a render function
var Counter = React.createClass({
	// we also need to add a getinitialstate function thats part of react
	getInitialState: function() {
		// this function sets inital state of a variable andusually returns a single object
		return {
			time: "60:00",
			score: 0
		}
	},
	losePoint: function(){
		console.log("you clicked on the down button")
		this.setState({
			score: (this.state.score - 1)
		})
	},
	gainPoint: function(){
		this.setState({
			score: (this.state.score + 1)
		})
	},
	render: function(){
		//back to where we are use to!
		return(
			<div className="counter">
				<button onClick={this.losePoint} className="counter-change minus">-</button>
				<div className="team-score"> {this.state.score}</div>
				<button onClick={this.gainPoint} className="counter-change plus">+</button>	
			</div>	
		)
	}
}	
);
function Application(props){
	// componenets returna virtual dom element
	return(
		<div className="scoreboard">
				{/* to get the title we call the title porperty of the props object*/}
				<Header title={props.title} />
					
			<div className="teams">

				{/* <Team name="Alabama" score="0"/>
 				className is exclusively for styling in react
 				<Team name="Clemson" score="0"/> */}

 				{props.teams.map((team, index)=>{
 					return <Team key={index} name={team.name} score={team.score} />
 				})}

			</div>
		</div>

	)
}
// ReactDOM.render puts a component into the DOM.
// it takes two parameters. 1 the component to render and 2. where to render it
// add a title attribute to the application when its rendered
ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams}/>,
	document.getElementById('container')
)
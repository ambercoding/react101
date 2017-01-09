var Application = React.createClass({
	getInitialState: function() {
		return{
			flipped: false,
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'

		}
	},
	flip: function() {
		this.setState({ flipped: !this.state.flipped });
	},


	render: function(){
		return(
			<div className="application">
				<button onlick={this.flip}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>	
		)
		
	}
});



ReactDOM.render(
	<Application imageSrc = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg' />,
	document.getElementById('container')
	);

// var Application = React.createClass({
// 	getInitialState: function() {
// 		return{
// 			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'

// 		}
// 	},
// 	render: function(){
// 		return(
// 			<div className="application">
// 				<button>Click to Flip</button>
// 				<div><img src={this.state.image} /></div>
// 			</div>	
// 		)
		
// 	}
// });



// ReactDOM.render(
// 	<Application imageSrc = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg' />,
// 	document.getElementById('container')
// 	);
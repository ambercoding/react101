function Poster(props){
	return(
		<div className="col-sm-16 col-md-4 col-lg-3">
			<img src={props.poster} />
		</div>
	)
}
class Movies extends React.Component{
	constructor(props){
		super()
		this.state = {
	
			moviesToShow: []
		}
	}

	//we dont want to make our ajax request until our component is mounted
	componentDidMount() {
		var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5"
		$.getJSON(url, function(movieData){
			var nowPlayingArray = [];
			for(let i = 0; i < movieData.results.length; i++){
				nowPlayingArray.push(movieData.results[i]);
			}
			
			self.setState({
				moviesToShow: nowPlayingArray
			})

		});
		
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12 text-center">
						<div className="th-wrapper">
							<button className="btn btn--primary">Reset Search</button>
						</div>
						<div className="movierows">
							{/*movies go here */}
							{this.state.moviesToShow.map(function(movie){
								return<Poster key={index} poster={movie.poster_path} />
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Movies />,
	document.getElementById('moviegallery')
	)
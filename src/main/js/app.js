const React = require('react');
const ReactDOM = require('react-dom');
const request = require('superagent');
const App2 = require('./app2');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {horses:[]};
	}
	
	componentDidMount() {
		request.get('http://localhost:8080/api/horses')
			.set('Content-Type', 'application/json')
			.end((err,res) => {
			
				if(err){
					console.dir(error);
				}
				this.setState({horses:res.body._embedded.horses});
			})
	}
	
	render() {
		return (
			<div>
				<ul>
					{this.state.horses.map((item) => {
						return (
								<li key={item.horsename}>{item.horsename}</li>
						)
					})}
				</ul>
			</div>
			
		)
	}
	
}
/*
class App2 extends React.Component{
	render(){
		return(
				<div>powerd by itamura2</div>
		)
	}
}
*/
ReactDOM.render(
	<App />,
	document.getElementById('react')
)
	
/*
class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {horse: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/horse'}).done(response => {
			this.setState({horse: response.entity._embedded.employees});
		});
	}

	render() {
		return (
			<HorseList horses={this.state.horse}/>
		)
	}
}

class HorseList extends React.Component{
	render() {
		var horse = this.props.horses.map(horse =>
			<Horse key={horse._links.self.href} horse={horse}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
			</table>
		)
	}
}
*/
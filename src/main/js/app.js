const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	render() {
		return (
			<h3>horse-stable-gender</h3>
		)
	}
	
}

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
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			items: []
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleSubmit}>
					Whatcha gotta do{' '}
					<input onChange={this.handleChange} value={this.state.text} />
				</form>
				<ul>
					{this.state.items.map(item => <li key={item.id}>{item.text}</li>)}
				</ul>
			</div>
		);
	}
	handleChange(e) {
		this.setState({ text: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();

		const newItem = {
			text: this.state.text
		};
		this.setState(prevState => ({
			items: prevState.items.concat(newItem),
			text: ''
		}));
	}
}

export default App;

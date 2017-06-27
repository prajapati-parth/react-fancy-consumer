import React, { Component } from 'react'
import './App.css'
import { Fancy } from 'react-fancy-component'
import { TodoList } from 'react-fancy-component'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<h2>React Todo</h2>
				</div>
				<div className="bodyContainer">
					<Fancy
						textLog={this.handleOnClick.bind(this)}
					/>
					<h3>Current todo list</h3>
					<TodoList />
				</div>
			</div>
		);
	}

	handleOnClick() {
		console.log("clicked!")
	}
}

export default App;
